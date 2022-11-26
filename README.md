## activate-button-by-status install

### Installation
`npm install @gwiyeomgo/activate-button-by-status@latest`
`yarn add @gwiyeomgo/activate-button-by-status@latest`

### background
If the button is disabled, a specific status value is required.

For example,
There is a button to modify the data.

For example,
There is a button to modify the data.
This button should be disabled if the data is in the Cancel state.


I actually ended up using nested if statements while writing the code.
The length of the code became longer and the code became difficult to understand.
To fix this, the repeated code was made into a component.

### version release
### [Example Link](https://codesandbox.io/s/activatebutton-kr7yhh?file=/public/index.html:0-1544)

* 0.0.0 (2022-8-15)
   - first upload npm module
   - add currentStatus and activeStatus
    
* 0.1.0 (2022-08-22)
   - add activeStatusWithPermissions and currentPermissions 

* 0.2.0 (2022-11-26)
   - add typescript
   - refactoring
    
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
#### version 0.2.0
* add typescript 
```
    <ActivateButtonByStatus
                title={"Cancelled Button(disabled)"} //required
                type={"status"} //required
                currentStatus={STATUS.Completed} //required
      ...
```
*  Add required type 
  * title : string
  * currentStatus  : string  
  * type  : string
      * status  :`If you specify type as 'status', please specify 'currentStatus' and 'activeStatus' together`     
      * statusWithPermission  :`If you specify type as 'statusWithPermission',
        please specify 'currentStatus' ,'currentPermissions' and 'activeStatusWithPermissions' together`
