import React from "react"
import { useRouteError } from "react-router-dom";

let Error = () => {

    const error = useRouteError();

    return(
        <div className="w-screen bg-cyan-50">
        <h1> Error Page </h1>
        <br></br>
        <h2>{error.data}</h2>
        </div>
    )
}

export default Error