import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/" className="text-secondary rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaHome className="me-2"/> Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/Perfil" className="text-secondary rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaRegUser className="me-2"/> Perfil</NavLink>
                </li>
                <li onClick={handleExpand} style={{ cursor: 'pointer' }}>
                    <a className="text-secondary rounded py-2 w-100 d-inline-block px-3">
                    <FaIcons.FaRegIdCard className="me-2"/> Registro de Asistencia
                    </a>
                    {expanded && (
                        <ul>
                            <li>
                                <NavLink to="/Generar" className="text-secondary rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaQrcode className="me-2"/> Generar QR</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Escanear" className="text-secondary rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaQrcode className="me-2"/> Escanear QR</NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to="Config" className="text-secondary rounded py-2 w-100 d-inline-block px-2" exact activeClassName="active"> <FaIcons.FaWrench className="me-2"/> Configuración</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;