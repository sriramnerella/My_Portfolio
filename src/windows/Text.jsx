import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import WindowControls from '#components/WindowControls.jsx'
import useWindowStore from '#store/window.js'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="text-content p-8 overflow-y-auto h-full bg-white">
        {data.image && (
          <img 
            src={data.image} 
            alt={data.name} 
            className="mb-6 w-48 h-auto rounded-lg shadow-lg mx-auto border-2 border-purple-200"
          />
        )}
        
        {data.subtitle && (
          <h3 className="text-2xl font-bold mb-6 text-gray-800">{data.subtitle}</h3>
        )}

        {data.description && Array.isArray(data.description) && (
          <div className="description-paragraphs space-y-4 text-gray-700">
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, "txtfile")
export default TextWindow
