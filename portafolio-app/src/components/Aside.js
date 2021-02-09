import React from 'react';
import { Skills } from './Skills/Skills';
import { Hobbies } from './Hobbies/Hobbies';

export const Aside = () => {
    return (
        <div className="aside__container">
            <Skills />
            <Hobbies />
        </div>
    );
};
