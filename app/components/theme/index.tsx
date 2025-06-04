"use client"
import { useTheme } from "@/app/context/themeContext";
import { IoIosSunny } from "react-icons/io";

const ThemeSwitcher = () => {
     
    const { toggleTheme } = useTheme();
    return (
        <div className="fixed top-72 right-0  p-2 rounded-tl-full rounded-bl-full bg-[#2e2e2e] border b text-white"><button onClick={toggleTheme} >
            <IoIosSunny size={20}/>
        </button></div>
    )
}

export default ThemeSwitcher