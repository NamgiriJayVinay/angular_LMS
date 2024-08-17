// src/utils/generateStudentPDF.js

import { PDFDocument, rgb } from 'pdf-lib';

export const generateStudentPDF = async (student) => {
    const existingPdfBytes = await fetch('blueprint.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    firstPage.drawText(`Name: ${student.name}`, { x: 70, y: 700, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Section: ${student.section}`, { x: 70, y: 680, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Date: ${new Date().toLocaleDateString()}`, { x: 70, y: 660, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Batch: ${student.batch}`, { x: 70, y: 640, size: 12, color: rgb(0, 0, 0) });
    firstPage.drawText(`Department: ${student.department}`, { x: 70, y: 620, size: 12, color: rgb(0, 0, 0) });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};
