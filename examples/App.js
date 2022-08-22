import React from "react";
import ActivateButtonByStatus from "@gwiyeomgo/activate-button-by-status";


const STATUS = {
    Completed: "Completed",
    Cancelled: "Cancelled",
    Registered: "Registered",
    Accepted: "Accepted"
};

export default function App() {
    return (
        <div className="App">
            {/* currentStatus is disabled because it is not included in activeStatus */ }
            <ActivateButtonByStatus
                title={"Cancelled Button(disabled)"}
                onClick={() => {
                    alert("You can implement the situation by clicking the button");
                }}
                style={{backgroundColor: "pink"}}
                currentStatus={STATUS.Completed}
                activeStatus={["Registered", "Accepted"]}
            />
            {/*Users with manager Permission can cancel in the Completed status.*/}
            <ActivateButtonByStatus
                title={"Cancelled Button"}
                onClick={() => {
                    alert("You can implement the situation by clicking the button");
                }}
                style={{backgroundColor: "white"}}
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
