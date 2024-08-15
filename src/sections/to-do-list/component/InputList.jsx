import React, { useState } from 'react';


export const InputList = ({ addList, setStatusFilter }) => {
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addList(inputText);
    setInputText('');
  };

  const handleSearch = () => {
    setStatusFilter(status);
  };

  return (
    <div className='grid grid-cols-2 m-3'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter Task'
          className='text-slate-500 p-4 border-2'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className='text-xl font-medium bg-violet-500 text-white p-3 m-1'>
          ADD
        </button>
      </form>
      <div>
        <input
          type="text"
          placeholder="Check Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-4 border-2"
        />
        <button type="button" className='bg-violet-500  text-white p-4 m-4' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
