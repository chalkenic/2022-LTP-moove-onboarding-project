import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import dummy from "../downloads/dummy.pdf";
import invoice from '../downloads/invoice.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewPdf = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

//   KEEP IT IN THE DOCUMENT TAG!!!!
  return (
    <div>
      <Document file={invoice} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <Page pageNumber={page} />
          ))}
      </Document>
    </div>
  );
};

export default ViewPdf;
