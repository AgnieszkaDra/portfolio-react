import React from "react";
import PropTypes from 'prop-types'
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    renderElements(){
        return (
            this.props.elements.map((element, index) =>
                <MenuItem key={index}text={element.text}/>)
        )
    }
    render(){
        return <ul style={this.props.styles}>{this.renderElements()}</ul>
    }
}

Menu.defaultProps = {
    styles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
}

Menu.propTypes = {
    elements: PropTypes.array.isRequired
}

export default Menu