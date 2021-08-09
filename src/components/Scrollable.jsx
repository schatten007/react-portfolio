import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Scrollable = () => {
    //useInView is true when element is being rendered, else it is false
    //Threshold 0-1 sets the limit that needs to be rendered to set it to true
    const [ element, view ] = useInView( {threshold: 0.5} );
    const controls = useAnimation();
    (view) ? controls.start("visible") : controls.start("hidden");
    return[ element, controls];
}


export default Scrollable;