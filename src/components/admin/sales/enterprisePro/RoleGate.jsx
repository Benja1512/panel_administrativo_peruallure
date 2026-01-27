export default function RoleGate({ role, allow = [], children, fallback = null }) {
    if (!allow.length) return children;
    if (!role) return fallback;
    return allow.includes(role) ? children : fallback;
}
