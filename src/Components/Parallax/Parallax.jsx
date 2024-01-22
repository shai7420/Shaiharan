import {motion, useScroll, useTransform} from "framer-motion";
import './Parallax.scss';
import { useRef } from "react";

const Parallax = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yh1 = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
    const yplanets = useTransform(scrollYProgress, [0,1], ["0%", "100%"])

    return (
        <div className="parallax" ref={ref}>
            <motion.h1 style={{y:yh1}}>What i know...</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{y:yplanets}} className="planets"></motion.div>
            <motion.div style={{x:yplanets}} className="stars"></motion.div>
        </div>
    )
}

export default Parallax;