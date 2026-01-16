/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

import { config, element } from "./app.js";

//#region -- Definición de modelos y tipos de datos --

interface IAPIResponse {
    folio: string;
    mensaje: string;
    api?: {
        version: string;
        fecha: string;
    }
}

//#endregion

//#region -- VIEW --

function bindTable( model: IAPIResponse ): void {
    let tbody: HTMLTableSectionElement = element( 'tbody' );
    tbody.classList.add( 'text-center' );
            
    let tr: HTMLTableRowElement = element( 'tr' );
    tr.innerHTML = `<td>${model.folio}</td>
                    <td>${model.api?.version}</td>
                    <td>${model.mensaje}</td>`;
    tbody.appendChild( tr );
    element<HTMLTableElement>( '.table' ).appendChild( tbody );
}

//#endregion

async function demo(): Promise<IAPIResponse> {
    try {
        const response = await fetch( '/api/demo' );
        if ( response.ok ) {
            return <IAPIResponse>( await response.json() );
        } else {
            return {
                folio: `ERROR-${response.status}`,
                mensaje: response.statusText
            };
        }
    } catch ( error ) {
        const mensaje = error instanceof Error ? error.message : String( error );
        return {
            folio: 'ERROR-500',
            mensaje
        };
    }
}

function init(): void {
    config();
    demo().then( ( data: IAPIResponse ): void => {
        bindTable( data );
    } );
}

//#region 

/**
 * Punto de entrada para la inicialización de la página de inicio.
 */
document.addEventListener( "DOMContentLoaded", (): void => {
    init();
} );
