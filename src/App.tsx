import React from 'react';
import './App.css';
import {PolygloatProvider} from "@polygloat/react";
import {UI} from "@polygloat/ui"
import {Page} from "./Page";


const App = () => {
    return (
        <PolygloatProvider
            filesUrlPrefix="i18n/"
            apiUrl={process.env.REACT_APP_POLYGLOAT_API_URL}
            apiKey={process.env.REACT_APP_POLYGLOAT_API_KEY}
            ui={process.env.REACT_APP_POLYGLOAT_WITH_UI === "true" ? UI : undefined}
            loadingFallback={
                <div style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Loading...
                </div>
            }
        >
            <div style={{
                width: "800px",
                margin: "0 auto 0 auto",
                textAlign: "center",
                paddingTop: "20px"
            }}>
                <div style={{padding: "20px"}}>
                    <img src="favicon.svg" style={{
                        width: "100px",
                        height: "100px"
                    }}/>
                </div>

                <h1 style={{marginBottom: "50px"}}>React with Polygloat Example App</h1>
                <Page/>
            </div>
        </PolygloatProvider>
    )
};

export default App;
