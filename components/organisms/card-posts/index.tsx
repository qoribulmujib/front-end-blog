import ButtonMain from '@/components/atomics/button-main'
import Image from 'next/image'
import React from 'react'

interface data {
    title: string,
    author: string,
    description: string,
    date: string,
    image: string,
    categories: string
}

const CardPosts = ({ title, author, description, date, image, categories }: data) => {
    const handleClick = (event: React.ReactElement) => {
    }
    return (
        <div className="bg-[#fffffe] rounded-b md:rounded-none-md mb-10 md:mb-0">
            <Image
                src={'https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
                width="0"
                height="0"
                sizes="100vw"
                alt='card image'
                className='w-full h-72'

            />
            <div className="py-2  p-2">
                <div className='mb-2'>
                    <h1 className='text-gray-900 text-sm font-semibold capitalize '>{categories}</h1>
                    <div className='flex flex-row justify-between items-start align-middle'>
                        <h1 className='text-gray-900 text-2xl capitalize'>{title}</h1>
                        <ButtonMain type={'detail'} onClick={(e: React.ReactElement) => handleClick(e)} />
                    </div>
                    <p className='text-gray-900 text-base pb-5'>{description}</p>
                    <p className='text-gray-500 text-xs'>Author: <span className='capitalize'>{author}</span></p>
                    <span className='text-gray-500 text-xs'>Publish: {date}</span>
                </div>

            </div>
        </div>
    )
}

export default CardPosts 