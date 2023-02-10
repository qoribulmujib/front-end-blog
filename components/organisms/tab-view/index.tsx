import { useState } from 'react'
import { DropDownMain } from '@/components/atomics/drop-down-main';
import _ from 'lodash'


interface TabViewType {
    onChangeTab?: any;
    activeRoute?: any;
    name?: any;
    routes?: any[];
    render?: any;
}

const TabView = ({
    onChangeTab,
    activeRoute,
    name,
    routes,
    render
}: TabViewType) => {
    const [sortOptions, setSortOptions] = useState<any[]>([
        {
            value: "asc",
            label: "Postingan Terbaru",
        },
        {
            value: "desc",
            label: "Postingan Terlama",
        },
    ]);

    return (
        <div>
            <div className=" flex flex-wrap justify-between mb-10 items-end align-text-bottom">
                <div className='md:w-9/12 border-b'>
                    <ul className="flex flex-nowrap -mb-px overflow-x-auto no-scrollbar">
                        {_.map(routes, (val: any, key: number) => (
                            <li className="mr-2">
                                <div
                                    className={`pb-2 px-4 text-sm text-center cursor-pointer whitespace-nowrap ${activeRoute?.key === val?.key
                                        ? "text-secondary-70 rounded-t-lg border-b-2 border-gray-900 active font-bold"
                                        : "font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300' hover:text-gray-600 hover:border-gray-900"
                                        }`}
                                    onClick={() => onChangeTab(val)}
                                    aria-current="page"
                                >
                                    {val.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:w-1/5 w-full pt-5 md:pt-0'>
                    <DropDownMain options={sortOptions} />
                </div>
            </div>
            {render[activeRoute.key]}
        </div>
    )
}

export default TabView