import React, { useState, useEffect } from 'react';

export const Lists = ({ items, statusFilter, updateStatus }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(statusFilter);
  }, [statusFilter]);

  const handleChange = (index, e) => {
    const updatedStatus = e.target.value;
    updateStatus(index, updatedStatus);
  };

  const filteredItems = items.filter((item) => {
    if (!item || !item.status) {
      return false;
    }
    const lowerCaseItemStatus = item.status.toLowerCase();
    const lowerCaseStatus = status.toLowerCase();
    if (lowerCaseStatus === '' || lowerCaseItemStatus === lowerCaseStatus) {
      return true;
    }
    return false; // Exclude items that do not match the status filter
  });

  return (
    <div className='grid grid-cols-2'>
      <div className='m-3 p-5 w-[30%] bg-orange-400 rounded-lg'>
        {items.map((item, index) => (
           <div key={index}> 
            <h1 className='text-lg font-medium'>Title</h1>
            <div>{item.item}</div>
            <h3 className='text-lg font-medium'>Status</h3>
            <select value={item.status} onChange={(e) => handleChange(index, e)}>
              <option value='Incomplete'>Incomplete</option>
              <option value='Complete'>Complete</option>
            </select>
          </div>
        ))}
      </div>
      <div>
        {/* {filteredItems.length === 0 && <p>No tasks found</p>} */}
        {statusFilter && (
          filteredItems.map((filteredItem, index) => (
            <div key={index} className='m-3 p-5 w-[30%] bg-orange-400 rounded-lg'>
              <h1 className='text-lg font-medium'>Title</h1>
              <div>{filteredItem.item}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );

};
