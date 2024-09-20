import React, { useState, useEffect } from 'react';

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')  
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
        <h1 className="text-3xl font-bold text-purple-500 text-center mt-4 mb-6">USERS</h1>  
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Top Users</h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {users.map((user, index) => (
          <li
            key={user.id}
            className="flex items-center py-4 px-6 cursor-pointer"
            onClick={() => handleUserClick(user)}
          >
            <span className="text-gray-700 text-lg font-medium mr-4">{index + 1}.</span>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
              <p className="text-gray-600 text-base">@{user.username}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal Pop-up */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-900">User Details</h2>
            <p className="text-lg mt-4"><strong>Name:</strong> {selectedUser.name}</p>
            <p className="text-lg mt-2"><strong>Username:</strong> {selectedUser.username}</p>
            <p className="text-lg mt-2"><strong>Email:</strong> {selectedUser.email}</p>
            <p className="text-lg mt-2"><strong>Phone:</strong> {selectedUser.phone}</p>
            <p className="text-lg mt-2"><strong>Website:</strong> {selectedUser.website}</p>
            <p className="text-lg mt-2"><strong>Company:</strong> {selectedUser.company.name}</p>
            <p className="text-lg mt-2"><strong>Address:</strong> {`${selectedUser.address.suite}, ${selectedUser.address.street}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</p>
            <button
              className="mt-6 bg-teal-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default TopUsers;
