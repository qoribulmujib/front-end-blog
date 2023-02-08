
import ButtonMain from "@/components/atomics/button-main"
import CardPosts from "@/components/organisms/card-posts"
import CollectionPosts from "@/components/template/collection-posts"
import { BiSearchAlt } from 'react-icons/bi'


export default function Home() {
  return (
    <div className="w-full max-h-full bg-primary">
      <div className="md:w-10/12 mx-auto pt-64">
        <div className="flex flex-row justify-center items-center align-middle self-center">
          <div>
            <p className="text-white font-semibold text-base text-center mb-12">Our blog.</p>
            <p className="text-gray-900 font-semibold text-5xl text-center">Resources and insights</p>
            <p className="text-center text-gray-900 font-normal text-xl my-24">The latest industry news, interviews, technologies, and resources.</p>
            <div className="flex justify-center items-center align-middle relative">
              <input type="text" placeholder="Search" className="h-10 w-80 text-gray-900 rounded-lg px-14 flex justify-center items-center" >
              </input>
              <BiSearchAlt className="absolute top-2 md:left-36 left-24 w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-60">
          <CollectionPosts title={'Postingan Terbaik Desember!'} />

        </div>
      </div>
    </div >
  )
}
