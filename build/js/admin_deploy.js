const AdminDashboard = () => {
    const handleDeploy = async () => {
      try {
        const response = await fetch('https://mess-app-backend-hcin.onrender.com/deploy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('studentCount',0);
            localStorage.setItem('studentDetails',null);
            alert(data.message);
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
        alert("An error occurred while deploying.");
      }
    };
  
    return (
      <div className="dashboard">
        <h3>Float registration form:</h3>
        <button onClick={handleDeploy}>Reset</button>
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AdminDashboard />);
  