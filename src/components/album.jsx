import React, { useEffect, useState } from 'react';

const PopularTweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');  
        const data = await response.json();
        setTweets(data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="container mx-auto max-w-6xl p-4">
           <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">ALBUMS</h1>  
      <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <div>
                        <div className="font-semibold">User {tweet.userId}</div>
                        <div className="text-sm">@user{tweet.userId}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" target="_blank" className="whitespace-pre-line break-inside-avoid-page">
                  {tweet.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTweets;
