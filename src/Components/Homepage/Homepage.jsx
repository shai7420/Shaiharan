import './Homepage.scss';
import {motion} from "framer-motion";

const resume = () => {
    const url = "https://docs.google.com/document/d/1Hg295ZjxsOh-5bAeAqq-7aHIfikbOK6v7fL09tAPj00/edit?usp=drivesdk";
    window.open(url, '_blank');
};

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollbutton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
    },
};

const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-480%",
        transition:{
            duration:50,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
};

const Homepage = () => {
  return (
    <div className="homepage">
        <div className="wrapper">
            <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>SHAIHARAN</motion.h2>
                <motion.h1 variants={textVariants}>Front-End Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} onClick={resume}>Check My Resume</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollbutton" src='/scroll.png' alt='scroll'/>
            </motion.div>
        </div>
        <motion.div className="slidingtextcontainer" variants={sliderVariants} initial="initial" animate="animate">
            Front-End Developer Shaiharan
        </motion.div>
        <div className="imagecontainer">
            <img src='/hero.png' alt='hero'/>
        </div>
    </div>
  )
}

export default Homepage;