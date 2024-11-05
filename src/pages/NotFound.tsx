import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="grid h-screen place-items-center">
            <div className="text-center">
                <h1 className="text-6xl">404: Page Not Found</h1>
                <Link to="/" className="text-2xl text-blue-500 underline">Home</Link>
            </div>
        </div>
    )
}

