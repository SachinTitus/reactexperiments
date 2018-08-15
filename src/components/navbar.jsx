import React from 'react'

const addButtonStyle = {
    margin: '10px'
};

const NavBar = ({totalCounters, onReset, onAdd}) => {
    return (
        <nav className="navbar navbar-light bg-danger">
            <a className="navbar-brand" href="#">Navbar
                <span className="badge badge-pill badge-primary">{totalCounters}</span>
            </a>
            <div><button className="btn btn-primary btn-sm" style={addButtonStyle} onClick={onAdd}>Add</button>
                <button className="btn btn-primary btn-sm" onClick={onReset}>Reset</button></div>

        </nav>
    );
}
// class NavBar extends Component {
//     state = {};
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">Navbar
//                 <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//
//             </nav>
//         );
//     }
//
// }
export default NavBar;