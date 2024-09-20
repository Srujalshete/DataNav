import React, { useEffect, useState } from 'react';

const BentoGrid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">PHOTOS</h1> 
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {data.map((item) => (
                        <div key={item.id} className="relative overflow-hidden rounded-2xl shadow-lg group">
                            <img
                                src={item.thumbnailUrl}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;
