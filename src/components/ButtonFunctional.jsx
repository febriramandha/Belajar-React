// import si React
import React from "react";

// disini kita akan bikin si button menggunakan cara "function"
// const ButtonFunctional = (props) => {
//     // secara otomatis sudah akan memanggil si "Render"
//     return <button>{props.text}</button>

// }

// Cara Kedua
// bisa pakai js dong??
// destructuring
// const ButtonFunctional = (props) => {
//     const {text} = props;
//     return <button>{text}</button>
// }

// Cara ketiga
// const ButtonFunctional = ({text}) => {
//     return <button>{text}</button>
// }

const ButtonFunctional = ({text}) => {
    // Conditional Rendering
    // Apabila props text tidak ada, maka kita akan berikan tulisan "BUtton Functional"

    // Gunakan Ternary Operator
    return <button>{text ? text : 'Btn Functional'}</button>
}

// supaya bisa dipakai ditempat lain
export default ButtonFunctional;