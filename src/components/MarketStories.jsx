import React from 'react';
import market from '../../public/marketStories.json'
import Image from 'next/image';

const MarketStories = () => {
    return (
        <div id='#discussionForum'>
            {
                market.map((item, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src={item.image}
                            width={300}
                            height={200}
                            alt="Picture"
                        />

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MarketStories;