import React, {useState} from "react";
import {ImageUrls} from "../data";
import './PhotoContainer.css';
import {PhotoViewer} from "../PhotoViewer/PhotoViewer";
//import {imagesArray} from "../App";
export function PhotoContainer(props) {
    const images = ImageUrls.map(url => <img className="sizeclass" src={url} alt="" onClick={() => props.setSelectedImage(url)}/>);
    return (
        
        <div>
       
            <div className="photocontainer"><br/>
                {images} 
            </div>
        </div>
    );
}

