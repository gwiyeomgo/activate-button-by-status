import React from "react";
import "./styles.css";
type ButtonType = "status" | "statusWithPermission";
type Color = "danger" | "primary" | "success";
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
    disabled?: boolean;
    color?: Color;
};
declare const ActivateButton: ({ title, style, onClick, type, activeStatus, currentStatus, currentPermissions, activeStatusWithPermissions, disabled, color }: ActivateButtonProps) => JSX.Element;
export default ActivateButton;
