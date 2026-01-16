/**
 * @author Eric Adalberto Rodríguez Sánchez <eazicomservicios@gmail.com>
 * Todos los derechos reservados.
 */

/**
 * 
 */
function config( path: string = '/' ): void {
    let anchor = element<HTMLAnchorElement>( `a.nav-link[href='${path}']` );
    anchor.classList.add( 'active' );
    anchor.setAttribute( 'aria-current', 'page' );
}

function element<T extends keyof HTMLElementTagNameMap>( tagName: T ): HTMLElementTagNameMap[ T ];
function element<T extends HTMLElement = HTMLElement>( selector: string ): T;
function element( arg: string ): any {
    if ( /^[a-z]+$/i.test( arg ) )
        return document.createElement( arg );
    
    return document.querySelector( arg );
}

export {
    config,
    element
};

