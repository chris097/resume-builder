import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children }: any) => {

    const [ref, inView] = useInView();

    const control = useAnimation();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden")
        }
            
    }, [control, inView]);

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 45 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.65, delay: 0.33 }}
                className='relative overflow-hidden'
                ref={ref}
            >{children}</motion.div>
        </>
    )
};