import { Calendar } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto flex justify-between items-center z-10 relative px-4">
                {/* Left Side Nav */}
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 font-semibold text-xl">
                    <div className="bg-white rounded-full p-1">
                      <img
                        src="https://img.icons8.com/ios-filled/50/4CAF50/task.png"
                        alt="Task Icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-white">Tasko</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="text-green-400 w-4 h-4" />
                      <span className="text-green-400">Task List</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white">❄</span>
                      <span className="text-white">Spin</span>
                    </div>
                  </div>
                </div>
      
                {/* Right Side Avatar */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Thomas"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Thomas M.</span>
                </div>
              </div>
    </div>
  )
}

export default Navbar
