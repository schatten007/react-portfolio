
export const PageAnims = {
    hidden: {
        opacity: 0,
        y: -200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            duration: 0.75,
            ease: "easeIn"
        }
    }
}


export const AboutTitle = {
    hidden: {
        y: -200
    },
    visible: {
        y: 0,
        transition: {
            ease: "easeIn",
        }
    }
}

export const Show = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut"
        }
    }
}

export const ScrollAnim = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}
export const ImageAnim = {
    hidden: {
        scale: 1.2,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const LineAnim = {
    hidden: {
        width: "0%",
        opacity: 1
    },
    visible: {
        width: "100%",
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const FrameAnim = {
    hidden: {
        opacity: 1,
        x: "-130%",
        skew: "45deg"
    },
    visible: {
        x: "200%",
        opacity: 1,
        transition: {
            skew: "0deg",
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const FrameContainer = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: "easeOut"
        }
    }
}

export const NavAnim = {
    hidden: {
        width: "0%"
    },
    visible: {
        x: -5,
        width: "120%",
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export default PageAnims;