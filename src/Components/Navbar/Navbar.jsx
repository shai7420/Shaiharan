import {motion} from "framer-motion";
import './Navbar.scss';
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>SHAIHARAN</motion.span>
                <div className="social">
                    <a href='https://github.com/shai7420' target="_blank" rel="noopener noreferrer"><img src='/gitHub.png' alt='github'></img></a>
                    <a href='https://www.instagram.com/__shai_7__?igsh=MWxwcXkwNnRzdWF1dQ==' target="_blank" rel="noopener noreferrer"><img src='/instagram.png' alt='instagram'></img></a>
                    <a href='https://x.com/NamesofS?t=KGaSUU2tnQPp1-WmIERy4Q&s=09' target="_blank" rel="noopener noreferrer"><img src='/twitter.png' alt='twitter'></img></a>
                    <a href='https://www.figma.com/@Shai07' target="_blank" rel="noopener noreferrer"><img src='/figma.png' alt='figma'></img></a>
                </div>
        </div>
    </div>
  )
}

export default Navbar;