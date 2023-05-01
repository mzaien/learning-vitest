import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "example@gmail.com" && password === "password123") {
      setError(null);
      alert("Login Successful!");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Login Form</h2>
      <div>
        <label>Email:</label>
        <input
          id="email"
          aria-label="email"
          type="email"
          required
          aria-required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          id="password"
          aria-label="password"
          type="password"
          required
          aria-required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
