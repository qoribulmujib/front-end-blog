import React, { useState } from 'react'
import FooterHeader from '../footer'

export const Layouts = ({ children }: any) => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div className='flex flex-col'>
            <FooterHeader show={isMobile} />
            <div className='flex-1 p-4 text-white'>
                {children}
            </div>
        </div>
    )
}
