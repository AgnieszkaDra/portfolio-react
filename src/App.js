import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Header/Nav';
import Logo from './components/Header/Logo';
import { navContent } from './components/Data';
import styles from './components/Styles/Styles';

export const App = () => {
  return (
    <div style={styles.container2}>
      <Header style={styles.header} nav={<Nav content={navContent}></Nav>} logo={<Logo text="Logo"></Logo>}/>
      <Main style={styles.main} />
    </div>
  )
}

export default App

