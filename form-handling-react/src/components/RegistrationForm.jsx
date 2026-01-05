import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  function validate() {
    let temp = {};
    if (!username) temp.username = "Username is required";
    if (!email) temp.email = "Email is required";
    if (!password) temp.password = "Password is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      console.log({ username, email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <p>{errors.username}</p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <p>{errors.email}</p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <p>{errors.password}</p>

      <button type="submit">Register</button>
    </form>
  );
}
