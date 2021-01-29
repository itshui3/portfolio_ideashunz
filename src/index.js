import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// wrapper compo
import CenterWrapper from './CenterWrapper';
// children compos
import {
    SVGNotes,
    // carousel and assets
    Carousel,
    imgAssets,
    // BWButton
    BWButton,
    // Lid-Menu
    LidMenu,
    // LazyLoad
    LazyLoad,
    TypewriterWithin,
 } from './components'


ReactDOM.render(
<React.StrictMode>
    <CenterWrapper>
    {/* <Carousel imgAssets={imgAssets}/> */}
    {/* <SVGNotes /> */}
    {/* <BWButton /> */}
    {/* <LidMenu /> */}

    <TypewriterWithin />

    </CenterWrapper>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
