import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div>
      {/* footer */}
      {/* mobile view */}
      <div className='flex flex-row justify-between px-4 mt-3 md:hidden'>
        <div>
          <h1>Image PadiUMKM</h1>
        </div>
        <div>
          <button onClick={() => setOpenBurger(true)}>
            Icon Burger
          </button>
        </div>
      </div>
      {/* webview */}
      <div className='md:flex flex-row justify-around align-middle mt-16 hidden'>
        <div>
          <h1>Image PadiUMKM</h1>
        </div>
        <ul className='flex flex-row justify-between gap-4'>
          <li>Produk1</li>
          <li>Produk2</li>
          <li>Produk3</li>
          <li>Produk4</li>
          <li>Produk5</li>
          <li>Produk6</li>
        </ul>
        <div>
          <h1>Register</h1>
        </div>
      </div>


      {/* body */}
      <div className='md:flex h-screen w-full'>
        <div className='md:flex mx-auto md:h-full md:w-1/2 items-center justify-center'>
          <div className='md:flex flex-row py-16 gap-9'>
            <div className=' md:w-1/2'>
              <p className='mb-2 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error voluptas quod velit accusamus alias enim quidem saepe voluptatum aliquam optio, quibusdam in? Temporibus dolorem necessitatibus fugiat voluptate ut dolore eligendi alias mollitia delectus tempora, amet iure? Animi soluta explicabo velit nesciunt dolorum, accusamus cumque perferendis odio, at consequuntur excepturi..</p>
              <div className='hidden md:flex flex-row align-middle justify-between'>
                <p>lihat Selengkapnya...</p>
                <ul className='hidden lg:flex flex-row justify-end gap-4'>
                  <li>instagram</li>
                  <li>facebook</li>
                  <li>twitter</li>
                  <li>linkedin</li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col justify-center md:w-1/2'>
              <span className='flex justify-center align-middle'><Image src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' width={800} height={300} alt='books' /></span>

              <p className='text-gray-400 text-xs text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>


      {/* footer */}
      <footer className='flex sticky top-[100vh] justify-center align-middle'>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
        </ul>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
        </ul>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, esse.</li>
        </ul>
      </footer>
    </div>
  )
}
