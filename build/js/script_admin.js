
const mess = localStorage.getItem('adminMess') || "No data available";
const registeredCount = localStorage.getItem('studentCount') || "No data available"; 
// const cs_count = localStorage.getItem('csCount')||"No data available";
// Populate the profile information dynamically


const mess_name = document.getElementById('mess_name');
const student_num = document.getElementById('student_num');
// const cs = document.getElementById('cse');

if (mess) {
    mess_name.textContent = mess;
}

if (registeredCount) {
    student_num.textContent = registeredCount;
}
// if(cs){
//     cs.textContent = cs_count;
// }


