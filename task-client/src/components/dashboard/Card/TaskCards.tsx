// components/dashboard/TaskCard.tsx

"use client";

import { Calendar, Trash2, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type TaskStatus = "Pending" | "InProgress" | "Done";

const statusColors: Record<TaskStatus, string> = {
  Pending: "text-pink-500",
  InProgress: "text-yellow-500",
  Done: "text-green-500",
};

interface TaskCardProps {
  status: TaskStatus;
}

const TaskCard: React.FC<TaskCardProps> = ({ status }) => {
  const statusColor = statusColors[status];

  return (
    <Card className="w-full max-w-sm p-4">
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-green-100 p-2 rounded-full">
            <User className="text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">Art and Craft</h3>
            <p className="text-sm text-gray-600">
              Select the role that you want to candidates for and upload your
              job description.
            </p>
          </div>
          <Trash2 className="text-red-500 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Friday, April 19 - 2024</span>
          </div>
          <span className={`${statusColor}`}>● {status}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
