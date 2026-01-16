/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
*/

import type { Router } from 'express';
import Enviroment from '../modules/core/enviroment.config.js';
import ROUTERS from '../routers/router.js';
import Server from "../server.js";

/**
 * @description Contiene la referencia al objeto del servidor de aplicaciones.
 * @type {Server}
 */
const SERVER: Server = new Server();
ROUTERS.forEach( ( router: Router ) => {
    SERVER.addRouter( router );
} );

SERVER.listen( Enviroment.hostname, Enviroment.port );
