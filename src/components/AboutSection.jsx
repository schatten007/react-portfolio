import home1 from "../img/home1.png";
import {StyleAbout, StyledDescription, StyleTitle, StyleHide, StyleImage} from "./LayoutStyle";
//Animations
import { motion } from "framer-motion";
import { AboutTitle, Show, ImageAnim } from "../PageAnims";
import Wave from "./Wave";

const AboutSection = () => {
    return(
        <StyleAbout>
        <StyledDescription>
            <StyleTitle>
                <StyleHide>
                    <motion.h2 variants={AboutTitle}>We work to make</motion.h2>
                </StyleHide>
                <StyleHide>
                    <motion.h2 variants={AboutTitle}>your <span>dreams</span> come</motion.h2>
                </StyleHide>
                <StyleHide>
                    <motion.h2 variants={AboutTitle}>true.</motion.h2>
                </StyleHide>
            </StyleTitle>
            <motion.p variants={Show}>Contact us if you have any photography or videography ideas. Our highly skilled team of professionals is available 24/7.</motion.p>
            <motion.button variants={Show}>Contact Us</motion.button>
        </StyledDescription>
        <StyleImage>
                <motion.img variants={ImageAnim} src={home1} alt="img guy with camera"/>
        </StyleImage>
        <Wave/>
        </StyleAbout>
    );
}
export default AboutSection;