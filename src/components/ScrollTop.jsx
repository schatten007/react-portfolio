import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTop = () => {
    const url = useLocation();
    useEffect(()=> {
        window.scrollTo(0, 10);
    }, [ url ]);
    return null;
}

export default ScrollTop;