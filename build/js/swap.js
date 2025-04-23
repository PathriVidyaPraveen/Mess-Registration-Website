const currentMess = localStorage.getItem('studentCurrentMess');

const messitem = document.getElementById('mess_place');

if(messitem){
    messitem.textContent = currentMess;
}
else{
    messitem.textContent= "No data available";
}
