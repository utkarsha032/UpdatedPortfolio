// import React, { useState } from 'react';
// import { BsDownload } from "react-icons/bs";
// import pdf from "../Resume.pdf";
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


// const Resume = () => {
//   const[wid, setwid]=useState(window.innerWidth);

//   const handleResize=()=>{
//     setwid(window.innerWidth);
//   }

//   window.addEventListener("load", handleResize);
//   window.addEventListener("resize", handleResize);

//   return (
//     <div className='ResumePage'>
//       <Document file={pdf} className="resumeview">
//           <Page pageNumber= {1} scale={wid<700 ? ( wid>475? 0.7: 0.5): 1}/>
//       </Document>

//       <a href={pdf} target='_blank' download="Utkarsha's Resume">
//         <button className='downloadCV' type='button'>
//           <h3><BsDownload/>&nbsp; Download CV</h3>
//         </button>
//       </a>

//     </div>
//   )
// }

// export default Resume

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
//import pdf from '../Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.6); // initial scaling

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth * 0.85); // mobile scaling
      } else {
        setPageWidth(window.innerWidth * 0.6); // desktop scaling
      }
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="ResumePage">
      <Document
  file="/Resume.pdf"
  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
  onLoadError={(e) => console.error("PDF load error:", e)}
  className="resumeview"
>
  {Array.from({ length: numPages || 0 }, (_, i) => (
    <div className="pdf-page" key={i}>
      <Page
        pageNumber={i + 1}
        width={pageWidth}
        renderTextLayer={false}         // turn off selectable text layer
        renderAnnotationLayer={false}   // turn off link overlay (kills blue boxes)
      />
      <div className="pdf-sep" />
    </div>
  ))}
</Document>

    </div>
  );
};

export default Resume;
