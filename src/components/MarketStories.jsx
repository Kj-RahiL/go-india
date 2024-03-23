import React from 'react';
import market from '../../public/marketStories.json'
import Image from 'next/image';

const MarketStories = () => {
    return (
        <div id='marketStories'>
            {
                market.map((item, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                        <Image
                        className='w-full h-36'
                            src={item.image}
                            width={100}
                            height={50}
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