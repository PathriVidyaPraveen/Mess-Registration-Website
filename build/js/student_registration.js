const { useState, useEffect } = React;

function App() {
  const [currentMess, setCurrentMess] = useState('');
  const [previousMess, setPreviousMess] = useState('');
  const [selectedMess, setSelectedMess] = useState('');

  useEffect(() => {
    const current = localStorage.getItem('studentCurrentMess');
    const previous = localStorage.getItem('studentPreviousMess');

    setCurrentMess(current || 'Not registered');
    setPreviousMess(previous || 'No previous mess');
  }, []);

  const handleRegister = async () => {
    if (!selectedMess) {
      alert("Please select a mess to register.");
      return;
    }
  
    const email = localStorage.getItem('studentEmail');
    const password = localStorage.getItem('studentPassword'); 
    if (!email || !password) {
      alert("User not logged in.");
      return;
    }
  
    let messCode = '';
    if (selectedMess === "Mess A") messCode = "MESS-A";
    else if (selectedMess === "Mess B") messCode = "MESS-B";
  
    try {
      const response = await fetch('https://mess-app-backend-hcin.onrender.com/api/current-mess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          mess_to_be_registered: messCode
        })
      });
  
      const data = await response.json();
      if (response.ok) {
        // localStorage.setItem('studentPreviousMess', currentMess);
        localStorage.setItem('studentCurrentMess', data.assignedMess);
        // setPreviousMess(currentMess);
        setCurrentMess(data.assignedMess);
        alert(`Registered to ${data.assignedMess}`);
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert("An error occurred while registering.");
    }
  };
  

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Mess Info</h2>
        <a href="student_dashboard.html">← Back to Dashboard</a>
      </div>

      <div className="main">
        <div className="welcome-box">MESS DETAILS</div>

        <div className="info-box">
          <h3>Current Month Mess</h3>
          <p>
            You are registered to: <strong>{currentMess}</strong>
          </p>
        </div>

        <div className="info-box">
          <h3>Previous Month Mess</h3>
          <p>
            You were registered to: <strong>{previousMess}</strong>
          </p>
        </div>

        <div className="info-box">
          <h3>Register for New Mess</h3>
          <select
            value={selectedMess}
            onChange={(e) => setSelectedMess(e.target.value)}
            className="mess-select"
          >
            <option value="">-- Select Mess --</option>
            <option value="Mess A">Mess A</option>
            <option value="Mess B">Mess B</option>
          </select>

          <button onClick={handleRegister} className="register-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);