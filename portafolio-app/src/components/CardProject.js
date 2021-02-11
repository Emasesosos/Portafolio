import React from 'react';
import desktop from './../assets/desktop.JPG'

export const CardProject = () => {
    return (
        <div className="cardproject__container">
            <div className="cardproject__image">
                <img src={ desktop } alt=""/>
            </div>
            <div className="cardproject__descripcion">
                <div className="cardproject__hashtags">
                    <p>#HTML #CSS #responsive</p>
                </div>
                <div className="cardproject__name-project">
                    <h3>Pricing</h3>
                </div>
                <div className="cardproject__summary">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptate omnis magnam in, neque dignissimos! Doloremque nisi aperiam animi laudantium eius aliquid commodi, dolorem delectus doloribus.</p>
                </div>
                <div className="cardproject__demo-code">
                    <a href="/" target="_blank">Demo</a>
                    <a href="/" target="_blank">Code</a>
                </div>
            </div>
        </div>
    );
};
