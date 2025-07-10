import '../style/logo.scss'
import { Link } from "react-router-dom";

export default function Logo({to = '/', name_logo = 'TunaSia Shop'}){
    return (
        <div className="logo">
            <Link to={to}>
                {name_logo}
            </Link>
        </div>
    )
}