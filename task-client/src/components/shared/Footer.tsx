import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="bg-gray-200">

      <footer className="  text-center p-6 mt-8  shadow-md">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold">TrendHive</p>
          <p className="text-sm mt-2">Bringing you the best shopping experience.</p>
          <div className="grid  md:grid-cols-3 justify-center gap-4 mt-4">
            <Button variant="link" className=" ">Privacy Policy</Button>
            <Button variant="link" className=" ">Terms of Service</Button>
            <Button variant="link" className=" ">Contact Us</Button>
          </div>
          <p className="text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} TrendHive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}