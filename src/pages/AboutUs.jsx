import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";
import PageAnims from "../PageAnims";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
    return(
        <motion.div variants={PageAnims} initial="hidden" animate="visible" exit="exit">
            <AboutSection/>
            <ServiceSection/>
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutUs;