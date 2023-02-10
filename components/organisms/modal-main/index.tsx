import React from 'react'
import { motion } from "framer-motion";

interface dataType {
    isOpen?: boolean,
    children?: React.ReactNode,
    customWidthContent?: any
}
const ModalMain = (props: any) => {
    const { isOpen, children, customWidthContent } = props
    return (
        <>
            {isOpen ? (
                <>
                    <motion.div
                        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none tracking-wide ${props.className ?? ""
                            }`}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {
                                scale: 1,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: 0.1,
                                },
                            },
                        }}
                    >
                        <div
                            className={`relative w-auto my-6 mx-4 md:mx-auto  md:${customWidthContent ?? "max-w-3xl"
                                }`}
                        >
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default ModalMain