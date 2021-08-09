import styled from "styled-components";
import { motion } from "framer-motion";

export const StyleAbout = styled(motion.div)`
    display: flex;
    min-height: 90vh;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    color: white;
`;

export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 10;
    p{
        font-size: 1rem;
        padding: 1rem 0;
    }
`;
export const StyleTitle = styled.div`
    h2{
        font-weight: lighter;
        font-size: 3rem;
        margin: 0;
        padding: 0;
    }
`;
export const StyleHide = styled.div`
    overflow: hidden;
`;
export const StyleImage = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 10;
    img{
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;
