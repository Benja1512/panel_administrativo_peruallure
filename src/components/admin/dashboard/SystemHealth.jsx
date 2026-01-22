export default function SystemHealth() {
    const health = [
        { name: "API", status: "ok" },
        { name: "Base de datos", status: "ok" },
        { name: "Backups", status: "warning" },
        { name: "Jobs", status: "ok" }
    ];

    return (
        <div className="system-health">
            <h3>Estado del sistema</h3>
            <ul>
                {health.map((s) => (
                    <li key={s.name} className={`health-${s.status}`}>
                        <span>{s.name}</span>
                        <span>
              {s.status === "ok" && "🟢 OK"}
                            {s.status === "warning" && "🟡 Atención"}
                            {s.status === "error" && "🔴 Error"}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
