import styles from './MenuLink.module.css';
import { Link, useLocation, NavLink } from 'react-router-dom'

export default function MenuLink({ children, to }) {

    //const localizacao = useLocation();

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
       
      /*   <Link className={`
            ${styles.link}
            ${localizacao.pathname === to? styles.linkDestacado : "" }
            `} to={to}>  
            {children}         
        </Link> */
    )
}

