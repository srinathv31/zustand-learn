// Source Imports
import React from "react";

export default function AdjustButton({ label, action, value }: {
    label: string, action: (n: number) => void, value: number
}): JSX.Element {
    return(
        <button onClick={() => action(value)}>{label}</button>
    );
}
