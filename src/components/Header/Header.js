import React from "react";
// import PropTypes from 'prop-types';

class Header extends React.Component {
    render(){
        
        return <header>
            <div>
                {this.props.logo}
                {this.props.nav}
            </div>
        </header>
    }
}

// Header.propTypes = {
//     styles: PropTypes.object.isRequired,
//     logo: PropTypes.object.isRequired,
//     nav: PropTypes.object.isRequired,
// }


export default Header