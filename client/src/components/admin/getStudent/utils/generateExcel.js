// src/components/student/profile/utils/generateExcel.js
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const generateExcel = (students) => {
    const worksheetData = students.map((stu, index) => ({
        'Sr No.': index + 1,
        'Name': stu.name,
        'Username': stu.username,
        'Email': stu.email,
        'Section': stu.section,
        'Batch': stu.batch,
        'Department': stu.department,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students Details');

    // Set column widths
    const columnWidths = [
        { wch: 6 },  // Sr No.
        { wch: 20 }, // Name
        { wch: 20 }, // Username
        { wch: 30 }, // Email
        { wch: 10 }, // Section
        { wch: 10 }, // Batch
        { wch: 20 }  // Department
    ];
    worksheet['!cols'] = columnWidths;

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: EXCEL_TYPE });
    saveAs(data, 'students_details.xlsx');
};
