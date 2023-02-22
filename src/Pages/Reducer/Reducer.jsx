import { useReducer } from "react";

function TestRed() {
    function test(stats, action) {
        let array;
        if (action.type == "add") {
            array = [...stats];
            array.push(action.rand);
            return array;
        } else if (action.type == "del") {
            array = [...stats];
            array.pop();
            return array;
        } else if (action.type == "clear") {
            array = [];
            return array;
        }
    }
    const [state, dispatch] = useReducer(test, []);

    const Add = () => {
        dispatch({
            type: "add",
            rand: Math.floor(Math.random() * 100),
        });
    };
    const Remove = () => {
        dispatch({
            type: "del",
        });
    };
    const Clear = () => {
        dispatch({
            type: "clear",
        });
    };

    

    return (
        <>
            {state.length == 0 && "Empty"}
            <h1>{state.join(" * ")}</h1>
            <button onClick={Add}>Add</button>
            <button onClick={Remove}>Delete</button>
            <button onClick={Clear}>Clear</button>
        </>
    );
}

export default TestRed;
