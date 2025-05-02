/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3002/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Optionally store token or show success message
        router.push("/login");
      }

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
    } catch (err: any) {
      console.error("❌ Error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-200">
      {/* Left: Image Section */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10">
        <div className="relative w-[90%] h-[90%] max-w-md">
          <Image
            src="/banner.png"
            alt="Register Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right: Form Section */}
      <div className="w-1/2 bg-white flex items-center justify-center px-16">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Register</h1>
            <p className="text-gray-500 text-sm mt-1">
              Create your account to get started.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" className="mb-1 block text-sm">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="text-sm"
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-1 block text-sm">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="text-sm"
              />
            </div>

            <div>
              <Label htmlFor="password" className="mb-1 block text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="text-sm"
              />
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Checkbox id="terms" />
              <Label htmlFor="terms">I agree to the terms & conditions</Label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white text-sm h-10"
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
