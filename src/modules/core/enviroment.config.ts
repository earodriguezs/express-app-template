/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import Env from 'dotenv';

/**
 * @description Provee los valores establecidos para las variables de entorno.
 */
class Enviroment {

    /**
     * @description Constructor estático de la clase.
     */
    static {
        Env.config();
    }
    
    /**
     * Obtiene el puerto establecido en el archivo de configuración para
     * recibir solicitudes del cliente.
     * @returns {number} Puerto de escucha del servidor.
     */
    static get port(): number {
        let value = ( process.env.PORT || '80' );
        return parseInt( value );
    }

    static get hostname(): string {
        return process.env.HOSTNAME || "";
    }
}

export default Enviroment;