import React from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

const TheLayout = () => {
    return (
        <div>
            
            
            <div><Header></Header></div>
            <main><Main></Main></main>
            <div><Footer></Footer></div>
        </div>
        
        
    );
};

export default TheLayout;