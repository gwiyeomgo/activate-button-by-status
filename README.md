## activate-button-by-status install

### Installation

`npm install @gwiyeomgo/activate-button-by-status@latest`

`yarn add @gwiyeomgo/activate-button-by-status@latest`

### background

There are times when a button needs to be enabled and disabled in a specific status.
For example, a button should be disabled when it is in a non-cancelable status.
I ended up using nested if statements while actually writing the code.
The length of the code became longer and the code became difficult to understand.
To fix this, the repeated code was made into a component.

### version release

* 0.0.0 (2022-8-15)
   - first upload npm module
   - add currentStatus and activeStatus
    
* 0.1.0 (2022-08-22)
   - add activeStatusWithPermissions and currentPermissions 

### [Example Link](https://github.com/gwiyeomgo/activate-button-by-status/tree/main/examples)

#### version 0.0.0
* If not included in the activeStatus, the button is disabled.
* If you want to use `activeStatus`, please specify the `currentStatus` value
```javascript
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
        </div>
    );
}
```

#### version 0.1.0

* The manager can click the button even when it's complete status
  Employees can only click on the button in registration and accepted status
* The `activeStatusWithPermissions` function is applied first even if the `activeStatus` function is set together
* If you want to use `activeStatusWithPermissions`, please specify the `currentStatus` and `currentPermissions` values

```javascript
<ActivateButtonByStatus
        title={"Cancelled"}
        onClick={() => {
          console.log("You can implement the situation by clicking the button");
        }}
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
```
