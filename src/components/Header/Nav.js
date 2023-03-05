import React from "react";
import PropTypes from 'prop-types';
import Menu from './Menu';


const Nav = props => {
    const vertical = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    }
    return (
       <nav style={vertical}>
            <Menu elements={props.content}></Menu>
       </nav>
    )
}

Nav.propTypes = {
    styles: PropTypes.object,
    content: PropTypes.array.isRequired,
}


export default Nav