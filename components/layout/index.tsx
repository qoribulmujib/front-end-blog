import React, { ReactNode, useState } from 'react'
import FooterHeader from '../footer'
import { SessionProvider } from 'next-auth/react'

interface IProps {
    children: ReactNode;
    session: any;
}
export const Layouts = ({ children, session }: IProps) => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div className='flex flex-col'>
            <SessionProvider session={session}>
                <FooterHeader show={isMobile} />
                <div className='flex-1 p-4 text-white'>
                    {children}
                </div>
            </SessionProvider>
        </div>
    )
}
