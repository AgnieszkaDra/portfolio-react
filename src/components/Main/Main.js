import React from "react";
import Header from "../Header/Header";
import Nav from "../Header/Nav";
import Logo from "../Header/Logo";
import { mainNavContent} from "../Data";

class Main extends React.Component {
    render(){
        return <header>
                <Header  nav={<Nav content={mainNavContent}></Nav>} logo={<Logo text="My latest Work"></Logo>}/>
            </header>
    }
}

export default Main