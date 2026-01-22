const PermissionDiff = ({
                            permissions,
                            beforeRoleIds,
                            afterRoleIds,
                            overrideUserId,
                            beforeOverride,
                            afterOverride,
                        }) => {
    const beforeRole = new Set(beforeRoleIds || []);
    const afterRole = new Set(afterRoleIds || []);

    const addedToRole = (afterRoleIds || []).filter((id) => !beforeRole.has(id));
    const removedFromRole = (beforeRoleIds || []).filter((id) => !afterRole.has(id));

    const nameOf = (id) => permissions.find((p) => p.id === id)?.name || id;

    const ovAddAdded = (afterOverride?.add || []).filter((id) => !(beforeOverride?.add || []).includes(id));
    const ovAddRemoved = (beforeOverride?.add || []).filter((id) => !(afterOverride?.add || []).includes(id));

    const ovRemAdded = (afterOverride?.remove || []).filter((id) => !(beforeOverride?.remove || []).includes(id));
    const ovRemRemoved = (beforeOverride?.remove || []).filter((id) => !(afterOverride?.remove || []).includes(id));

    const hasRoleDiff = addedToRole.length || removedFromRole.length;
    const hasOvDiff = overrideUserId && (ovAddAdded.length || ovAddRemoved.length || ovRemAdded.length || ovRemRemoved.length);

    if (!hasRoleDiff && !hasOvDiff) return null;

    return (
        <div className="ap-card">
            <label className="ap-label">🧠 Diff antes / después</label>

            {hasRoleDiff && (
                <div className="ap-diff-block">
                    <div className="ap-diff-title">Cambios en el rol</div>

                    <div className="ap-diff-row">
                        <div className="ap-diff-col">
                            <div className="ap-diff-sub">Añadidos</div>
                            {addedToRole.length ? (
                                <ul className="ap-diff-list">
                                    {addedToRole.map((id) => <li key={id}>+ {nameOf(id)}</li>)}
                                </ul>
                            ) : (
                                <div className="ap-muted">Sin cambios</div>
                            )}
                        </div>

                        <div className="ap-diff-col">
                            <div className="ap-diff-sub">Removidos</div>
                            {removedFromRole.length ? (
                                <ul className="ap-diff-list">
                                    {removedFromRole.map((id) => <li key={id}>- {nameOf(id)}</li>)}
                                </ul>
                            ) : (
                                <div className="ap-muted">Sin cambios</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {hasOvDiff && (
                <div className="ap-diff-block">
                    <div className="ap-diff-title">Cambios en override (usuario)</div>

                    <div className="ap-diff-row">
                        <div className="ap-diff-col">
                            <div className="ap-diff-sub">Add (usuario)</div>
                            {ovAddAdded.length || ovAddRemoved.length ? (
                                <ul className="ap-diff-list">
                                    {ovAddAdded.map((id) => <li key={`a+${id}`}>+ Add {nameOf(id)}</li>)}
                                    {ovAddRemoved.map((id) => <li key={`a-${id}`}>- Add {nameOf(id)}</li>)}
                                </ul>
                            ) : (
                                <div className="ap-muted">Sin cambios</div>
                            )}
                        </div>

                        <div className="ap-diff-col">
                            <div className="ap-diff-sub">Remove (usuario)</div>
                            {ovRemAdded.length || ovRemRemoved.length ? (
                                <ul className="ap-diff-list">
                                    {ovRemAdded.map((id) => <li key={`r+${id}`}>+ Remove {nameOf(id)}</li>)}
                                    {ovRemRemoved.map((id) => <li key={`r-${id}`}>- Remove {nameOf(id)}</li>)}
                                </ul>
                            ) : (
                                <div className="ap-muted">Sin cambios</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PermissionDiff;
