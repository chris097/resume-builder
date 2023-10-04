import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Resume from '../../components/Resume';
import { FiDownload } from 'react-icons/fi';

const FinalResume = () => {

 const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadPDF = () => {
    if (contentRef.current) {
      const content = contentRef.current;

      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Options for pdf.fromHTML
      const options = {
        pagesplit: true,
        background: '#fff',
      };

      // Generate the PDF from the content using html2canvas
      html2canvas(content, {
        scale: 2, // Adjust the scale if needed
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 180, 0);

        // Save or download the PDF
        pdf.save('cevBulder-resume-template');
      });
    }
  };

  return (
    <div className='mx-auto w-[94%]'>
            <div className='flex lg:justify-center'>
                <div className='lg:flex-1 mt-44'>
                    <div className='flex items-center'>
                        <h2 className='lg:text-5xl text-4xl text-black/90 font-poppins'>Congratulations!</h2>
                        <div className='-ml-10'><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32.5" cy="32.5" r="32.5" fill="#0073E6" fillOpacity="0.24" />
                        </svg>
                        </div>
                    </div>
                    <p className='lg:text-2xl text-xl w-[90%] leading-10'>Your resume is awesome ready for download. Get it in any format of your choice.</p>
                    <button onClick={handleDownloadPDF} className='bg-corered text-white p-4 gap-3 justify-center rounded mt-7 lg:w-[50%] w-full flex items-center'>
                        <span>Download</span> <FiDownload size={16} />
                    </button>
        </div>
        <div>
    </div>
                <div ref={contentRef} className='lg:flex-1 lg:block hidden'>
                    <Resume />
                </div>
            </div>
        </div>
  );
};


export default FinalResume;
