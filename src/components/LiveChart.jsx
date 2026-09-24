import { useEffect, useRef, useState } from 'react'

// Real market data from the public Binance API (CORS-open, no keys):
// candles for the chart and the 24h ticker for the header + stats.
const klinesUrl = (symbol, interval) =>
  `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=120`
const tickerUrl = (symbol) => `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`

const money = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const volume = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 })

/**
 * Live trading dashboard panel: price header + stats strip + real chart
 * rendered with lightweight-charts (lazy chunk, only loaded here).
 * Props vary the pair and chart style so each page can show a different
 * dashboard: Product uses BTC candles, About uses an ETH area trend.
 */
export default function LiveChart({
  symbol = 'BTCUSDT',
  pair = 'BTC / USDT',
  mode = 'candles',
  interval = '1h',
  intervalLabel = '1H candles',
  stats = 'volume',
}) {
  const containerRef = useRef(null)
  const [ticker, setTicker] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false
    let chart = null

    const load = async () => {
      try {
        const [klinesRes, tickerRes] = await Promise.all([
          fetch(klinesUrl(symbol, interval)),
          fetch(tickerUrl(symbol)),
        ])
        if (!klinesRes.ok || !tickerRes.ok) throw new Error('binance fetch failed')
        const klines = await klinesRes.json()
        const tickerData = await tickerRes.json()
        if (cancelled) return

        setTicker({
          price: parseFloat(tickerData.lastPrice),
          change: parseFloat(tickerData.priceChangePercent),
          high: parseFloat(tickerData.highPrice),
          low: parseFloat(tickerData.lowPrice),
          volume: parseFloat(tickerData.quoteVolume),
        })

        // The charting library lives in its own lazy chunk.
        const { createChart, CandlestickSeries, AreaSeries } = await import('lightweight-charts')
        if (cancelled || !containerRef.current) return

        chart = createChart(containerRef.current, {
          // autoSize: the library observes its own container and resizes
          // with it, so the chart never pins the layout width.
          autoSize: true,
          height: 360,
          layout: {
            background: { type: 'solid', color: 'transparent' },
            textColor: '#5f705f',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
          grid: {
            vertLines: { color: 'rgba(20, 41, 28, 0.05)' },
            horzLines: { color: 'rgba(20, 41, 28, 0.05)' },
          },
          rightPriceScale: { borderColor: 'rgba(20, 41, 28, 0.1)' },
          timeScale: {
            borderColor: 'rgba(20, 41, 28, 0.1)',
            timeVisible: true,
            secondsVisible: false,
          },
          crosshair: { mode: 0 },
        })

        if (mode === 'area') {
          const series = chart.addSeries(AreaSeries, {
            lineColor: '#1f8a58',
            topColor: 'rgba(31, 138, 88, 0.25)',
            bottomColor: 'rgba(31, 138, 88, 0)',
            lineWidth: 2,
          })
          series.setData(
            klines.map((k) => ({
              time: Math.floor(k[0] / 1000),
              value: parseFloat(k[4]),
            })),
          )
        } else {
          const series = chart.addSeries(CandlestickSeries, {
            upColor: '#156344',
            downColor: '#b5472f',
            borderUpColor: '#156344',
            borderDownColor: '#b5472f',
            wickUpColor: '#156344',
            wickDownColor: '#b5472f',
          })
          series.setData(
            klines.map((k) => ({
              time: Math.floor(k[0] / 1000),
              open: parseFloat(k[1]),
              high: parseFloat(k[2]),
              low: parseFloat(k[3]),
              close: parseFloat(k[4]),
            })),
          )
        }
        chart.timeScale().fitContent()
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }

    load()

    return () => {
      cancelled = true
      chart?.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="live-chart">
      <div className="live-chart__head">
        <div>
          <span className="live-chart__pair">{pair}</span>
          {ticker ? (
            <>
              <span className="live-chart__price">${money.format(ticker.price)}</span>
              <span className={`live-chart__change ${ticker.change >= 0 ? 'is-up' : 'is-down'}`}>
                {ticker.change >= 0 ? '▲' : '▼'} {Math.abs(ticker.change).toFixed(2)}%
              </span>
            </>
          ) : (
            <span className="live-chart__hint">Live market data</span>
          )}
        </div>
        <span className="live-chart__tag">{intervalLabel}</span>
      </div>

      {ticker && (
        <div className="live-chart__stats">
          <span className="live-chart__stat">
            <small>24H High</small>
            <strong>${money.format(ticker.high)}</strong>
          </span>
          <span className="live-chart__stat">
            <small>24H Low</small>
            <strong>${money.format(ticker.low)}</strong>
          </span>
          {stats === 'change' ? (
            <span className="live-chart__stat">
              <small>24H Change</small>
              <strong className={ticker.change >= 0 ? 'is-up' : 'is-down'}>
                {ticker.change >= 0 ? '+' : ''}
                {ticker.change.toFixed(2)}%
              </strong>
            </span>
          ) : (
            <span className="live-chart__stat">
              <small>24H Volume</small>
              <strong>${volume.format(ticker.volume)}</strong>
            </span>
          )}
        </div>
      )}

      <div className="live-chart__body" ref={containerRef}>
        {status === 'loading' && (
          <span className="live-chart__state">Loading live chart data…</span>
        )}
        {status === 'error' && (
          <span className="live-chart__state">Live chart data is unavailable right now.</span>
        )}
      </div>
    </div>
  )
}
