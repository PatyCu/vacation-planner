import { useState } from "react";

const ColorPalette = [
    "bg-cyan-600",
    "bg-amber-600",
    "bg-red-600",
    "bg-orange-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-lime-600"
];
interface ClickableColorProps {
    color: number;
}

function getNextColor(index: number) {
    return index === ColorPalette.length - 1 ? 0 : index + 1;
}

const ClickableColor = ({ color }: ClickableColorProps) => {
    const [activeColor, setActiveColor] = useState(color);

    const cssForColors = `size-4 ${ColorPalette[activeColor]} mt-1`;
    
    return (
        <button
            className={cssForColors}
            onClick={() => setActiveColor(getNextColor(activeColor))}
        >&nbsp;</button>
    );
};

export default ClickableColor;