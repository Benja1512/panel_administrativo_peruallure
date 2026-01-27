export const FX = {
    EUR: 1,
    USD: 1.08,
    PEN: 4.05,
};

export function convert(amountEUR, currency) {
    const fx = FX[currency] ?? 1;
    return amountEUR * fx;
}

export function formatMoney(amount, currency = "EUR") {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency }).format(amount);
}
