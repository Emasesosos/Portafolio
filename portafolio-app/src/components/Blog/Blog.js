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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium, commodi exercitationem, saepe dolores doloremque molestias, quisquam aperiam dolor cum et labore? Praesentium voluptas laboriosam quaerat quae non officia accusamus.
                        Dolor accusamus aliquid porro nisi tenetur a magni reprehenderit! Error facere mollitia aut ipsa, eligendi nisi. Repellendus placeat, deleniti voluptate labore asperiores sunt ipsa nihil, earum tempore quas molestias. Veniam!</p>
                    </article>
                </div>
            </div>
        </div>
    );
};
