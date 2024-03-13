export const ColorPalette = [
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

export function getNextColor(index: number) {
    return index === ColorPalette.length - 1 ? 0 : index + 1;
}

export function getColorFromIndex(index: number) {
    if (index === -1)
        return "";
    return ColorPalette[index];
}