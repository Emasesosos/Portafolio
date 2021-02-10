import React from 'react';
import admin from './../../assets/admin.jpg';

export const Experiences = () => {
    return (
        <div className="experiences__container">
            <div className="experiences__title">
                <h4>Experiencia</h4>
            </div>
            <div className="experiences__main">
                <div className="experiences__image">
                    <img src={ admin } alt="feraz"/>
                </div>
                <div className="experiences__job">
                    <p>Sep 2018 - Actual</p>
                    <h3>Analista Jr</h3>
                    <div className="experiences__responsabilidades">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis porro minima incidunt?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
