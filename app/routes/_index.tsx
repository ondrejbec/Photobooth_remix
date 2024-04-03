import type { MetaFunction } from "@remix-run/node";
import  Sidebar  from "~/components/sidebar"
import Header from "~/components/header";
import { Link } from "lucide-react";
import Webcam from "react-webcam";
import { Avatar, AvatarFallback, AvatarImage } from "app/components/ui/ui/avatar"


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="bg-slate-500 flex-1 p-4">
        <div className="flex flex-row">
          <div className=" h-full w-1/2">
            <Webcam/>
          </div>
          <div className="w-2/2">
          </div>
        </div>
      </main>
    </div>
    <footer className="bg-primary flex text-white p-4 justify-center"><Link to="www.utima.cz">Utima.cz</Link></footer>
  </div>
  );
}
