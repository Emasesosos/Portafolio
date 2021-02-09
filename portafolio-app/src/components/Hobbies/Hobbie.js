import React from 'react';

export const Hobbie = (props) => {

    const { hob } = props;

    return (

        <div className="hobbies__list">
            <div className="hobbies__img">
                <img src={hob.image} alt="img1"/>
            </div>
            <div className="hobbies__name">
                <h3>{ hob.title }</h3>
            </div>
            <div className="hobbies__description">
                <p>{ hob.description }</p>
            </div>
        </div>

    );

};
