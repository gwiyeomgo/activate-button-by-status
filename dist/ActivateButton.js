"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./styles.css");
var isEmpty = function (value) {
    if (Array.isArray(value)) {
        var arr = value;
        return arr.length > 0;
    }
    else {
        return Object.keys(value).length === 0;
    }
};
var isContains = function (key, obj) {
    return obj.hasOwnProperty(key);
};
var ActivateButton = function (_a) {
    var title = _a.title, style = _a.style, onClick = _a.onClick, type = _a.type, activeStatus = _a.activeStatus, currentStatus = _a.currentStatus, currentPermissions = _a.currentPermissions, activeStatusWithPermissions = _a.activeStatusWithPermissions, disabled = _a.disabled, color = _a.color;
    var _b = (0, react_1.useState)(disabled), customDisabled = _b[0], setCustomDisabled = _b[1];
    var ButtonActive = function (ok) { return setCustomDisabled(!ok); };
    var verifyByType = function (type) {
        switch (type) {
            case "status":
                if (activeStatus && activeStatus.length > 0) {
                    return activeStatus.includes(currentStatus);
                }
                else {
                    throw new Error("activeStatus not exsist");
                }
            case "statusWithPermission":
                if (currentPermissions && isEmpty(currentPermissions)) {
                    if (activeStatusWithPermissions &&
                        isEmpty(activeStatusWithPermissions) &&
                        isContains(currentStatus, activeStatusWithPermissions)) {
                        if (isEmpty(activeStatusWithPermissions[currentStatus])) {
                            return currentPermissions.some(function (item) {
                                return item && item !== ""
                                    ? activeStatusWithPermissions[currentStatus].includes(item)
                                    : false;
                            });
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return true;
                    }
                }
                else {
                    throw new Error("currentPermissions not exsist");
                }
        }
    };
    (0, react_1.useEffect)(function () {
        if (disabled) {
            ButtonActive(false);
        }
        else {
            ButtonActive(type && verifyByType(type));
        }
    }, [type]);
    return (react_1.default.createElement("button", { type: "button", className: customDisabled ? "btn btn-disabled ".concat(color) : "btn ".concat(color), style: style, onClick: onClick, "aria-disabled": customDisabled }, title));
};
exports.default = ActivateButton;
//# sourceMappingURL=ActivateButton.js.map