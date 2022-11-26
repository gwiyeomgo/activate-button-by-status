
 > activate-button-by-status install
* `npm install @gwiyeomgo/activate-button-by-status@latest`
* `yarn add @gwiyeomgo/activate-button-by-status@latest`
---
> background

 * If the button is disabled, a specific status value is required.
 * For example, There is a button to modify the data.
 * This button should be disabled if the data is in the Cancel state.
 * I actually ended up using nested if statements while writing the code.
The length of the code became longer, and the code became difficult to understand.
To fix this, the repeated code was made into a component.
---
> version release

* 0.0.0 (2022-8-15)
   - first upload npm module
   - add currentStatus and activeStatus
    
* 0.1.0 (2022-08-22)
   - add activeStatusWithPermissions and currentPermissions 

* 0.2.0 (2022-11-26)
   - add typescript
   - refactoring
    
> `version 0.0.0`

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


> `version 0.1.0`

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

>  `version 0.2.0`

* Add typescript 
```
    <ActivateButtonByStatus
                title={"Cancelled Button(disabled)"} //required
                type={"status"} //required
                color={"danger"} //  "danger" | "primary" | "success"
                currentStatus={STATUS.Completed} //required
      ...
```
* Add required type 
  * title : string
  * currentStatus  : string  
  * type  : string
      * status  :if you specify type as 'status', please specify 'currentStatus' and 'activeStatus' together     
      * statusWithPermission  :if you specify type as 'statusWithPermission',
        please specify 'currentStatus' ,'currentPermissions' and 'activeStatusWithPermissions' together 
 * Add css
    * color :  "danger" , "primary" , "success"
    * html button => apply CSS to change to the button to look intuitive

###  [Example Link](https://codesandbox.io/s/activatebutton-demo-kr7yhh?file=/src/App.tsx)
![active-buttons](https://user-images.githubusercontent.com/77624394/204097005-8aade393-4a6b-488f-9634-450c7190e8b8.JPG)