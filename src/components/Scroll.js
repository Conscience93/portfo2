import React from "react";

// Creating scrollable component
// every props has children - component that wraps around component
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '2px solid black', height: '800px' }}>
            { props.children }
        </div>
    )
};

export default Scroll;