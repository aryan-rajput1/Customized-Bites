// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const DefaultHoc = ({component : Component, ...rest}) => {
    return (
        <>
        <Router>
            <Routes>
                <Route 
                    {...rest}

                    Component={
                        (props) => (
                            <DefaultLayout>
                              <Component {...props}/>
                            </DefaultLayout>
                        )
                    }
                />
            </Routes>
        </Router>
        </>
    )
}

export default DefaultHoc;