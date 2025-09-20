import React, { useState } from "react";

export default function Login() {
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeSelection = (type) => setUserType(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with backend integration
    alert(`Welcome, ${name}! You have successfully authenticated as a ${userType}.`);
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logoWrap}>
          <span style={styles.logo}>🔒</span>
        </div>
        <h2 style={styles.title}>Account Access Portal</h2>
        <p style={styles.subtitle}>Select your account type to proceed</p>

        {!userType ? (
          <div style={styles.userTypeWrap}>
            <button onClick={() => handleUserTypeSelection("Corporate/Organization")}
              style={{ ...styles.btn, background: "linear-gradient(90deg,#005bea,#3ec6e0)" }}>
              Corporate / Organization Login
            </button>
            <button onClick={() => handleUserTypeSelection("Freelance Professional")}
              style={{ ...styles.btn, background: "linear-gradient(90deg,#ff512f,#dd2476)" }}>
              Freelance Professional Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.formTitle}>{userType} Authentication</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Business Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Secure Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={{ ...styles.btn, marginTop: 16 }}>
              {userType === "Freelance Professional" ? "Authenticate as Freelancer" : "Authenticate as Organization"}
            </button>
            <p style={styles.back} onClick={() => setUserType("")}>← Change Account Type</p>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(120deg,#f6d365 0%,#fda085 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 420,
    padding: 32,
    borderRadius: 18,
    background: "#fff",
    boxShadow: "0 8px 32px 0 rgba(31,38,135,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    fontSize: 48,
  },
  title: {
    fontWeight: 700,
    fontSize: 28,
    marginBottom: 4,
    color: "#22223b",
    textAlign: "center",
  },
  subtitle: {
    color: "#4a4e69",
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  userTypeWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: "100%",
  },
  btn: {
    padding: "14px 0",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
    transition: "box-shadow 0.2s",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: 8,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formTitle: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 18,
    color: "#22223b",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px 10px",
    marginBottom: 12,
    border: "1px solid #e0e1dd",
    borderRadius: 6,
    fontSize: 15,
    background: "#f7f7fa",
    outline: "none",
    transition: "border 0.2s",
  },
  back: {
    textAlign: "center",
    marginTop: 18,
    color: "#0077b6",
    cursor: "pointer",
    fontWeight: 500,
    fontSize: 15,
    textDecoration: "underline",
  },
};
