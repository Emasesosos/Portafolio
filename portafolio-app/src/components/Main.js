import React from 'react';
import { Blog } from './Blog/Blog';
import { Experiences } from './Experiences/Experiences';

export const Main = () => {
    return (
        <div className="main__container">
            <Blog />
            <Experiences />
        </div>
    );
};
