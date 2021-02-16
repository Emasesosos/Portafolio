import React from 'react';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import yo from './../../assets/yo.PNG';

export const PersonalInfo = () => {

    return (

        <div className="personalInfo__container">
            <div className="personalInfo__foto">
                <img src={ yo } alt="yo"/>
            </div>
            <div className="personalInfo__personal">
                <div className="personalInfo__name-email-phone">
                    <div className="personalInfo__name">
                        <h4>Emmanuel Martínez</h4>
                        <p>Front-end developer</p>
                    </div>
                    <div className="personalInfo__email-phone">
                        <div className="personalInfo__email">
                            <Email color="action"/><p>j.emmanuel.martinez.e@hotmail.com</p>
                        </div>
                        <div className="personalInfo__phone">
                            <Phone color="action" /><p>(+52)55 25 06 2070</p>
                        </div>
                    </div>
                </div>
                <div className="personalInfo__descripcion">
                    <p>
                    Autodidacta y comprometido con la implementación de las tecnologías necesarias para el desarrollo de Proyectos. Gestionar, desarrollar e implementar soluciones tecnológicas que generen cambios de alto impacto para la empresa y la sociedad.
                    </p>
                </div>
            </div>
        </div>

    );

};
