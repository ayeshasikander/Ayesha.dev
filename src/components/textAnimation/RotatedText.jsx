import React from "react";
import { motion } from "framer-motion";
import "../../style/cardsLayout/rotatedText.scss";

const RotatedText = () => {
  return (
    <div className="rotating-text-container">
      <motion.div
        className="rotating-text"
        animate={{ rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JavaScript
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JavaScript
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JavaScript
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JavaScript
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          React
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          JS
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          SCSS
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
        >
          Development
        </motion.div>
        <motion.div
          className="text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          Programmers
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RotatedText;
