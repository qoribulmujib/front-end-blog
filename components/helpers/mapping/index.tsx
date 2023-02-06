import Link from 'next/link'
import React from 'react'

const MappingDataList = ({ data, activeMenu }: any) => {

    return (
        <ul className='flex justify-between align-middle items-center gap-4'>
            {
                data.map((menu: any) => {
                    return (
                        <Link href={menu?.link} key={menu?.id}>
                            <li className={`hover:bg-secondary px-14 py-1 rounded-sm flex flex-row ease-in-out duration-300 delay-75 items-center gap-1 ${activeMenu?.link === menu?.link ? 'bg-secondary' : ''}`}>
                                {menu?.icon} {menu?.label}
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    )
}

export default MappingDataList