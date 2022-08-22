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
            <ActivateButtonByStatus
                title={"Cancelled"}
                onClick={() => {
                    console.log("You can implement the situation by clicking the button");
                }}
                style={{ backgroundColor: "white" }}
                currentStatus={STATUS.Completed}
                activeStatus={["Registered", "Accepted"]}
            />
            <ActivateButtonByStatus
                title={"Cancelled"}
                onClick={() => {
                    console.log("You can implement the situation by clicking the button");
                }}
                style={{ backgroundColor: "white" }}
                currentStatus={STATUS.Completed}
                // activeStatus={["Registered", "Accepted"]}
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
