import React, {useEffect, useState} from 'react';
import './App.css';
import {PolygloatProvider, T, useSetLanguage, useTranslate} from "polygloat-react";
import {UI} from "polygloat/ui"

const ChooseLanguage = () => {
    const setLanguage = useSetLanguage();

    return (<div>
        <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">En</option>
            <option value="de">De</option>
        </select>
    </div>);
};

const ComponentWithUseTranslation = () => {
    const t = useTranslate();
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setTimeout(() => setBool(true), 2000);
    })

    return (
        <>
            {t("test")}
            {t("hello")}

            <h1>{t("hello", {name: "Jan", surname: "Cizmar"})}</h1>
            <h1>{bool ? t("test") : t("hello", {name: "Jan", surname: "Cizmar"})}</h1>
        </>
    );
}

const App = () => {
    return (
        <PolygloatProvider
            filesUrlPrefix="i18n/"
            apiUrl={process.env.REACT_APP_POLYGLOAT_API_URL}
            apiKey={process.env.REACT_APP_POLYGLOAT_API_KEY}
            ui={process.env.REACT_APP_POLYGLOAT_WITH_UI === "true" ? UI : undefined}
        >

            <ComponentWithUseTranslation/>

            <ChooseLanguage/>

            <div className="App">
                <h1><T parameters={{name: "Jan", surname: "Cizmar"}}>hello</T></h1>
                <h1><T noWrap>test</T></h1>
            </div>
        </PolygloatProvider>
    )
};

export default App;
