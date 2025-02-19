import axios from "axios";
import { useState } from "react";
import "../styles/PatientPortal.css"
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const AuthForm= () => {
  const [isLogin, setIsLogin] = useState(true); // Toggles between Login and Signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate hook


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // LOGIN REQUEST
        const { data } = await axios.post("http://localhost:3000/api/auth/login", { email, password });
        localStorage.setItem("username", data.name); // Save username in local storage
        alert("Login successful!");
        navigate("/patient-portal");
      } else {
        // SIGNUP REQUEST
        await axios.post("http://localhost:3000/api/auth/register", { name, email, password });
        alert("Registration successful! Please log in.");
        setIsLogin(true); // Switch back to login after successful signup
      }
    } catch (error) {
      alert("Error processing request");
    }
  };

  return (
    <div>
       <div>
        <Navbar />
      </div>
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Sign up" : "Already have an account? Log in"}
        </button>
      </div>
    </div>
    </div>
  );
}

export default AuthForm;
