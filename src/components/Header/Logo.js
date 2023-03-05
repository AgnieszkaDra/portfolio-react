import React from "react";
import PropTypes from 'prop-types';

class Logo extends React.Component {
    render() {
        return <h1 style={this.props.heading}>{this.props.text}</h1>
    }
}

Logo.propTypes = {
    text: PropTypes.string.isRequired,
}

Logo.defaultProps = {
    heading: {
        fontSize: '20px', 
        marginLeft: '15px'}}

export default Logo