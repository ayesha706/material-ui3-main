import React from 'react'
import { Comments } from './Comments'
export const UserPost = () => {
  return (
    <div>
           <div className="flex flex-col justify-center items-center py-7">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full py-4">
                    <div className=" mb-1 p-3">
                        <div className='flex justify-between'>
                            <span className="text-gray-800 font-semibold">John Doe</span>
                            <button> +Follow</button>
                        </div>

                        <span className="text-gray-600 text-sm ">2 hours ago</span>
                    </div>
                    <div className="p-3">
                        <p className="text-gray-700 leading-tight mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                            vehicula elit. Nunc et ex at turpis rutrum viverra.
                        </p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-64 object-cover" />
                    <div className='flex p-3 gap-2'>
                        <button>Like</button>
                        <button>Comment</button>
                    </div>
                    <Comments/>
                </div>

            </div>
    </div>
  )
}
