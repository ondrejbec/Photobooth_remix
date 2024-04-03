import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Form, useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export async function action({
  request,
}: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("visitorsName");
  return json({ name: name});
}

export default function Invoices() {
  const data = useActionData<typeof action>();
  return (
    <div className="bg-slate-500 p-4 ">
    <h1 className="text-3xl text-white pb-6">useActionData</h1>
    <p className="text-sm text-white pb-6">Returns the serialized data from the most recent route action or undefined if there isn't one.</p>
    <div className="flex flex-row">
      <Form className="flex flex-col gap-2"method="post">
        <input className="w-48" type="text" name="visitorsName" />
      </Form>
      <div className="px-4 text-white">
      Jmeno: {data ? data.name : "Waiting name..."}
      </div>
    </div>
   
    </div>
  );
}