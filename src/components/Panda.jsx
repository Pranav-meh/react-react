import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import clickSound from '../assets/sounds/click.mp3';

const Panda = ({ emoji, onClick }) => {
  const [play] = useSound(clickSound);

  return (
    <motion.div
      className="panda"
      onClick={() => {
        onClick();
        play();
      }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <span role="img" aria-label="panda">{emoji}</span>
    </motion.div>
  );
};

export default Panda;