import styled from "styled-components";
import {Link} from "react-router-dom";
import { NavAnim }  from "../PageAnims";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation().pathname;
    return(
        <StyledNavbar>
            <Link to="/"><h1>ZagreUS</h1></Link>
            <ul>
                <li>
                    <Link to="/">About</Link>
                    <Line variants={NavAnim} animate={ (location === "/") ? "visible" : "hidden"}/>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line variants={NavAnim} animate={ (location === "/work") ? "visible" : "hidden"}/>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line variants={NavAnim} animate={ (location === "/contact") ? "visible" : "hidden"}/>
                </li>
            </ul>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    background: #282828;
    display: flex;
    position: fixed;
    width: 100%;
    min-height: 10vh;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    margin: auto;
    z-index: 100;
    
    ul {
        display: flex;
        li{
            list-style-type: none;
            padding-left: 10rem;
            position: relative;
        }
    }
    h1{
        color: white;
        font-family: 'Style Script', cursive;
        font-size: 1rem;
    }
    a{
        text-decoration: none;
        color: white;
        font-size: 0.9rem;
    }
`;

const Line = styled(motion.div)`
    background: #23D997;
    height: 0.2rem;
    margin-top: 0.3rem;
    width: 0;
`;
export default Navbar;