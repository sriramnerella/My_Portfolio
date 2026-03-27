import React from 'react'
import useWindowStore from '#store/window.js'
const WindowControls = ({target}) => {
  const {closeWindow, minimizeWindow, toggleMaximizeWindow } = useWindowStore();
  return (
    <div id = "window-controls" >

      <div className="close" onClick={()=>closeWindow(target)} title="Close"></div>
      <div className="minimize" onClick={()=>minimizeWindow(target)} title="Minimize"></div>
      <div className="maximize" onClick={()=>toggleMaximizeWindow(target)} title="Maximize/Restore"></div>

    </div>
  )
}

export default WindowControls