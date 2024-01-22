import { useRef } from 'react';
import './Skills.scss';
import {motion, useInView} from "framer-motion";

const textVariants = {
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

const Skills = () => {

    const ref = useRef();

    const isInview = useInView(ref,{ margin:"0px" });

    const skills = [
        {
          title: "Frontend/Backend",
            skills: [
                { name: "React Js",},
                { name: "Redux",},
                { name: "Axios",},
                { name: "HTML",},
                { name: "CSS",},
                { name: "JavaScript",},
                { name: "Bootstrap",},
                { name: "Firebase",},
                { name: "PHP",},
                { name: "Laravel",},
                { name: "PHPMyAdmin",},
            ]
        },
        {
            title: "Others",
              skills: [
                  { name: "Git",},
                  { name: "Github",},
                  { name: "Github Pages",},
                  { name: "Framer Motion",},
                  { name: "VS Code",},
                  { name: "Figma",},
                  { name: "EmailJs",},
                  { name: "NPM",},
                  { name: "Sublime Text",},
                  { name: "JSON",},
              ]
        },
    ]
    
  return (
    <div className="skills">
        <motion.div className="wrapper" variants={textVariants} initial="initial" ref={ref} animate={isInview && "animate"}>
            <motion.h1 className='title' variants={textVariants}>Skills</motion.h1>
            <motion.div className="skillsContainer" variants={textVariants}>
            {skills.map((skill, index) => (
                <motion.div className="skill" key={index} variants={textVariants}>
                    <motion.div className="skilltitle" variants={textVariants}>{skill.title}</motion.div>
                    <motion.div className="skillList" variants={textVariants}>
                        {skill.skills.map((item, subIndex) => (
                        <motion.div className="skillitem" key={subIndex} variants={textVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
                            {item.name}
                        </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills;