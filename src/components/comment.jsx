import React, { useEffect, useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const jsonUrl = 'https://jsonplaceholder.typicode.com/comments';  

    fetch(jsonUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-6">
         <h1 className="text-3xl font-bold text-purple-500 text-center mb-6">COMMENTS</h1>
      <div className="flex flex-col space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{comment.name}</h3>
            <p className="text-gray-700 text-sm mb-2">Posted by {comment.email}</p>
            <p className="text-gray-700">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
