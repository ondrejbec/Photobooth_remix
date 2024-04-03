import type { MetaFunction } from "@remix-run/node";
import { Form, useSubmit } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Submit() {
const submit = useSubmit();
  return (
    <div className="bg-slate-500 p-4 ">
    <h1 className="text-3xl text-white pb-6">useSubmit</h1>
    <p className="text-sm text-white pb-6">The imperative version of Form that lets you, the programmer, submit a form instead of the user.
one.</p>
    <div className="flex flex-row">
      <Form 
        onChange={(event) => {submit(event.currentTarget);}}    
        className="flex flex-col gap-2" 
    />
    </div>
   
    </div>
  );
}