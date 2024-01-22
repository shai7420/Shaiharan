import { useState } from "react";
import {motion} from "framer-motion";
import './Sidebar.scss';
import Links from './Links/Links';
import Togglebutton from './Togglebutton/Togglebutton';

const Sidebar = () => {

  const variants = {
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      },
    },
    closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
      },
    },
  };
  
  const [open,setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <div onClick={handleLinkClick}>
            <Links />
          </div>
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
};

export default Sidebar;