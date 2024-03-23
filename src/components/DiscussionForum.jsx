import React from 'react';
import { FaHeart, FaComment, FaEye } from 'react-icons/fa';
import { GoShareAndroid } from "react-icons/go";
import forum from '../../public/discussionForum.json';
import Image from 'next/image';

const DiscussionForum = () => {
    return (
        <div id='discussionForum'>
            {
                forum.map((item, index) => (
                    <div key={index} className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8 w-full">
                        <div className="md:flex py-2 px-5">
                            <div className="md:flex-shrink-0">
                                <Image
                                    src={item.image}
                                    width={80}
                                    height={50}
                                    alt="user"
                                />
                            </div>
                            <div className="p-2">
                                <div className='flex items-center justify-between'>
                                    <h2 className="uppercase tracking-wide sm:text-sm md:text-base lg:text-lg text-indigo-500 font-semibold">{item.name}</h2>
                                    <p className='bg-blue-500 py-1 px-3 rounded-2xl text-white'>sector-2</p>
                                    <p className='text-blue-500'>{item.post_time}</p>
                                </div>
                                <p className="mt-2 text-gray-500">{item.details}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="flex items-center">
                                        <FaHeart className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.likes}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaEye className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.views}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaComment className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.comments}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <GoShareAndroid className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 sm:text-sm text-gray-600">Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default DiscussionForum;
