import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PhotoViewer,CurrentURL} from "./PhotoViewer/PhotoViewer";
import {ImageUrls} from "./data";
import {PhotoContainer} from "./PhotoContainer/PhotoContainer";


function App() {
    // const images = [];
    //
    //
    // for (let i = 0; i < ImageUrls.length; i++){
    //     images.push(<PhotoViewer imgUrl={ImageUrls[i]}/>)
    // 
        
    
    return (
        <div >
            <h1>React Photo Viewer</h1>
            <PhotoViewer/>
            <PhotoContainer/>
        </div>
    );
}

export default App;
