/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import TaskCard from "@/components/dashboard/Card/TaskCards";

const Card = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const res = await fetch("http://localhost:3002/api/v1/task", {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
      });
console.log(res)
      const data = await res.json();
      setTasks(data?.data || []);
    };

    fetchTasks();
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task: any) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Card;
