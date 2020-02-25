import React from 'react';
import {render, fireEvent} from '@testing-library/react';
//import renderer from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import {ImageUrls} from "./data";
import {PhotoContainer} from "./PhotoContainer/PhotoContainer";
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {wait} from "@testing-library/dom";

test('renders the correct first link', () => {
 
  const firstURL=ImageUrls[0];

   expect(firstURL).toBe("https://i.picsum.photos/id/600/1600/900.jpg");
});


test('does not include broken images', () => {
   
    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];
    var brokenLinks=false;
    var imageNumberString;
    
  for(let i=0;i<brokenImages.length;i++){
      imageNumberString = `6${brokenImages[i].toString().padStart(2, '0')}`;
     
      for(let c=0;c<ImageUrls.length;c++){
        
          if(ImageUrls[c].includes(imageNumberString)) {
              brokenLinks=true;
              break;
          }
     
      }
      if(brokenLinks) {
          break;
      }
  }
   

    expect(brokenLinks).toBe(false);
});




    describe("selected image", () => {
    it("The photoviewer component has not changed", async () => {
        const tree  = renderer
            .create(<PhotoViewer src={ImageUrls[0]}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
        

    } );
    }); 
    
    describe("selected image", () => {
        it("when I click the thumbnail the PhotoViewer updates with the new image", async () => {
            const component = render(<App/>);
            fireEvent.click(component.getAllByRole("img")[2]);
            const photoViewerURL=component.getAllByRole("img")[0].src;
            const selectedPhotoURL=component.getAllByRole("img")[2].src;
 
            expect(photoViewerURL).toBe(selectedPhotoURL);
        
        });

    });