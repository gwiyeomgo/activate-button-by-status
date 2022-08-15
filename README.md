### active button by status 

### background
There are times when a button needs to be enabled and disabled in a specific state.
For example, a button should be disabled when it is in a non-cancelable state.
I ended up using nested if statements while actually writing the code.
The length of the code became longer and the code became difficult to understand.
To fix this, the repeated code was made into a component.

특정 상태에서 버튼을 활성화 및 비활성화해야 하는 경우가 있습니다.
예를 들어 버튼은 취소할 수 없는 상태일 때 비활성화되어야 합니다.
실제로 코드를 작성하는 동안 중첩된 if 문을 사용하게 되었습니다.
코드의 길이가 길어져 코드를 이해하기 어려워졌습니다.
이를 수정하기 위해 반복되는 코드를 컴포넌트로 만들었습니다.


### Example

This button is activated when it is in the `Registered status`.

```javascript
import ActiveButtonByStatus from "@gwiyeomgo/active-button-by-status";

const STATUS = {
    Completed: "Completed",
    Cancelled: "Cancelled",
    Registered: "Registered",
    Accepted: "Accepted"
};

export default function App() {
    return (
        <div className="App">
            <ActiveButtonByStatus
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
```"# active-button-by-status" 
