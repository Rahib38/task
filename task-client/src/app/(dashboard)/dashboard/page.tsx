"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Navbar from "./Navbar";
import Banner from "@/components/dashboard/Banner/Banner";
import TaskCard, { TaskStatus } from "@/components/dashboard/Card/TaskCards";


export default function Dashboard() {
  const statuses: TaskStatus[] = [
    "Pending",
    "InProgress",
    "Pending",
    "InProgress",
    "Done",
    "Done",
    "Pending",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-8 relative overflow-hidden">
        <Navbar />
        <Banner />
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/banner.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4 justify-between mb-6">
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Task Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Tasks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Add New Task</Button>
        </div>

        {/* Task Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statuses.map((status, idx) => (
            <TaskCard key={idx} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
}
