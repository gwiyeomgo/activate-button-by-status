## activate-button-by-status install

### background
There are times when a button needs to be enabled and disabled in a specific status.
For example, a button should be disabled when it is in a non-cancelable status.
I ended up using nested if statements while actually writing the code.
The length of the code became longer and the code became difficult to understand.
To fix this, the repeated code was made into a component.


### Example

This button is activated when it is in the `Registered status`.

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
                title={"Button-Title"}
                onClick={() => {
                    console.log("You can implement the situation by clicking the button");
                }}
                style={{color:"#4CAF50"}}
                currentStatus={STATUS.Registered}
                activeStatus={[STATUS.Registered, STATUS.Accepted]}
            />
        </div>
    );
}
```
