import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, removeToken, getUserInfo } from '../utils/auth';
import logo from '../assets/PERUALLURE1.png';
import useInactivityLogout from '../hooks/useInactivityLogout';
import useCrossTabLogout from '../hooks/useCrossTabLogout';
import InactivityWarningModal from './InactivityWarningModal';

const NavbarCliente = () => {
    const navigate = useNavigate();
    const user = getUserInfo();

    // 👤 Modo cliente: no cerrar sesión automáticamente
    const { showWarning, isStrict } = useInactivityLogout(15, 1, 'cliente');
    useCrossTabLogout();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    const handleStayLoggedIn = () => {
        window.dispatchEvent(new Event('mousemove'));
    };

    return (
        <>
            <nav style={styles.nav}>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="Logo PeruAllure" style={styles.logoImg} />
                    <Link to="/" style={styles.brand}>
                        PeruAllure Cliente
                    </Link>
                </div>

                <div style={styles.menu}>
                    {isAuthenticated() ? (
                        <>
                            <span style={styles.userInfo}>
                                👤 {user?.username}
                            </span>

                            <Link to="/mi-cuenta" style={styles.link}>
                                Mi Cuenta
                            </Link>

                            <Link to="/compras" style={styles.link}>
                                Mis Compras
                            </Link>

                            <button onClick={handleLogout} style={styles.button}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={styles.link}>
                                Login
                            </Link>
                            <Link to="/registro" style={styles.link}>
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {showWarning && (
                <InactivityWarningModal
                    onClose={handleStayLoggedIn}
                    secondsLeft={60}
                    strict={isStrict} // 👈 será false para clientes
                />
            )}
        </>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2196f3',
        padding: '10px 20px',
        color: 'white',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    logoImg: {
        height: '32px',
        width: '32px',
        objectFit: 'contain',
    },
    brand: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    menu: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
    button: {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        borderRadius: '4px',
        fontSize: '16px',
    },
    userInfo: {
        color: '#fff',
        fontSize: '14px',
        marginRight: '15px'
    }
};

export default NavbarCliente;
