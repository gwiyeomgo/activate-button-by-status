import React, { useEffect, useState } from "react";

const ActiveButtonByStatus = ({
  title,
  style,
  onClick,
  activeStatus,
  currentStatus
}) => {
  const [disabled, setDisabled] = useState(true);

  const ButtonDisabled = ok => setDisabled(!ok);

  useEffect(() => {
    if (activeStatus && currentStatus) {
      ButtonDisabled(activeStatus.includes(currentStatus));
    }
  }, [activeStatus, currentStatus]);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: style,
    onClick: onClick,
    disabled: disabled
  }, title);
};

export default ActiveButtonByStatus;