import React from 'react';
import TaskCard from './TaskCard';
import './TaskCard.css'
import './index.css'
const App = () => {
    return (
    <div className='p-4'>
    <h1 className="text-4xl leading-relaxed">Smarter Tasks</h1>
    <h2 className="text-2xl leading-relaxed">Project Final Year Graduation (College Revamp Project1)</h2>
    <div className="flex justify-between p-6 space-x-4">
    <div className="w-1/2 bg-white p-4 rounded-lg border border-gray-300">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-4">Pending</h2>
        <TaskCard title='Build the website with static content'dueDate='Due on: 10th April'assigneeName='Assignee: Rohit S'/>
        <TaskCard title='Add a blog'dueDate='Due on: 22nd March'assigneeName='Assignee: Rohit M'/>
        <button className="block w-full mt-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-center font-medium hover:bg-gray-300">
            + New task
        </button>
    </div>

    <div className="w-1/2 bg-white p-4 rounded-lg border border-gray-300">
        <h2 className="text-center text-xl font-bold text-gray-700 mb-4">Done</h2>
        <TaskCard title='Design the mockup'dueDate='Completed on: 10th April'assigneeName='Assignee: Rohit M'></TaskCard>
        <TaskCard title='Get the approval from principal'dueDate='Completed on: 20th April'assigneeName='Assignee: Ajay S'></TaskCard>
    </div>
</div>
</div>
);
};
export default App;
