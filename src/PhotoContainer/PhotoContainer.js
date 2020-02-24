import React, {useState} from "react";
import {ImageUrls} from "../data";
import './PhotoContainer.css';
import {PhotoViewer} from "../PhotoViewer/PhotoViewer";

export function PhotoContainer() {
    const [selectedImage, setSelectedImage] = useState("");
    
    const images = ImageUrls.map(url => <img className="sizeclass" src={url} alt="" onClick={() => setSelectedImage(url)}/>);
    
    return (
        <div>
            <div>Selected Image: {selectedImage}</div>
            <div className="photocontainer"><br/>
                {images}
            </div>
        </div>
    );
}

const myFunction = function() {
    
};