import { WindowControls } from '#components'
import { education } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return <>
  <div id="window-header">
    <WindowControls target="safari" />
    <PanelLeft className='ml-10 icon' />
    <div className='flex items-center gap-1 ml-5'>

      <ChevronLeft  className='icon' />
      <ChevronRight className='icon' />

    </div>

    <div  className='flex-1 flex-center gap-3' >

      <ShieldHalf className='icon' />

      <div className='search'>
       <Search className='icon' />

       <input type="text"  placeholder='Search or enter website name' 
       className='flex-1'/>
      </div>

    </div>

    <div className='flex items-center gap-5'>
      
      <Share className='icon' />
      <Plus className='icon' />
      <Copy className='icon' />

    </div>
  </div>

  <div className='blog'>
    <h2 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-10">My Education Journey</h2>

    <div className='space-y-8'>
   {education.map(({id, degree, institution, location, cgpa, marks, level, years})=>(

    <div key={id} className='blog-post border-l-4 border-purple-500 pl-6 hover:shadow-lg transition-shadow'>
      <div className="content" style={{ gridColumn: '1 / -1' }}>
        <p className="text-purple-500 font-bold text-sm uppercase tracking-wide">{level}</p>
        {years && <p className="text-blue-600 font-semibold text-sm mt-1">{years}</p>}
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{degree}</h3>
        <p className="text-lg font-medium text-gray-700">{institution}</p>
        <p className="text-gray-500">{location}</p>
        {cgpa && <p className="text-green-600 font-bold mt-3 text-lg"> CGPA: {cgpa}</p>}
        {marks && <p className="text-green-600 font-bold mt-3 text-lg"> Marks: {marks}</p>}
      </div>
    </div>

   ))}
    </div>

  </div>

  </>
}
const SafariWindow  = WindowWrapper(Safari, "safari");
export default SafariWindow;