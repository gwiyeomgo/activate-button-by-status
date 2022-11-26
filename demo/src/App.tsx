import React from "react";
import ActivateButton from "@gwiyeomgo/activate-button-by-status";

const STATUS = {
    Completed: "Completed",
    Cancelled: "Cancelled",
    Registered: "Registered",
    Accepted: "Accepted"
};

export default function App() {
    return (
        <div className="App">
            {/* currentStatus is disabled because it is not included in activeStatus */}
            <ActivateButton
                title={"Cancelled Button(disabled)"}
                type={"status"}
                onClick={() => {
                    alert("You can implement the situation by clicking the button");
                }}
                style={{ backgroundColor: "pink" }}
                currentStatus={STATUS.Registered}
                activeStatus={["Registered", "Accepted"]}
            />
            {/*Users with manager Permission can cancel in the Completed status.*/}
            <ActivateButton
                title={"Cancelled Button"}
                onClick={() => {
                    alert("You can implement the situation by clicking the button");
                }}
                type={"statusWithPermission"}
                style={{ backgroundColor: "white" }}
                currentStatus={STATUS.Completed}
                currentPermissions={["Manager"]}
                activeStatusWithPermissions={{
                    Completed: ["Manager"],
                    Cancelled: [],
                    Registered: ["Employee", "Manager"],
                    Accepted: ["Employee", "Manager"]
                }}
            />
        </div>
    );
}


