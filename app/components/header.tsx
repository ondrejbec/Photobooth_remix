
import { Avatar, AvatarFallback, AvatarImage } from "app/components/ui/ui/avatar"

export default function Header () {
    return (
        <header className="w-full flex flex-row justify-between bg-primary text-white p-4 items-center">
            <div className="text-xl">
            Remix
            </div>
            <div className="p-2">
                <Avatar>
                    <AvatarImage src="https://www.utima.cz/wp-content/uploads/elementor/thumbs/ondrej-becicka-blue-qcujvjwqphjyyehajym3utqky389nsh36qe5c7uao8.png" />
                    <AvatarFallback>OB</AvatarFallback>
                </Avatar>
            </div>
        </header>
        )
}