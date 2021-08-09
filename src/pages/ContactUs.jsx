import styled from "styled-components";
import { motion } from "framer-motion";
import {PageAnims, AboutTitle} from "../PageAnims";

const ContactUs = () => {
    return(
        <ContactStyled variants={PageAnims} initial="hidden" animate="visible" exit="exit">
            <div className="hide">
                <motion.h1 variants={AboutTitle}>Get in touch.</motion.h1>
            </div>
            <div className="hide">            
                <motion.div variants={AboutTitle} className="social">
                    <span className="circle"></span>
                    <h1>Tell us what the dog doing</h1>
                </motion.div>
            </div>
            <div className="hide">            
                <motion.div variants={AboutTitle} className="social">
                    <span className="circle"></span>
                    <h1>Send us an email.</h1>
                </motion.div>
            </div>
            <div className="hide">            
                <motion.div variants={AboutTitle} className="social">
                    <span className="circle"></span>
                    <h1>Please</h1>
                </motion.div>
            </div>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 10rem 7rem;
    display: block;
    background: white;
    height: 100vh;
    h1{
        font-size: 3rem;
        font-weight: normal;
        margin: 0;
    }
    .social{
        display: flex;
        align-items: center;
        padding: 0;
        margin-top: 4rem;
    }
    .circle{
        background: black;
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
        margin-right: 2rem;
    }
    .hide{
        overflow: hidden;
    }
`;
export default ContactUs;