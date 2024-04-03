import { Button } from "./ui/ui/button"


export default function Sidebar() {
    return (
    <aside className="bg-gray-700 text-white w-64 p-4">
        <ul className="w-full">
          <li className="p-2"><Button >Fotky</Button></li>
          <li className="p-2"><Button>Historie</Button></li>
          <li className="p-2"><Button>Kredity</Button></li>
        </ul>
    </aside>
    );
  }