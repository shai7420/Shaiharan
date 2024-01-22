import {motion, useInView} from "framer-motion";
import { useRef } from 'react';
import './Education.scss';

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

const Education = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px"});

  const Educat = [
    {
      id: 1,
      name: "Amrita College of Engineering and Technology, kanyakumari",
      date: "2018-2022",
      grade: "7.63 CGPA",
      course: "BE in Computer Science and Engineering",
    },
    {
      id: 2,
      name: "Hindu Vidyalaya Matric HSS, Thuckalay",
      date: "2017-2018",
      grade: "61%",
      course: "HSC",
    },
    {
      id: 3,
      name: "Amala Matric HSS, Thuckalay",
      date: "2015-2016",
      grade: "75%",
      course: "SSLC",
    },
  ];

  return (
    <div className="education">
      <motion.div ref={ref} className="heading" variants={variants} initial="initial" animate={isInView && "animate"}>
        <motion.h1 variants={variants}>Education</motion.h1>
        <motion.div className="wrapper" variants={variants}>
          {Educat.map((Educa,index) => (
            <motion.div className="boxedu" key={index} variants={variants} whileHover={{scale: 1.05}}>
              <div className="course">{Educa.course}</div>
              <div className="date">{Educa.date}</div>
              <div className="grade">{Educa.grade}</div>
              <div className="name">{Educa.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Education;