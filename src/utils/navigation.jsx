import {useNavigate, useParams} from "react-router-dom"
import React, {Component} from "react"
import HomePage from "../pages/HomePage";

export const WithRouter = (Component) => {
    const Wrapper = (props) => {
        const params = useParams();
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} params={params}/>
    };
  return Wrapper
};
