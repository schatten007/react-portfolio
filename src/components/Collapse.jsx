import { motion, AnimateSharedLayout} from "framer-motion";
import { useState } from "react";

const Collapse = ({children, question}) => {
    const [ active, setActive ] = useState(false); 
    return(
        <AnimateSharedLayout>
        <motion.div layout className="question">
            <motion.h3 layout onClick={() => setActive(!active)}>{question}</motion.h3>
            { active  ? children : "" }
        </motion.div>
        <motion.div className="faq-line"></motion.div>
        </AnimateSharedLayout>
    )
}

export default Collapse;