import React from "react";
import PropTypes from 'prop-types'

class MenuItem extends React.Component {
    render(){
        return <li style={this.props.styles}>{this.props.text}</li>
    } 
}

MenuItem.defaultProps = {
    styles: {
        marginRight: '10px',
    }
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
}

export default MenuItem