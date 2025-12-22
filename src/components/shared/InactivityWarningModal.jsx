import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const InactivityWarningModal = ({ onClose, secondsLeft = 60, strict = false }) => {
    const [counter, setCounter] = useState(secondsLeft);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (counter <= 0) {
            if (strict) {
                logout();
                navigate('/login');
            } else {
                onClose();
            }
        }
    }, [counter, onClose, strict, navigate]);

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>⚠️ Inactividad detectada</h2>
                <p>Tu sesión expirará en <strong>{counter}</strong> segundos por inactividad.</p>
                <button style={styles.button} onClick={onClose}>Seguir conectado</button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    modal: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        maxWidth: '400px',
        animation: 'fadeIn 0.4s ease-in-out'
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f33d53',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
    }
};

export default InactivityWarningModal;
