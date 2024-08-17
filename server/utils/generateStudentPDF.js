import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const generateStudentPDF = async (student) => {
    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the document
    const page = pdfDoc.addPage([600, 800]);

    // Load the font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Draw text on the page
    page.drawText(`Name: ${student.name}`, {
        x: 50,
        y: 750,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Section: ${student.section}`, {
        x: 50,
        y: 720,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Date: ${new Date().toLocaleDateString()}`, {
        x: 50,
        y: 690,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Batch: ${student.batch}`, {
        x: 50,
        y: 660,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    page.drawText(`Department: ${student.department}`, {
        x: 50,
        y: 630,
        size: 24,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
};

export default generateStudentPDF;
