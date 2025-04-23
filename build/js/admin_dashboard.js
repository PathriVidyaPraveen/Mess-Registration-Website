
const { useState } = React;

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (!emailValue) {
      alert('Email is required');
      return;
    }

    if (!passwordValue) {
      alert('Password is required');
      return;
    }

    try {
      const response = await fetch('https://mess-app-backend-hcin.onrender.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });

      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        const student_details= data.data;
        const user_mess = data.user_mess;
        const count = data.count;
        localStorage.setItem('studentDetails',JSON.stringify(student_details) );
        localStorage.setItem('adminMess',user_mess);
        localStorage.setItem('studentCount',count);
        // alert(localStorage.getItem('studentCount'))
        alert('Login successful!');

        window.location.href = 'admin_dashboard.html';
      } else {
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Server error. Please try again.');
    }
  };

  return (
    
    <>
    
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);