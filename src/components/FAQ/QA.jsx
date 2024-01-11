import { useState } from 'react';


export function QA({question, answer}) {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const borderRadius = expand ? 'rounded-3xl' : 'rounded-t-full rounded-b-full'
  const ansClass = `${expandClass} p-4 text-left text`
  const container = `${borderRadius} shadow rounded-3xl border border-gray-100`
  
  return (
    <div className={container}>
      <div className="p-4 text-xl relative font-medium flex">
        <div className="text-left montserrat w-5/6 flex-auto q-text text">
          {question}
        </div>
        <button
          aria-label="question-expander"
          className="text-xl p-4 relative bg-transparent border-none flex-auto faq-btn text"
          onClick={() => setExpand(!expand)}
        >
          {
            expand ?
              <i className="fa-solid fa-plus spin-right"></i>
            :
            <i className="fa-solid fa-plus spin-left"></i>
          }
        </button>
      </div>
      <div className={ansClass}>
        {answer}
      </div>
    </div>
  )
}
