import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

// with {} we don't import the default export
import { FavContextProvider } from './Store/fav-context';


ReactDOM.render(

    <FavContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavContextProvider>, 
    document.getElementById('root')
    
);
