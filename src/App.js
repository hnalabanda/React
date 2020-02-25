import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {ImageUrls} from "./data";
import {PhotoContainer} from "./PhotoContainer/PhotoContainer";


function App() {
    // const images = [];
    //
    //
    // for (let i = 0; i < ImageUrls.length; i++){
    //     images.push(<PhotoViewer imgUrl={ImageUrls[i]}/>)
    // 
    const [selectedImage, setSelectedImage] = useState(ImageUrls[0]);
  
    
    return (
        <div >
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={selectedImage}/>
         <PhotoContainer setSelectedImage={setSelectedImage}/>
        </div>
    );
}


export default App;
