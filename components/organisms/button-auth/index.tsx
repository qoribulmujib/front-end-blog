import ButtonMain from '@/components/atomics/button-main'
import React from 'react'

const ButtonAuth = () => {
    return (
        <>
            <div className='flex flex-row justify-around'>
                <ButtonMain type={'login'} title={'Register'} />
                <span className='text-white font-semibold text-base'>Or</span>
                <ButtonMain type={'login'} title={'Login'}>Login</ButtonMain>
            </div>
        </>
    )
}

export default ButtonAuth