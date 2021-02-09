import React from 'react';

export const Skill = (props) => {

    console.log(props);

    return (
        <div className="skills__techs-range">
            <div className="skills__list">
                <div className="skills__tech">
                    <p>{props.tech.tech}</p>
                </div>
            </div>
            <div className="skills__range">
                <div className="skills__range__fondo"></div>
                <div className="skills__range__relleno" style={{ width: `${props.tech.porcentage}%` }}></div>
            </div>
        </div>
    );
};
