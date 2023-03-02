
import { useState } from 'react'
import TabView from "@/components/organisms/tab-view"
import { BiSearchAlt } from 'react-icons/bi'
import CustomerService from "./categories/customer-service"
import Design from "./categories/design"
import Product from "./categories/product"
import SoftwareEngineering from "./categories/software-engineering"
import ViewAll from "./categories/view-all"
import ButtonAuth from '@/components/organisms/button-auth'


export default function Home() {
  const routes = [
    { key: 1, title: 'View all' },
    { key: 2, title: 'Design' },
    { key: 3, title: 'Product' },
    { key: 4, title: 'Software Engineering' },
    { key: 5, title: 'Customer Success' }
  ];

  const [activeRoute, setActiveRoute] = useState<any>({
    key: 1,
    title: 'View all'
  })

  const handleChangeTab = (route: string) => {
    setActiveRoute(route)
  }


  return (
    <div className="w-full px-2 max-h-full">
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-row justify-center items-center align-middle self-center h-screen">
          <div>
            <p className="text-gray-900 font-semibold text-base text-center ">Our blog.</p>
            <p className="text-gray-900 font-semibold text-5xl text-center my-12">Resources and insights</p>
            <p className="text-center text-gray-900 font-normal text-xl pb-12">The latest industry news, interviews, technologies, and resources.</p>
            <ButtonAuth />
          </div>
        </div>

        < TabView
          type="product"
          activeRoute={activeRoute}
          routes={routes}
          render={{
            1: <ViewAll />,
            2: <Design />,
            3: <Product />,
            4: <SoftwareEngineering />,
            5: <CustomerService />,
          }}
          onChangeTab={(route: string) => handleChangeTab(route)}
        />
      </div>
    </div >
  )
}
