const students = JSON.parse(localStorage.getItem('studentDetails'));

const container = document.getElementById('student-container');

if (students && students.length > 0) {
  const table = document.createElement('table');
  table.className = 'student-table';


  const headerRow = document.createElement('tr');
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  const rollHeader = document.createElement('th');
  rollHeader.textContent = 'Roll Number';

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(rollHeader);
  table.appendChild(headerRow);

  students.forEach(student => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name || 'N/A';

    const rollCell = document.createElement('td');
    rollCell.textContent = student.roll_no ||'N/A';

    row.appendChild(nameCell);
    row.appendChild(rollCell);

    table.appendChild(row);
  });

  container.appendChild(table);
} else {
  container.textContent = 'No registered students found.';
}
