import type { MetaFunction } from "@remix-run/node";
import  Sidebar  from "~/components/sidebar"
import Webcam from "react-webcam";
import { Form, useNavigation } from "@remix-run/react";

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
        <div className="flex flex-row">
          <div className="w-1/2">
            <Webcam/>
          </div>
          <div className="w-2/2 p-4">
          <h1>Test form</h1>
          <Form method="post" action="/signup">
            <input name="email" />
          </Form>

          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
