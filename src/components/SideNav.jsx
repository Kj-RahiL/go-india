'use client'
import React, { useState } from 'react';
import { MdEvent, MdNotificationsNone } from "react-icons/md";
import { FaRegUser, FaSwatchbook, FaAudible, FaBitcoin, FaNewspaper } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import Link from 'next/link';

const routes = [
    { path: "#discussionForum", label: "Discussion Forum", icon: BiMessageDetail },
    { path: "#marketStories", label: "Market Stories", icon: CiDollar },
    { path: "#sentiment", label: "Sentiment", icon: MdEvent },
    { path: "#market", label: "Market", icon: FaBitcoin },
    { path: "#sector", label: "Sector", icon: FaAudible },
    { path: "#watchList", label: "Watchlist", icon: FaSwatchbook },
    { path: "#event", label: "Event", icon: MdEvent },
    { path: "#news", label: "News/Interview", icon: FaNewspaper },
];

const SideNav = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='bg-blue-950 text-white text-xl font-medium'>
            <div className='flex justify-between items-center px-6 pt-8'>
                <h2 className='flex gap-2 items-center'> <FaRegUser className='text-2xl' /> Hello user</h2>
                <MdNotificationsNone className='text-2xl' />
            </div>
            <hr className='my-5' />
            <ul className="w-full">
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link
                            href={route.path}
                            className={`flex items-center py-3 gap-2 px-6 hover:bg-gray-900 ${
                                activeLink === route.path ? "font-bold bg-gray-900 px-4" : ""
                            }`}
                            onClick={() => handleClick(route.path)}
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
