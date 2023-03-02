import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useMemo } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdManageAccounts, MdOutlinePostAdd } from 'react-icons/md';
import MappingDataList from '../helpers/mapping';

const FooterHeader = ({ show }: any) => {
    const [openBurger, setOpenBurger] = useState(false);
    const router = useRouter()


    // const handleDrawer = () => {
    //     setOpenBurger(!openBurger)
    // }


    const menuItems = [
        { id: 1, label: 'Home', icon: <AiFillHome />, link: '/' },
        { id: 2, label: 'Manage posts', icon: <MdOutlinePostAdd />, link: '/posts' },
        { id: 3, label: 'Manage users', icon: <MdManageAccounts />, link: '/users' },
    ]

    const activeMenu = useMemo(() => menuItems?.find((item: any) => item.link === router?.pathname), [router?.pathname])

    const { data: session } = useSession()

    return (
        <>
            {/* FOOTER WHEN MOBILE VIEW */}
            <div className={`fixed w-full h-full bg-gradient-to-b lg:bg-none lg:static from-primary to-secondary lg:h-auto lg:p-0 top-0 p-10 transition-all ${openBurger ? 'left-0' : '-left-full'} `}>
                <p className='absolute top-5 left-5 lg:hidden'>{session?.user ? session?.user?.name : 'Logo'}</p>
                <button className='absolute top-5 right-5 lg:hidden' onClick={() => setOpenBurger(!openBurger)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {/* FOOTER WEB VIEW */}
            <div className='hidden md:flex justify-between align-middle items-center h-20 px-20 bg-[#86A3B8]'>
                <p className='absolute top-5 left-5 lg:hidden'>{session?.user ? session?.user?.name : 'Logo'}</p>
                <MappingDataList data={menuItems} activeMenu={activeMenu} />
                {
                    session?.user ? (
                        <button onClick={() => signOut()}>Logout</button>
                    ) :
                        (

                            null
                        )
                }
            </div>

            <div className='flex flex-row justify-between px-4 py-5 md:hidden from-primary to-secondary  w-full h-screen bg-gradient-to-b '>
                <div>Logo</div>
                <div><button onClick={() => setOpenBurger(!openBurger)}>
                    <GiHamburgerMenu size={25} />
                </button></div>
            </div>
        </>

    );

}

export default FooterHeader