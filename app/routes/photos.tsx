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
    <div className="bg-slate-500 flex flex-col p-10 gap-2 h-full p-4">
      <div >
       <h1 className="text-white text-3xl font-semibold">Foto bunka</h1>
       <p className="text-white text-sm"> Test npm balicku: https://www.npmjs.com/package/react-webcam </p>
      </div>
    <Webcam width={600} height={600}/>
    
      
    
    </div>
  );
}
