// // Get the student details from localStorage
const name = localStorage.getItem('studentName');
const roll_no = localStorage.getItem('studentRollNum');
const email = localStorage.getItem('studentEmail');

const profileName = document.getElementById('profileName');
const profileRoll = document.getElementById('profileRoll');
const profileEmail = document.getElementById('profileEmail');

// If the information is available, populate it; otherwise, show a message
if (name && roll_no && email) {
    profileName.textContent = name;
    profileRoll.textContent = roll_no;
    profileEmail.textContent = email;
} else {
    profileName.textContent = "No data available";
    profileRoll.textContent = "No data available";
    profileEmail.textContent = "No data available";
}
