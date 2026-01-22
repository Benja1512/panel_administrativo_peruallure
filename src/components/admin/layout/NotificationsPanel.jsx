export default function NotificationsPanel() {
    const notifications = [
        "Nuevo usuario registrado",
        "Rol actualizado",
        "Intento de login fallido",
        "Backup completado"
    ];

    return (
        <div style={{ marginTop: 30 }}>
            <h3>Notificaciones</h3>
            <ul>
                {notifications.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </div>
    );
}
