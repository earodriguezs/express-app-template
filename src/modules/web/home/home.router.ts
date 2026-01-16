/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import express, { Router } from 'express';
import HomeController from './home.controller.js';

/**
 * @description Rutas de la aplicación.
 * @type {Router}
 */
const WEB_HOME_ROUTER: Router = express.Router();

WEB_HOME_ROUTER.get( '/', ( req, res ) => {
    const controller = new HomeController( req, res );
    controller.home();
} );

WEB_HOME_ROUTER.get( '/home', ( req, res ) => {
    const controller = new HomeController( req, res );
    controller.home();
} );

export default WEB_HOME_ROUTER;