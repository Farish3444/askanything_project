import React,{useState} from 'react'
import {Router, Redirect,Route} from 'react-router-dom'


const ProtectedRoute = ({path,Component,render,user=false,...rest}) => {

    return <Route 
    path={path}
    {...rest}
    render= {props=>{
        if(!user) return <Redirect to="/login"/>;
        return Component ?  <Component {...props}/> : render(props);
    }}
    />
}

export default ProtectedRoute
