import React from 'react';
import cosmos from './../../assets/cosmos.png';

export const Blog = () => {
    return (
        <div className="blog__container">
            <div className="blog__title">
                <h4>Blog</h4>
            </div>
            <div className="blog__main">
                <div className="blog__article">
                    <h3>Guía para ser un Frontend Developer con Udemy</h3>
                </div>
                <div className="blog__image">
                    <img src={ cosmos } alt="blog"/>
                </div>
                <div className="blog__description">
                    <article>
                        <p>
                            PROXIMAMENTE!
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};
