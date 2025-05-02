"use client";

import { Calendar, Trash2, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  const formattedDate = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No Deadline";

  return (
    <Card className="w-full max-w-sm p-4">
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <User className="text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600">
              {task.description || "No description provided."}
            </p>
          </div>
          <Trash2 className="text-red-500 cursor-pointer" />
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
