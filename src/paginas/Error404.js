import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Error404</h2>
            <p>Su página no pudo ser encontrada</p>
            <Link to="/">Vuelve al menu principal...</Link>
        </div>
    );
}
 
export default NotFound;
