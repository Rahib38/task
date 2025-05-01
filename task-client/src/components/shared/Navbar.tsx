"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { protectRoutes } from "@/contants";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";

import { Heart, LogOut, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { user, setIsLoading } = useUser();

  const pathname=usePathname()
  const router=useRouter()

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if(protectRoutes.some((route)=>pathname.match(route))){
      router.push('/')
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0">
      {/* Company Name */}
      <h1 className="text-xl font-bold text-gray-800">TrendHive</h1>

      {/* Search Input */}
      <div className="w-1/3 relative hidden md:block">
        <Search className="absolute top-2  right-2" size={20}/>

        <Input
          type="text"
          placeholder="Search products..."
          className="w-full border-gray-300 rounded-full"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Button variant="outline" className="p-0 rounded-full size-10">
          <Heart className="" />
        </Button>
        <Button variant="outline" className="p-0 rounded-full size-10">
          <ShoppingCart />
        </Button>
        {user ? (
          <>
            <Link href={"/create-shop"}>
              <Button variant="outline">Create Shop</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                <DropdownMenuItem>My Shop</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleLogOut}>
                  <LogOut />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href={"/login"}>
            <Button variant="outline">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
