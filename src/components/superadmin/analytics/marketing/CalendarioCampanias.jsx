// src/components/superadmin/analytics/marketing/CalendarioCampanias.jsx

import React from "react";
import { CalendarDays } from "lucide-react";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/CalendarioCampanias.css";

const CalendarioCampanias = () => {
    return (
        <SectionLayout
            title="📅 Calendario de Campañas"
            description="Visualiza tus campañas de marketing programadas y ejecutadas."
            icon={<CalendarDays size={20} />}
        >
            <div className="contenedor-calendario">
                <p>📌 Aquí irá un calendario interactivo con fechas de campañas, actividades y resultados.</p>
                <p>🛠 Puedes integrar FullCalendar o cualquier librería de calendario más adelante.</p>
            </div>
        </SectionLayout>
    );
};

export default CalendarioCampanias;
