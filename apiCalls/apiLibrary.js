// apiLibrary.js

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Define the module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.APIUtils = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    
    /**
     * Hace una llamada a la API de Chuck Norris y devuelve una promesa con el resultado.
     * @returns {Promise<string>} Una promesa que resuelve con el chiste.
     */
    function llamada_API_chuck() {
        return fetch('https://api.chucknorris.io/jokes/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(data => data.value)  // Extraemos el chiste
            .catch(error => {
                console.error('Error en la llamada a la API de Chuck Norris:', error);
                throw error;
            });
    }

    // Aquí puedes agregar otras funciones para otras APIs

    // Exponemos la API de la librería
    return {
        llamada_API_chuck: llamada_API_chuck
        // Agregar otras funciones si es necesario
    };
}));
