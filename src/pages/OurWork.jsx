import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import racer from "../img/goodtimes-small.png";
import goodtimes from "../img/theracer-small.png";
import { Link } from "react-router-dom";
import {PageAnims, Show, ImageAnim, LineAnim, FrameAnim, FrameContainer, ScrollAnim} from "../PageAnims";
import { motion } from "framer-motion";
import Scrollable from "../components/Scrollable";
import ScrollTop from "../components/ScrollTop";


const OurWork = () => {
    const [ element, controls ] = Scrollable();
    const [ element2, controls2 ] = Scrollable();
    const [ element3, controls3 ] = Scrollable();


    return(
        <Work style={{background: "white"}} variants={PageAnims} initial="hidden" animate="visible" exit="exit">
            <motion.div variants={FrameContainer}>
            <Frame1 variants={FrameAnim}></Frame1>
            <Frame2 variants={FrameAnim}></Frame2>
            <Frame3 variants={FrameAnim}></Frame3>
            <Frame4 variants={FrameAnim}></Frame4>
            </motion.div>
            <Movie  ref={element} variants={ScrollAnim} animate={controls}>
                 <Link to="/work/the-athlete">
                    <motion.h1 variatns={Show}>The Athlete</motion.h1>
                    <motion.div variants={LineAnim} className="line"></motion.div>
                    <motion.img variants={ImageAnim} src={athlete} alt="" />
                </Link>
            </Movie>
            <Movie  ref={element2} variants={ScrollAnim} animate={controls2}>
                <Link to="/work/the-racer">
                    <motion.h1 variatns={Show}>The Racer</motion.h1>
                    <motion.div variants={LineAnim} className="line"></motion.div>
                    <motion.img variants={ImageAnim} src={racer} alt="" />
                </Link>
            </Movie>
            <Movie  ref={element3} variants={ScrollAnim} animate={controls3}>
                <Link to="/work/good-times">
                    <motion.h1 variatns={Show}>Good Times</motion.h1>
                    <motion.div variants={LineAnim} className="line"></motion.div>
                    <motion.img variants={ImageAnim} src={goodtimes} alt="" />
                </Link>
            </Movie>
            <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    padding: 5rem 10rem;
`;

const Movie = styled(motion.div)`
    height: 100vh;
    a{
        text-decoration: none ;
        color: black;
    }
    img{
        object-fit: cover;
        width: 100%;
        height: 70vh;
    }
    h1{
        font-size: 3rem;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        margin-bottom: 0;
    }
    .line{
        background-color: #23D997;
        width: 100%;
        height: 0.4rem;
        margin-bottom: 2rem;
        margin-top: 0.5rem;
    }
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    top: 9%;
    left: 0;
    min-height: 100vh;
    z-index: 5;
    width: 100%;
    opacity: 1;
    background-color: #fffebf;
`;

const Frame2 = styled(Frame1)`
    background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`
export default OurWork;