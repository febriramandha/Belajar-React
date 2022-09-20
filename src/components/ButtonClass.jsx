// import Reactnya !
import React from "react";

// mendeklarasikan sebuah komponen dengan nama ButtonClass
class ButtonClass extends React.Component {
    // cara 1
    // constructor(props){
    //     super(props);
    // }

    // render = menampilkan tampilan HTML
    render() {
        return (
            <button>
        {/* Disini kita kasih confitional renderingnya */}
                {this.props.text ? this.props.text : "Btn Class"}
            </button>
        );
    }
}

// export
// modul.export (common js)

// jangan lupa di-export agar bisa digunakan
// module js
// export defaul
export default ButtonClass;