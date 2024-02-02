import { useState } from 'react';


export function QA({question, answer}) {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const borderRadius = expand ? 'rounded-3xl' : 'rounded-3xl'
  const ansClass = `${expandClass} century-ps about-us-font-color text-l text-left text px-4 py-4`
  const container = `${borderRadius} shadow faq_glass rounded-1xl border border-gray-100`
  
  return (
    <div className={container}>
      <div className="text-l relative font-medium flex ">
        <div className="century-ps about-us-font-color text-l text-left w-5/6 flex-auto px-4 py-4">
          {question}
        </div>
        <button
          aria-label="question-expander"
          className="text-xl p-4 relative bg-transparent border-none about-us-font-color flex-auto faq-btn text"
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
