'use client'

import React, { useState } from 'react';
import SideNav from './SideNav';
import Link from 'next/link';
import DiscussionForum from './DiscussionForum';
import MarketStories from './MarketStories';


const routes = [
    { path: "#discussionForum", label: "Discussion Forum" },
    { path: "#marketStories", label: "Market Stories" }
  ];
  
const HomePage = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (path) => {
        setActiveLink(path);
    };
    return (
        <div className="min-h-screen ">
      <div className="flex  gap-4">
        <SideNav />
        <div>
          <ul class="md:hidden flex w-full bg-blue-950">
            {routes.map((route, index) => (
              <li key={index} class="w-full focus-within:z-10 ">
                <Link
                  href={route.path}
                  className={`inline-block text-xs w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 ${activeLink === route.path ? "font-bold bg-gray-900 px-4" : ""
                }`}
                onClick={() => handleClick(route.path)}
                > {route.label}
                </Link>

              </li>
            ))}
          </ul>

          <div className=" grid md:grid-cols-3 grid-cols-1 w-full gap-5">
            <div className="col-span-2">
              <button className="lg:text-5xl md:text-2xl font-semibold text-red-500 bg-slate-200 px-2 py-1 mb-5 hidden sm:block ">Discussion Forum</button>
              <DiscussionForum />
            </div>
            <div className="col-span-1">
              <button className="lg:text-4xl md:text-xl font-semibold text-red-500 bg-slate-200 px-2 py-1 mb-5 hidden sm:block">Market Stories</button>
              <MarketStories />
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default HomePage;