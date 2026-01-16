/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import type { Request, Response } from 'express';

/**
 * @description Define la clase base para los controladores y las operaciones
 * mínimas que debe realizar cada uno.
 */
class WebController {

    /**
     * @description Almacena la solicitud HTTP que se está procesando.
     * @protected
     * @type {Request}
     */
    protected _req: Request;

    /**
     * @description Almacena la respuesta HTTP que se enviará al cliente.
     * @protected
     * @type {Response}
     */
    protected _res: Response;

    /**
     * @description Crea una nueva instancia de la clase {@link WebController}.
     * @param {Request} request 
     * @param {Response} response 
     */
    constructor( req: Request, res: Response ) {
        this._req = req;
        this._res = res;
    }

    /**
     * @description Método que se debe implementar en cada controlador para
     * realizar las operaciones específicas de cada uno.
     */
    public home = (): void => { }
}

export default WebController;
