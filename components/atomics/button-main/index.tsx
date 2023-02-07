import React from 'react'

const ButtonMain = ({ type, title }: any) => {
    return (
        <>
            {
                type === 'selengkapnya' ? (
                    <div className='text-btnMain bg-white max-w-max px-3 py-1 rounded-sm cursor-pointer'>
                        {title}
                    </div>
                ) : null
            }
        </>

    )
}

export default ButtonMain