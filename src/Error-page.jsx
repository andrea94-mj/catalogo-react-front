//importamos useroutererror para que nos salte el error por defecto del navegador
import { useRouteError } from "react-router-dom";

import (useRouteError)

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return ( 
        
        <div>
            <h2>Error fatal</h2>
            <p>
                {/* Imprime, si error existe, busca statusText, o si error tiene un mensaje , o "pagina no encontrada"  */}
                {error ?.statusText || error ?.message || "Página no encontrada"}
            </p>
        </div>

     );
}
 
export default ErrorPage;