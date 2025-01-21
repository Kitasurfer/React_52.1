import React from "react";
import Feedback from "../../components/Feedback/Feedback";

const Homework04 = () => {
  return (
    <div style={{ 
      padding: "40px 20px",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "40px",
        color: "#1e293b",
        fontSize: "2.5rem",
        fontWeight: "700",
        letterSpacing: "-0.025em",
        textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"
      }}>
        Interactive Feedback
      </h1>
      <Feedback />
    </div>
  );
};

export default Homework04;