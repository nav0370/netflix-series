import React from 'react';
import ReactDOM from 'react-dom';

function Cards(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card-img">
                        <img src={props.imgsrc} alt="series-1" />
                    </div>
                    <div className="card-title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="card-name">
                        <h3>{props.sname}</h3>
                    </div>
                    <div className="card-btn">
                        <a href={props.link} target="_blank"><button>Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;