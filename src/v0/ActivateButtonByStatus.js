import React, { useEffect, useState } from "react";

const ActivateButtonByStatus = ({
                                    title,
                                    style,
                                    onClick,
                                    activeStatus,
                                    currentStatus,
                                    currentPermissions,
                                    activeStatusWithPermissions
                                }) => {
    const [disabled, setDisabled] = useState(true);
    const ButtonDisabled = (ok) => setDisabled(!ok);

    useEffect(() => {
        let hasPermission = false;
        if (activeStatus && activeStatus.length > 0 && currentStatus) {
            hasPermission = activeStatus.includes(currentStatus);
        }
        if (activeStatusWithPermissions) {
            if (activeStatusWithPermissions.hasOwnProperty(currentStatus)) {
                if (activeStatusWithPermissions[currentStatus].length > 0) {
                    hasPermission = currentPermissions.some((item) =>
                        item && item !== ""
                            ? activeStatusWithPermissions[currentStatus].includes(item)
                            : false
                    );
                } else {
                    hasPermission = false;
                }
            } else {
                hasPermission = true;
            }
        }
        ButtonDisabled(hasPermission);
    }, [
        activeStatus,
        currentStatus,
        currentPermissions,
        activeStatusWithPermissions
    ]);

    return (
        <button type="button" style={style} onClick={onClick} disabled={disabled}>
            {title}
        </button>
    );
};

export default ActivateButtonByStatus;
