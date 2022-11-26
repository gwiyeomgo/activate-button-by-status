import React from "react";
type ButtonType = "status" | "statusWithPermission";
type ActiveStatusWithPermissions = {
    [key: string]: string[];
};
type ActivateButtonProps = {
    title: string;
    style?: object;
    type: ButtonType;
    onClick?: React.MouseEventHandler<HTMLElement>;
    activeStatus?: string[];
    currentStatus: string;
    currentPermissions?: string[];
    activeStatusWithPermissions?: ActiveStatusWithPermissions;
};
declare const ActivateButton: ({ title, style, onClick, type, activeStatus, currentStatus, currentPermissions, activeStatusWithPermissions }: ActivateButtonProps) => JSX.Element;
export default ActivateButton;
