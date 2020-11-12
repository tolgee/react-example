import {useSetLanguage} from "@polygloat/react";
import React, {FunctionComponent} from "react";

export const ChooseLanguage: FunctionComponent<React.ComponentProps<"select">> = (props) => {
    const setLanguage = useSetLanguage();

    return (
        <select {...props} style={{
            padding: "10px",
            borderRadius: "5px"
        }} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="cs">Česky</option>
        </select>
    );
};