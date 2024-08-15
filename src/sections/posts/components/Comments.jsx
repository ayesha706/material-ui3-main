import React from 'react'

export const Comments = () => {
    return (
        <div>
            <div className="w-full relative flex justify-between gap-2">
                <input type="text"
                    className="w-full py-2 m-1 px-5 rounded-full border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                    placeholder="Leave a comment..." />
                <div className="absolute right-6 top-[8px]">
                   <button className=' text-gray-400 text-md p-2'>Submit</button>
                </div>
            </div>
        </div>
    )
}
