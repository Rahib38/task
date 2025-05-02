"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";

export default function AddTask() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "PENDING",
    priority: "MEDIUM",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken"); // ⬅️ Token from localStorage
    const userId = localStorage.getItem("userId"); // ⬅️ Token from localStorage

    console.log("token", token)
    if (!token) {
      console.error("❌ No access token found");
      return;
    }

    const payload = {
      ...formData,
      deadline: date ? date.toISOString() : null,
      userId
    };

    console.log("payload", payload)

    try {
      const response = await fetch("http://localhost:3002/api/v1/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`, // ⬅️ Include token here
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      console.log("✅ Task created successfully:", result);

      // Reset form
      setFormData({
        title: "",
        description: "",
        status: "PENDING",
        priority: "MEDIUM",
      });
      setDate(undefined);
    } catch (error) {
      console.error("❌ Error creating task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 max-w-xl mx-auto bg-white shadow rounded"
    >
      <h2 className="text-xl font-semibold mb-2">Add New Task</h2>

      <Input
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />

      <Textarea
        name="description"
        placeholder="Task Description"
        value={formData.description}
        onChange={handleInputChange}
      />

      <Select
        value={formData.status}
        onValueChange={(value) => setFormData({ ...formData, status: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="PENDING">Pending</SelectItem>
          <SelectItem value="INPROGRESS">In Progress</SelectItem>
          <SelectItem value="DONE">Done</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={formData.priority}
        onValueChange={(value) => setFormData({ ...formData, priority: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="LOW">Low</SelectItem>
          <SelectItem value="MEDIUM">Medium</SelectItem>
          <SelectItem value="HIGH">High</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <p className="mb-1 text-sm font-medium">Deadline</p>
        <Calendar mode="single" selected={date} onSelect={setDate} />
        {date && (
          <p className="text-sm mt-1 text-gray-500">
            Selected: {format(date, "PPP")}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Create Task
      </Button>
    </form>
  );
}
