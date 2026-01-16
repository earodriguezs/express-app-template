import compression from 'compression';
import type { Application, Router } from 'express';
import express from 'express';
import { engine } from 'express-handlebars';

/**
 * Provee las funciones necesarias para configurar e iniciar el
 * servidor de Express.
 */
export default class Server {

    /**
     * Instancia a la aplicación de {@link Express}.
     */
    private _app: Application = express();

    /**
     * @description Crea una nueva instancia de la clase {@link Server}.
     */
    constructor() {
        this.config();
    }

    /**
     * Realiza la configuración del servidor.
     */
    private config = (): void => {
        this._app.engine( 'handlebars', engine( {
            defaultLayout: 'main',
            extname: '.handlebars',
            layoutsDir: './dist/views/layouts/',
            partialsDir: './dist/views/partials/'
        } ) );
        this._app.set( 'view engine', 'handlebars' );
        this._app.set( 'views', './dist/views/' );

        this._app.use( compression() );
        this._app.use( express.json() );

        this._app.use( '/', express.static( './dist/public/' ) );
        this._app.use( '/', express.static( './src/' ) );
        this._app.use( '/css',
            express.static( './node_modules/bootstrap/dist/css/' ) );
        this._app.use( '/js',
            express.static( './node_modules/bootstrap/dist/js/' ) );
    }

    /**
     * Agrega la configuración de rutas para un recurso especificado.
     * @param {Router} router
     */
    public addRouter( router: Router ): void {
        this._app.use( router );
    }

    /**
     * Inicia el servidor de Express en el puerto especificado.
     * @param {number} port Puerto en el que se iniciará el servidor.
     * @returns {void} Este método no retorna ningún valor.
     */
    public listen( hostname: string, port: number ): void {
        this._app.listen( port, hostname, ( error: Error | undefined ): void => {
            console.clear();
            if ( error )
                console.error( `Error al iniciar el servidor: ${error.message}` );
            else if ( hostname === "" )
                console.log( `Servidor en línea por el puerto ${port}.` );
            else
                console.log( `Servidor en línea: http://${hostname}:${port}/` );
        } );
    }
}
