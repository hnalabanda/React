import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {ImageUrls} from "./data";

test('renders the correct first link', () => {
 
  const firstURL=ImageUrls[0];

   expect(firstURL).toBe("https://i.picsum.photos/id/600/1600/900.jpg");
});
