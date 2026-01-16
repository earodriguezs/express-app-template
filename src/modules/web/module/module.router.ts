/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import express, { Router } from 'express';
import ModuleController from './module.controller.js';

/**
 * @description Rutas de la aplicación.
 * @type {Router}
 */
const WEB_MODULE_ROUTER: Router = express.Router();

WEB_MODULE_ROUTER.get( '/module', ( req, res ) => {
    const controller = new ModuleController( req, res );
    controller.home();
} );

export default WEB_MODULE_ROUTER;