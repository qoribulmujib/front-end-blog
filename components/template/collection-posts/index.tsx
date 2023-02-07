import CardPosts from '@/components/organisms/card-posts'
import React from 'react'
interface data {
    title: string
}
const CollectionPosts = ({ title }: data) => {
    return (
        <div>
            <div className='mb-5'>
                <h1 className='text-white text-xl text-center md:text-left md:text-2xl'>{title}</h1>
            </div>
            <div className='md:grid grid-cols-4 gap-5'>

                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
                <CardPosts
                    author="Mujib"
                    date="28 September 2021"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ad ut. Magni vel quibusdam eum."
                    image="spiderman 2021"
                    title="Lahir dari Kecintaan pada Wastra Nusantara"
                />
            </div>
        </div>
    )
}

export default CollectionPosts