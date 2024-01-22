import { useRef } from 'react';
import './Projects.scss';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Medscape",
    date: "2023",
    description:
      "Developed a medical app with API CRUD functionality.Enables user signup, login, and manages medicine details.Implemented as a single-page application.",
    image: process.env.PUBLIC_URL + "/medscape.png",
    tags: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React.js",
      "Redux",
      "Axios",
      "PostmanAPI",
      "NPM",
      "JSON",
    ],
    category: "web app",
    webapp: "https://medscape-c7d43.web.app/",
  },
  {
    id: 2,
    title: "Vortex Cinemas",
    date: "2023",
    description:
      "Developed a ticket booking web application using React.js and Firebase.Implemented user authentication and data storage using Firebase Authentication and Firestore.Created an admin panel for adding new shows.",
    image:"/vortex.png",
    tags: [
      "HTML5",
      "CSS",
      "Bootstrap",
      "Javascript",
      "React.js",
      "Redux",
      "NPM",
      "JSON",
      "Firebase",
    ],
    category: "web app",
    webapp: "https://vortex-cinemas.web.app/",
  },
];

const Single = ({item}) =>{

  const ref = useRef()

  const {scrollYProgress} = useScroll({ target: ref,  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return(
    <section id='Projects'>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt={item.title}/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <h6>{item.date}</h6>
            <p>{item.description}</p>
            <a href={item.webapp} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({ target: ref, offset:["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping:30,});

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Projects;