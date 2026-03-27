import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import WindowControls from '#components/WindowControls.jsx';
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

if (import.meta.env.DEV) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
} else {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}


const Resume = () => {
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return <>
  <div id="window-header">
    <WindowControls target="resume" />
    <h2>Resume.pdf</h2>
    <a href="files/resume.pdf" download className='cursor-pointer' title='Download Resume' >
    <Download className='icon' />
    </a>
  </div>

  <div className="pdf-container overflow-y-auto max-h-96">
    <Document
      file="files/resume.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div className="p-4 text-center">Loading resume...</div>}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <div key={`page_${index + 1}`} className="mb-4">
          <Page
            pageNumber={index + 1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={0.8}
          />
        </div>
      ))}
    </Document>
  </div>
  </>
}
const ResumeWindow = WindowWrapper(Resume , "resume" )
export default ResumeWindow