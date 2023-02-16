import ButtonMain from '@/components/atomics/button-main'
import React, { ReactEventHandler, useState } from 'react'
import Register from '../auth/register';
import Login from '../auth/login';
import ModalMain from '../modal-main';
import TabView from '../tab-view';

const ButtonAuth = () => {
    const routes = [
        { key: 1, title: 'Register' },
        { key: 2, title: 'Login' },
    ];

    const [activeRoute, setActiveRoute] = useState<any>({
        key: 1,
        title: 'Register'
    })

    const handleChangeTab = (route: string) => {
        setActiveRoute(route)
    }
    const handlePressClose = (item: string) => {
        setOnOpenModal(false)

    }

    const [onOpenModal, setOnOpenModal] = useState(false)
    const handleClick = (e: ReactEventHandler) => {
        setOnOpenModal(true)
    }
    return (
        <>
            <div className='flex flex-row justify-around'>
                <ButtonMain type={'login'} title={'Subscribe'} onClick={(e: ReactEventHandler) => handleClick(e)} />
            </div>
            <ModalMain isOpen={onOpenModal} customWidthContent="w-8/12" >
                <div className="overflow-auto">
                    < TabView
                        type="auth"
                        activeRoute={activeRoute}
                        routes={routes}
                        render={{
                            1: <Register onPressClose={handlePressClose} />,
                            2: <Login onPressClose={handlePressClose} />,
                        }}
                        onChangeTab={(route: string) => handleChangeTab(route)}
                    />
                </div>
            </ModalMain>
        </>
    )
}

export default ButtonAuth