import {motion, useInView} from "framer-motion";
import { useRef } from 'react';
import './Achievements.scss';

const variants = {
  initial:{
      y: 500,
      opacity: 0,
  },
  animate:{
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.5,
          staggerChildren: 0.1,
      },
  },
};

const Achievements = () => {

  const ref = useRef();;
  
  const isInView = useInView(ref, { margin: "-100px"});

  const Achieves = [
    {
      id: 1,
      name: "MashupStack",
      date: "2023",
      course: "ReactJS Front End Development",
      certificate: "(Received course completion certificate)",
    },
    {
      id: 2,
      name: "Slate International",
      date: "2013",
      course: "Soft Skill",
      certificate: "(Received course completion certificate)",
    },
    {
      id: 3,
      name: "Bharath Institute of English",
      date: "2015",
      course: "Tamil Nadu State level English proficiency test",
      certificate: "(Secured first class in proficiency test)",
    },
    {
      id: 4,
      name: "Internshala",
      date: "2022",
      course: "6 weeks online training on UI/UX Design",
      certificate: "(Received course completion certificate)",
    },
  ];
  
  return (
    <div className="achievements">
      <motion.div ref={ref} className="heading" variants={variants} initial="initial" animate={isInView && "animate"}>
        <motion.h1 variants={variants}>Achievements</motion.h1>
        <motion.div className="wrapper" variants={variants}>
          {Achieves.map((Achieve,index) => (
            <motion.div className="box" key={index} variants={variants} whileHover={{scale: 1.05}}>
              <div className="course">{Achieve.course}</div>
              <div className="name">{Achieve.name}</div>
              <div className="date">{Achieve.date}</div>
              <div className="certificate">{Achieve.certificate}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Achievements;