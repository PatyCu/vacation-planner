import { useState } from "react";
import { getColorFromIndex } from "../utils/ColorUtils";

interface ClickableColorProps {
    colorDay: number;
    colorVacationer: number;
    text: string;
    callback: () => void;
}


const ClickableDay = ({ colorDay, colorVacationer, text, callback }: ClickableColorProps) => {
    const [activeColor, setActiveColor] = useState(colorDay);
    const getNextColor = (color: number) => {
        if (color === -1) {
            return colorVacationer;
        } else {
            return -1;
        }
    }
    const cssForColors = activeColor=== -1 ? `size-6 rounded-full hover:bg-cyan-200`: `size-6 rounded-full ${getColorFromIndex(activeColor)}`; 
    
    function handleClick(activeColor: number) {
        const nextColor = getNextColor(activeColor);
        setActiveColor(nextColor);
        callback();
    }
    
    return (
        <div
            className={cssForColors}
            onClick={() => handleClick(activeColor)}
        >
            {text}
        </div>
    );
};

export default ClickableDay;