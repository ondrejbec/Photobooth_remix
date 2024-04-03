import { Button } from "./ui/ui/button"
import { Link } from "@remix-run/react";



export default function Sidebar() {
    return (
    <aside className="bg-gray-700 text-white w-64 p-4">
        <ul className="w-full">
          <li className="p-2">
            <Button>
              <Link to="/photos">Fotky</Link>
            </Button>
          </li>
          <li className="p-2">
            <Button>
              <Link to="/invoices">Invoices</Link>
            </Button>
          </li>
          <li className="p-2">
            <Button>
              <Link to="">Nastaveni</Link>
            </Button>
          </li>
        </ul>
    </aside>
    );
  }