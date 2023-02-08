import React from 'react'

const ButtonMain = ({ type, title }: any) => {
    interface IButtonProps {
        children?: React.ReactNode;
        props?: any;
        onClick?: any;
    }

    const MyButton: React.FunctionComponent<IButtonProps> = () => {

        if (type === 'selengkapnya') {
            return (
                <div className='text-btnText bg-btnMain max-w-max px-3 py-1 rounded-sm cursor-pointer'>
                    {title}
                </div>
            )
        } else if (type === 'register') {
            return (
                <div className='text-btnText bg-btnMain max-w-max px-3 py-1 rounded-sm cursor-pointer text-center flex justify-center items-center uppercase font-bold'>
                    {title}
                </div>
            )
        }
        return null;
    }
    return (
        <React.Fragment>
            <MyButton />
        </React.Fragment>

    )
}

export default ButtonMain