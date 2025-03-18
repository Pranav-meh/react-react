import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [forgivenessLevel, setForgivenessLevel] = useState(0);
  const messages = [
    "Hey... I might have messed up 😢",
    "I promise I didn’t mean it! 😭",
    "You're too awesome to stay mad at me! 🥺",
    "I’ll buy you food... and hugs? 🍕🤗",
    "PLEASEEE FORGIVE MEEE 😭💖",
    "YOU HAVE TO FORGIVE ME NOW 🥺👉👈",
  ];

  return (
    <div className="container">
      <motion.h1
        className="apology-text"
        animate={{ scale: 1 + forgivenessLevel * 0.1 }}
      >
        {messages[Math.min(forgivenessLevel, messages.length - 1)]}
      </motion.h1>

      <div className="buttons">
        <motion.button
          className="yes-btn"
          onClick={() => setForgivenessLevel((prev) => prev + 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Fine, I forgive you 😌
        </motion.button>

        <motion.button
          className="no-btn"
          onClick={() => alert("Ouch! Try again? 😭")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ rotate: [0, -10, 10, 0], transition: { duration: 0.2 } }}
        >
          Nope. Try harder. 😏
        </motion.button>
      </div>
    </div>
  );
}

export default App;
