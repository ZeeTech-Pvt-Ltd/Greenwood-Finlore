import { useState } from 'react'
import Icon from './Icon'
import { FAQS } from '../data/content'

export default function FaqList() {
  // accordion behaviour: opening one question closes the others
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="faq-list">
      {FAQS.map((item, i) => {
        const open = openIndex === i
        return (
          <div className={`faq-item${open ? ' is-open' : ''}`} key={item.q}>
            <button
              className="faq-item__q"
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              {item.q}
              <Icon name="plus" size={18} />
            </button>
            {open && <p className="faq-item__answer">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
