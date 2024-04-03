import type { MetaFunction } from "@remix-run/node";
import  Sidebar  from "~/components/sidebar"
import Webcam from "react-webcam";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  
  return (
    <div className="flex flex-col h-screen">
    <div className="flex flex-1">
      <Sidebar />
      <main className="bg-slate-500 flex-1 p-4">
        <div className="flex flex-row p-4">
          <div className="w-1/2">
            <h1 className="text-white text-3xl font-semibold">Remix</h1>
            <h2 className="text-white text-xl font-semibold">Links</h2>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
