import React,{useState} from "react";
import './PhotoViewer.css';

function PhotoViewer(props){
    return (
        <div className="ViewerContainer">
            <img src="https://i.picsum.photos/id/360/200/300.jpg"  className="ViewerSize"></img>
        </div>
    );
}

export {PhotoViewer};

