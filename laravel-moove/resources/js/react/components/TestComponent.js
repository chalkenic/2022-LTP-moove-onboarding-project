import ReactDOM from "react-dom"
import React from "react";

const TestComponent = () => {
    return (
        <div>TestComponent</div>
    )
}

if (document.getElementById('TestComponent')) {
    ReactDOM.render(<TestComponent />, document.getElementById('TestComponent'));
}

export default TestComponent