import type { MetaFunction } from "@remix-run/node";
import  Sidebar  from "~/components/sidebar"
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index() {
  const [youtubeID] = useState('r4B69HAOXnA')
  return (
    <div className="flex flex-col h-screen">
    <div className="flex flex-1">
      <Sidebar />
      <main className="bg-slate-500 flex-1 p-4">
        <div className="flex flex-row p-4">
          <div className="w-1/2">
            <h1 className="text-white text-3xl font-semibold pb-2">Remix</h1>
            <h2 className="text-white text-xl font-semibold pb-2">Links</h2>
            <ul className="text-blue-300 flex flex-row text-lg gap-4 underline">
              <li><a href="https://remix.run/docs/en/main">Documentation</a></li>
              <li><a href="https://remix.run/docs/en/main">Official page</a></li>
              <li><a href="https://www.youtube.com/@Remix-Run/videos">Youtube channel</a></li>
              <li><a href="https://github.com/remix-run/remix">Github</a></li>
            </ul>
            <h2 className="text-white text-xl font-semibold py-2">Articles</h2>
            <ul className="text-blue-300 flex flex-row text-lg gap-4 underline">
              <li><a href="https://www.dhiwise.com/post/an-in-depth-analysis-remix-vs-react-which-one-is-supreme">Comparsion</a></li>
            </ul>
            <iframe width={650} height={500} className='pt-6 video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
            </iframe>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
