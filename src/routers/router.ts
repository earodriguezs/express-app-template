
/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { Router } from 'express';
import API_DEMO_ROUTER from '../modules/api/demo/demo.router.js';
import WEB_HOME_ROUTER from '../modules/web/home/home.router.js';
import WEB_MODULE_ROUTER from '../modules/web/module/module.router.js';

/**
 * @description Arreglo que contiene las rutas de la aplicación.
 * @type {Array<Router>}
 */
const ROUTERS: Array<Router> = [
    API_DEMO_ROUTER,
    WEB_HOME_ROUTER,
    WEB_MODULE_ROUTER
];

export default ROUTERS;
