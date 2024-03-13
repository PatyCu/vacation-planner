import { useState } from "react";
import { ColorPalette, getNextColor } from "../utils/ColorUtils";

interface ClickableColorProps {
    color: number;
    callback: (color: number) => void;
}

const ClickableColor = ({ color, callback }: ClickableColorProps) => {
    const [activeColor, setActiveColor] = useState(color);
    const cssForColors = `size-4 ${ColorPalette[activeColor]} mt-1`; 

    function handleClick(activeColor: number) {
        const nextColor = getNextColor(activeColor);
        setActiveColor(nextColor);
        callback(nextColor);
    }
    
    return (
        <button
            className={cssForColors}
            onClick={() => handleClick(activeColor)}
        >&nbsp;</button>
    );
};

export default ClickableColor;