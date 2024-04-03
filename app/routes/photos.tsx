import type { MetaFunction } from "@remix-run/node";
import Webcam from "react-webcam";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Photos() {
  return (
    <div className="bg-slate-500 flex flex-row p-10 gap-2 h-full">
    <Webcam/>
    <div className="p-4 text-white text-2xl">
      <h1>Foto bunka</h1>
    </div>
    </div>
  );
}
