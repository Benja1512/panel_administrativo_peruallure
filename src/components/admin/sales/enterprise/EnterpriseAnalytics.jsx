import ForecastIA from "./ForecastIA";
import AlertasInteligentes from "./AlertasInteligentes";
import MargenFinanciero from "./MargenFinanciero";
import CohortesClientes from "./CohortesClientes";

import "../../../../styles/admin/sales/enterprise.css";

export default function EnterpriseAnalytics({ ventas }) {
    return (
        <section className="enterprise-section">

            <h2 className="enterprise-title">
                📈 Análisis Avanzado (Enterprise)
            </h2>

            <div className="enterprise-grid">
                <ForecastIA ventas={ventas} />
                <AlertasInteligentes ventas={ventas} />
                <MargenFinanciero ventas={ventas} />
                <CohortesClientes ventas={ventas} />
            </div>

        </section>
    );
}
