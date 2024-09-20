import React, { useEffect, useState } from 'react';

const RelatedTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const midIndex = Math.ceil(tasks.length / 2);
    const firstHalf = tasks.slice(0, midIndex);
    const secondHalf = tasks.slice(midIndex);

    return (
        <div>
        <h1 className="text-3xl font-bold text-purple-500 text-center mt-4 mb-6">TO-DO</h1>  
        <div className="flex justify-around mt-20">

            <div className="max-w-sm p-4 shadow-md rounded-lg border-t-2 border-teal-400 dark:bg-gray-900 dark:text-white">
                <p className="font-bold text-xl">Tasks (1-{midIndex})</p>
                <ul className="flex flex-col pl-1">
                    {firstHalf.map(task => (
                        <li key={task.id} className="flex justify-between items-center border-b py-2 dark:border-gray-600">
                            <span className={`dark:text-gray-300 ${task.completed ? 'line-through' : ''}`}>
                                {task.title}
                            </span>
                            <button onClick={() => handleDelete(task.id)} className="text-red-500 hover:text-red-700">
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            
            <div className="max-w-sm p-4 shadow-md rounded-lg border-t-2 border-teal-400 dark:bg-gray-900 dark:text-white">
                <p className="font-bold text-xl">Tasks ({midIndex + 1}-{tasks.length})</p>
                <ul className="flex flex-col pl-1">
                    {secondHalf.map(task => (
                        <li key={task.id} className="flex justify-between items-center border-b py-2 dark:border-gray-600">
                            <span className={`dark:text-gray-300 ${task.completed ? 'line-through' : ''}`}>
                                {task.title}
                            </span>
                            <button onClick={() => handleDelete(task.id)} className="text-red-500 hover:text-red-700">
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    );
};

export default RelatedTasks;
