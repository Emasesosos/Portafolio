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
                    <h3>Analista Jr.</h3>
                    <div className="experiences__responsabilidades">
                        <ul>
                            <li>* Desarrollo e implementación de aplicaciones contables (ERP) con Sencha Extjs, Java y Oracle.</li>
                            <li>* Desarrollo de módulos: Caja chica, Reembolsos y Anticipos.</li>
                            <li>* Desarrollo de reportes con SQR de Oracle.</li>
                            <li>* Gestión, planeación e implementación de software orientado a necesidades del cliente.</li>
                            <li>* Servicio y Soporte al Cliente.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
