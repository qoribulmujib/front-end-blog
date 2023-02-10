import ButtonMain from '@/components/atomics/button-main'
import React, { ReactEventHandler, useState } from 'react'
import ModalMain from '../modal-main';

const ButtonAuth = () => {
    const [onOpenModal, setOnOpenModal] = useState(false)
    const handleClick = (e: ReactEventHandler) => {
        setOnOpenModal(true)
    }
    return (
        <>
            <div className='flex flex-row justify-around'>
                <ButtonMain type={'login'} title={'Register'} onClick={(e: ReactEventHandler) => handleClick(e)} />
                <span className='text-white font-semibold text-base'>Or</span>
                <ButtonMain type={'login'} title={'Login'}>Login</ButtonMain>
            </div>
            <ModalMain isOpen={onOpenModal} customWidthContent="w-3/4">
                <div className="max-h-[604px] overflow-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repellendus pariatur veritatis reiciendis blanditiis! Molestias incidunt voluptates laborum ratione quas?
                    <ButtonMain type={'login'} title={'keluar'} onClick={() => setOnOpenModal(false)} />
                </div>
            </ModalMain>
        </>
    )
}

export default ButtonAuth