import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'

const ButtonMain = ({ type, title, onClick }: any) => {
    interface IButtonProps {
        children?: React.ReactNode;
        props?: any;
        onClick?: any;
    }

    const MyButton: React.FunctionComponent<IButtonProps> = ({ onClick }) => {

        if (type === 'selengkapnya') {
            return (
                <div className='text-btnText bg-btnMain max-w-max px-3 py-1 rounded-sm cursor-pointer'>
                    {title}
                </div>
            )
        } else if (type === 'login') {
            return (
                <button className='text-white bg-gray-900 hover:bg-gray-300 hover:text-gray-900 max-w-max px-5 py-2 rounded-sm cursor-pointer text-center flex justify-center items-center uppercase font-bold' onClick={onClick}>
                    {title}
                </button>
            )
        } else if (type === 'detail') {
            return (
                <button onClick={onClick}>
                    <TbArrowUpRight size={25} />
                </button>
            )
        }
        return null;
    }
    return (
        <React.Fragment>
            <MyButton onClick={onClick} />
        </React.Fragment>

    )
}

export default ButtonMain