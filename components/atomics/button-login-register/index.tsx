import React from 'react'
import ButtonMain from '../button-main'

const ButtonLoginRegister = ({ onPressClose, isSubmitSuccessful, isSubmitting }: any) => {
    return (
        <div className='flex flex-row justify-around'>
            <ButtonMain type={'login'} title={'Close'} onClick={onPressClose} />
            <ButtonMain type={'login'} title={'submit'} isSubmitSuccessful={isSubmitSuccessful} isSubmitting={isSubmitting} />
        </div>
    )
}

export default ButtonLoginRegister