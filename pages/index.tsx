
import ButtonMain from "@/components/atomics/button-main"
import CardPosts from "@/components/organisms/card-posts"
import CollectionPosts from "@/components/template/collection-posts"


export default function Home() {
  return (
    <div className="w-full max-h-full bg-primary py-10">
      <div className="bg-gray-800 h-28 md:w-10/12 w-full ">
        <p className="text-secondary p-2 text-sm md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio corporis numquam quis quia expedita iste voluptas, dicta ut, nostrum voluptatem tempora non quae aperiam animi perferendis, eligendi praesentium necessitatibus? Eveniet?
        </p>
      </div>
      <div className="md:w-10/12 mx-auto">

        <div>
          <div className="mt-20 md:mt-60 px-4">
            <p className="text-white text-lg mb-5">Bersama <span className="text-secondary text-3xl">blogMAN,</span> mari tingkatkan pertumbuhan minat membaca untuk Indonesia lebih baik.</p>
            <ButtonMain type={'selengkapnya'} title={'Gabung Sekarang..!'} />
          </div>
          <div className="hidden md:inline"></div>
        </div>

        <div className="mt-8 md:mt-60">
          <CollectionPosts title={'Postingan Terbaik Desember!'} />

        </div>
      </div>
    </div >
  )
}
