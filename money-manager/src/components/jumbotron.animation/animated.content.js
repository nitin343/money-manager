import React from 'react';
import { motion } from "framer-motion";


import Box1 from './Box2.content';
import Box from './Box.content';


const pageVariants = {
    in: {
      opacity: 1,
      x:'0',
  
    },
    out: {
      opacity: 0,
      x:"-100%",
      
     
    },
  }; 
  
  const pageTransition ={
      duration: 1.5,
    
   
    
      ease:"anticipate",
  }

  const pageTransition2 ={
    duration: 2.5,
  
 
  
    ease:"anticipate",
}

const AnimatedDiv = () => (

    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>

      <div>
      <Box />
    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition2}>

      <Box1 />
      <button type="button" class="btn btn-outline-primary">For Free</button>
  </motion.div>
    </div>
  </motion.div>
);


export default AnimatedDiv;