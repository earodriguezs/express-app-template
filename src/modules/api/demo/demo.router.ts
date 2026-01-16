/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { Router } from "express";
import express from "express";
/**
 * @description Rutas de la API.
 * @type {Router}
 */
const API_DEMO_ROUTER: Router = express.Router();

API_DEMO_ROUTER.get( "/api/demo", ( req, res ) => {
    const today = new Date();
    today.getTime();
    res.json( {
        folio: `API-${today.getTime()}`,
        mensaje: "La API de demostración funciona correctamente.",
        api: {
            version: "1.0.0",
            fecha: new Date( 2025, 10, 19 ).toLocaleDateString()
        }
    } );
} );

export default API_DEMO_ROUTER;
