"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trash2, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // useRouter import করতে হবে

export type TaskStatus = "Pending" | "InProgress" | "Done";

const statusColors: Record<TaskStatus, string> = {
  Pending: "text-pink-500",
  InProgress: "text-yellow-500",
  Done: "text-green-500",
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: string;
  deadline?: string;
};

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const statusColor = statusColors[task.status];
  const router = useRouter();

  const formattedDate = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No Deadline";

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;
    const token = localStorage.getItem("accessToken"); // ⬅️ Token from localStorage

    console.log("token", token)
    if (!token) {
      console.error("❌ No access token found");
      return;
    }
    try {
      const res = await fetch(`http://localhost:3002/api/v1/task/${task.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // ⬅️ Include token here
        },
      });

      if (res.ok) {
        alert("Task Deleted Successfully!");
        router.refresh(); // page reload না করে revalidate করবে
        
      } else {
        alert("Failed to delete task.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Card className="w-full max-w-sm p-4">
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <User className="text-green-600" />
          </div>
          <Link href={`/dashboard/task/${task.id}`} className="flex-1">
            <div>
              <h3 className="font-bold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-600">
                {task.description || "No description provided."}
              </p>
            </div>
          </Link>
          <Trash2
            className="text-red-500 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <span className={`${statusColor}`}>● {task.status}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
