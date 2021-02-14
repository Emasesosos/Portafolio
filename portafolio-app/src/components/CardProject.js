import React from 'react';

export const CardProject = ({ project }) => {

    const { code, demo, description, hash, imgUrl, name } = project;

    return (
        <div className="cardproject__container">
            <div className="cardproject__image">
                <img src={ imgUrl } alt={ imgUrl }/>
            </div>
            <div className="cardproject__descripcion">
                <div className="cardproject__hashtags">
                    <p>{ hash }</p>
                </div>
                <div className="cardproject__name-project">
                    <h3>{ name }</h3>
                </div>
                <div className="cardproject__summary">
                    <p>{ description }</p>
                </div>
                <div className="cardproject__demo-code">
                    <a href={ demo } target="_blank" rel="noreferrer">Demo</a>
                    <a href={ code } target="_blank" rel="noreferrer">Code</a>
                </div>
            </div>
        </div>
    );
};
