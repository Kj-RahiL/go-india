import React from 'react';
import { FaHeart, FaComment, FaEye } from 'react-icons/fa';
import forum from '../../public/discussionForum.json';
import Image from 'next/image';

const DiscussionForum = () => {
    console.log(forum);
    return (
        <div id='#discussionForum'>
            {
                forum.map((item, index) => (
                    <div key={index} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                            <Image
                            src={item.image}
                            width={100}
                            height={50}
                            alt="user"
                        />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.name}</div>
                                <p className="mt-2 text-gray-500">{item.details}</p>
                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <FaHeart className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.likes}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaComment className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.comments}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaEye className="h-6 w-6 fill-current text-gray-600" />
                                        <span className="ml-2 text-gray-600">{item.views}</span>
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
