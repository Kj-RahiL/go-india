'use client'
import React from 'react';
import { MdEvent, MdNotificationsNone } from "react-icons/md";
import { FaRegUser, FaSwatchbook , FaAudible, FaBitcoin, FaNewspaper } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const routes = [
    { path: "/", label: "Discussion Forum" , icon: BiMessageDetail},
    { path: "", label: "Market Stories", icon: CiDollar },
    { path: "", label: "Sentiment", icon: MdEvent},
    { path: "", label: "Market", icon: FaBitcoin },
    { path: "", label: "Sector", icon: FaAudible },
    { path: "", label: "Watchlist", icon: FaSwatchbook },
    { path: "", label: "Event", icon: MdEvent },
    { path: "", label: "News/Interview", icon:  FaNewspaper},
];

const SideNav = () => {
    const pathname= usePathname()
    return (
        <div className='bg-blue-950 text-white text-xl font-medium'>
            <div className='flex justify-between items-center px-4 pt-8'>
                <h2 className='flex gap-2  items-center'> <FaRegUser className='text-2xl' /> Hello user</h2>
                <MdNotificationsNone className='text-2xl' />
            </div>
            <hr className='my-5' />
            <ul className="w-full">
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link
                            href={route.path}
                            className={`flex items-center py-3 gap-2 px-4 hover:bg-gray-900 ${pathname === route.path && "font-bold bg-gray-900 px-4"
                                }`}
                        >
                           {route.icon && <route.icon />} {route.label}
                        </Link>
                       
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;