import ButtonMain from '@/components/atomics/button-main'
import Image from 'next/image'
import React from 'react'

interface data {
    title: string,
    author: string,
    description: string,
    date: string,
    image: string
}

const CardPosts = ({ title, author, description, date, image }: data) => {
    return (
        <div className="">
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
                    <h1 className='text-white text-xl capitalize'>{title}</h1>
                    <p className='text-gray-200 text-xs'>Author: <span className='capitalize'>{author}</span></p>
                    <p className='text-white text-base'>{description}</p>
                    <span className='text-gray-200 text-xs'>Publish: {date}</span>
                </div>
                <ButtonMain type={'selengkapnya'} title={'Lihat Selengkapnya..'} />
            </div>
        </div>
    )
}

export default CardPosts