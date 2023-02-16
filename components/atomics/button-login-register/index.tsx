import React from 'react'
import ButtonMain from '../button-main'

const ButtonLoginRegister = ({ onPressClose }: any) => {
    return (
        <div className='flex flex-row justify-around'>
            <ButtonMain type={'login'} title={'keluar'} onClick={onPressClose} />
            <ButtonMain type={'login'} title={'submit'} />
        </div>
    )
}

export default ButtonLoginRegister