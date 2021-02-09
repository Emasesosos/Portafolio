import React from 'react';
import { Skill } from './Skill';
import { technologies } from './../../helpers/technologies';

export const Skills = () => {

    return (
        <div className="skills__container">
            <div className="skills__title">
                <h4>FRONT END</h4>
            </div>
            {
                technologies.map((tech, index) => {
                    return <Skill 
                                key={ index }
                                tech={ tech }
                            />;
                })
            }
        </div>
    );
};
