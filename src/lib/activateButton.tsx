import React, {useEffect, useState} from "react";
import "./styles.css";

// type
//1 .currentStatus with activeStatus  => 'status'
//2. currentStatus + currentPermissions + activeStatusWithPermissions => 'statusWithPermission'
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
    currentStatus: string; //필수
    currentPermissions?: string[];
    activeStatusWithPermissions?: ActiveStatusWithPermissions;
    disabled?: boolean;
    color?: Color
};

const isEmpty = (value: ActiveStatusWithPermissions | string[]): boolean => {
//array 도 object 다..
    if (Array.isArray(value)) {
        //value 는 never type으로 기존 배열을 타입이 지정된 배열에 합해준다
        // const arr :string[] = []
        //arr.concat(value)
        const arr: string[] = value;
        return arr.length > 0;
    } else {
        //TODO ActiveStatusWithPermissions 가 key value 로 이루어진 object 인지 확인 코드 추가
        return Object.keys(value).length === 0;
    }
};
const isContains = (key: string, obj: object) => {
    return obj.hasOwnProperty(key);
};

const ActivateButton = ({
                            title,
                            style,
                            onClick,
                            type,
                            activeStatus,
                            currentStatus,
                            currentPermissions,
                            activeStatusWithPermissions,
                            disabled,
                            color
                        }: ActivateButtonProps) => {
    const [customDisabled, setCustomDisabled] = useState(disabled);
    const ButtonDisabled = (ok: boolean) => setCustomDisabled(!ok);

    const verifyByType = (type: ButtonType): boolean => {
        switch (type) {
            case "status":
                //currentStatus 는 필수
                //activeStatus 배열에 값이 있는지 체크 필요
                if (activeStatus && activeStatus.length > 0) {
                    return activeStatus.includes(currentStatus);
                } else {
                    //TODO 없다면 에러? 그냥 false?
                    throw new Error("No");
                }
            case "statusWithPermission":
                //currentPermissions 값 체크
                if (currentPermissions && isEmpty(currentPermissions)) {
                    //activeStatusWithPermissions 값 체크 (빈 오브젝트 확인 ) + 포함 확인
                    if (
                        activeStatusWithPermissions &&
                        isEmpty(activeStatusWithPermissions) &&
                        isContains(currentStatus, activeStatusWithPermissions)
                    ) {
                        //key(status) 가 존재한다면
                        if (isEmpty(activeStatusWithPermissions[currentStatus])) {
                            return currentPermissions.some((item) =>
                                item && item !== ""
                                    ? activeStatusWithPermissions[currentStatus].includes(item)
                                    : false
                            );
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                } else {
                    //TODO currentPermissions 없다면 에러? 그냥 false?
                    throw new Error("No");
                }
        }
    };
    useEffect(() => {
        ButtonDisabled(type && verifyByType(type));
    }, [type]);

    return (
        <button
            type="button"
            className={customDisabled ? `btn btn-disabled ${color}` : `btn ${color}`}
            style={style}
            onClick={onClick}
            aria-disabled={customDisabled}>
            {title}
        </button>
    );
};

export default ActivateButton;