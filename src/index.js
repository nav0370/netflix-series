import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="main-heading">Netflix Series</h1>
    <Cards
      imgsrc = {Sdata[0].imgsrc}
      title = {Sdata[0].title}
      sname = {Sdata[0].sname}
      link = {Sdata[0].link}
    />
    <Cards
      imgsrc = {Sdata[1].imgsrc}
      title = {Sdata[1].title}
      sname = {Sdata[1].sname}
      link = {Sdata[1].link}
    />
    <Cards
      imgsrc = {Sdata[2].imgsrc}
      title = {Sdata[2].title}
      sname = {Sdata[2].sname}
      link = {Sdata[2].link}
    />
    <Cards
      imgsrc = {Sdata[3].imgsrc}
      title = {Sdata[3].title}
      sname = {Sdata[3].sname}
      link = {Sdata[3].link}
    />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
