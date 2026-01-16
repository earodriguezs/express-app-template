/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { Request, Response } from 'express';
import WebController from "../../core/web.controller.js";

/**
 * @description Controlador para la página de inicio.
 */
class HomeController extends WebController {

    /**
     * @description Crea una nueva instancia de la clase {@link Controller}.
     * @param {Request} req Solicitud HTTP.
     * @param {Response} res Respuesta HTTP.
     */
    constructor( req: Request, res: Response ) {
        super( req, res );
    }

    /**
     * @override
     * @description Método que se debe implementar en cada controlador para la
     * página de inicio.
     */
    public home = (): void => {
        this._res.status( 200 ).render( 'home', { layout: 'main' } );
    }
}

export default HomeController;
