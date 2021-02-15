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
                    <p>Self-taught and committed to the implementation of the necessary technologies for the development of Projects. Manage, develop and implement technological solutions that generate high impact changes for the company and society.</p>
                </div>
            </div>
        </div>

    );

};
