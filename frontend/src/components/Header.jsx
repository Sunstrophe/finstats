import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="h-20 bg-sky-700">
            <div className="flex flex-row justify-center h-full gap-6 mx-40">
                <Link to="/">
                    <div className="flex items-center justify-center w-24 h-full text-xl hover:font-semibold font-roboto hover:pt-2 hover:border-b-4 hover:border-black">
                        Home
                    </div>
                </Link>
                <Link to="/about">
                    <div className="flex items-center justify-center w-24 h-full text-xl hover:font-semibold font-roboto hover:pt-2 hover:border-b-4 hover:border-black">
                        About
                    </div>
                </Link>
                <Link to="/">
                    <div className="flex items-center justify-center w-24 h-full text-xl hover:font-semibold font-roboto hover:pt-2 hover:border-b-4 hover:border-black">
                        TEST
                    </div>
                </Link>
                <Link to="/">
                    <div className="flex items-center justify-center w-24 h-full text-xl hover:font-semibold font-roboto hover:pt-2 hover:border-b-4 hover:border-black">
                        TEST
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
