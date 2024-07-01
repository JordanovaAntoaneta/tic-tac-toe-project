import React, { useState } from "react";

type squareProps = {
    value: '',
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>,
};

function Square(props: squareProps) {

    // const [value, setValue] = useState('');

    return <button className="square" onClick={props.onSquareClick}>{props.value}</button>;
}

export default Square;