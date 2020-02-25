import React,{useState} from "react";
import './PhotoViewer.css';

function PhotoViewer(props){
    return (
        
        <div className="ViewerContainer">
            <img src={props.src} className="ViewerSize"></img>
        </div>
    );
}

export {PhotoViewer};

