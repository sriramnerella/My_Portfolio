import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import WindowControls from '#components/WindowControls.jsx'
import useWindowStore from '#store/window.js'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  if (!data) return null

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="image-content p-8 overflow-y-auto h-full bg-white flex items-center justify-center">
        {data.imageUrl && (
          <img 
            src={data.imageUrl} 
            alt={data.name} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, "imgfile")
export default ImageWindow
