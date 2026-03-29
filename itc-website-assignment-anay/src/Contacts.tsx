import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            maxWidth: "420px",
            margin: "80px auto",
            padding: "30px",
            backgroundColor: "rgba(20, 20, 20, 0.8)",
            borderRadius: "12px",
            boxShadow: "0 0 25px rgba(0,0,0,0.5)",
            color: "#e5e5e5",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "25px",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </div>
          <div style={{ marginBottom: "18px" }}>
            <div style={{ marginBottom: "6px", fontSize: "14px" }}>Name</div>
            <input
              name="name"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#111",
                color: "#fff",
              }}
            />
          </div>
          <div style={{ marginBottom: "18px" }}>
            <div style={{ marginBottom: "6px", fontSize: "14px" }}>Email</div>
            <input
              name="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#111",
                color: "#fff",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "6px", fontSize: "14px" }}>Message</div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #333",
                backgroundColor: "#111",
                color: "#fff",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#6a5acd",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
