// src/components/student/profile/utils/generateExcel.js
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

export const generateExcel = (user) => {
    const worksheetData = [
        { 'Label': 'Name', 'Value': user.name },
        { 'Label': 'Email', 'Value': user.email },
        { 'Label': 'Username', 'Value': user.username },
        { 'Label': 'Department', 'Value': user.department },
        { 'Label': 'DOB', 'Value': user.dob },
        { 'Label': 'Year', 'Value': user.year },
        { 'Label': 'Contact Number', 'Value': user.contactNumber },
        { 'Label': 'Section', 'Value': user.section },
        { 'Label': "Father's Name", 'Value': user.fatherName },
        { 'Label': "Mother's Name", 'Value': user.motherName },
        { 'Label': "Father's Contact Number", 'Value': user.fatherContactNumber },
        { 'Label': 'Batch', 'Value': user.batch },
    ];

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Profile Details');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: EXCEL_TYPE });
    saveAs(data, 'profile_details.xlsx');
};
