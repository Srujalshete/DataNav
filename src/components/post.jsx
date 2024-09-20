import React, { useEffect, useState } from 'react';
 

const Post = () => {
  const [posts, setPosts] = useState([]);

  // Define an array of colors for borders and backgrounds
  const colors = [
    { border: 'border-indigo-500', bg: 'bg-indigo-500' },
    { border: 'border-purple-500', bg: 'bg-purple-500' },
    { border: 'border-blue-400', bg: 'bg-blue-400' },
    { border: 'border-yellow-400', bg: 'bg-yellow-400' },
    { border: 'border-green-500', bg: 'bg-green-500' }
  ];

  useEffect(() => {
    const jsonUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your actual URL

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
   
      <section className="bg-white">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 rounded-lg">
          <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">POST</h1>  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post, index) => {
             
              const { border, bg } = colors[index % colors.length];

              return (
                <div key={post.id} className="relative h-full">
                  <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${bg} rounded-lg`}></span>
                  <div className={`relative h-full p-5 bg-white border-2 ${border} rounded-lg`}>
                    <h3 className="my-2 text-lg font-bold text-gray-800">{post.title}</h3>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                    <p className="mb-2 text-gray-600">{post.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
