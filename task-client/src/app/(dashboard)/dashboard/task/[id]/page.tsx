// "use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, PencilIcon } from "lucide-react";

// Dummy task object for design preview

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TaskDetailUIOnly = async ({ params }: { params: any }) => {
  const { id } = await params;
  console.log(id);

  const res = await fetch(`http://localhost:3002/api/v1/task/${params.id}`);

  const tasks = await res.json();
  const task = tasks.data;
  const formattedDate = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No Deadline";
  console.log(task);

  return (
    <Card className="p-6 max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold">Task Details</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200"
          >
            <PencilIcon className="w-4 h-4 mr-2" />
            Edit Task
          </Button>
          <Button variant="secondary">Back</Button>
        </div>
      </div>

      <CardContent className="mt-6 flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="bg-green-300 rounded-full p-4">
            <span className="text-white text-2xl">{task.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              {task.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 border-t pt-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4" />
            <span>End Date</span>
            <span className="font-medium text-black">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 bg-orange-500 rounded-full inline-block"></span>
            {task.status}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="status">Change Status</Label>
          <Select defaultValue={task.status}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todo">Todo</SelectItem>
              <SelectItem value="InProgress">InProgress</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="destructive">Delete Task</Button>
          <Button className="bg-green-400 hover:bg-green-500 text-black">
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default TaskDetailUIOnly;
