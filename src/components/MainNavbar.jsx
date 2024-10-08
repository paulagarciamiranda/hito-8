import React from "react";

const MainNavbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div
      style={{
        margin: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10vh"
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <h3>Pizzería Mamma mía!</h3>
        <button>🍕 Home</button>

        {token ? (
          <>
            <button>👤 Profile</button>
            <button>🚪 Logout</button>
          </>
        ) : (
          <>
            <button>🔑 Login</button>
            <button>✏️ Register</button>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "4px 10px",
            border: "1px solid aqua",
            color: "aqua",
          }}
        >
          💰 Total: $
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;
