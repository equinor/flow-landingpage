import React, {useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar, Button, Tabs } from '@equinor/eds-core-react';
import './navbar.css';
import flowlogo from '/flowlogo.png';

  
const NavBar = () => {
    const [scrolled,setScrolled] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0)
    let navigate = useNavigate();

    const handleChange = (index: number) => {
        console.log(index)
        setActiveTab(index)
        
      }

    function handleClick(path:string) {
        navigate(path);
      }
    
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses=['navbar'];
    
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <TopBar className={navbarClasses.join(" ")}>
            <TopBar.Header>
                <Link to="/"><img className="flowlogo" src={flowlogo} alt="" /> </Link> 
            </TopBar.Header>
            <TopBar.CustomContent>
                <Tabs activeTab={activeTab} onChange={handleChange}>
                    <Tabs.List>
                        <Link to={`/flx`}><Tabs.Tab>FLX</Tabs.Tab></Link>
                        <Link to={`/epn`}><Tabs.Tab>EPN</Tabs.Tab></Link>
                    </Tabs.List>
                </Tabs>
            </TopBar.CustomContent>
        </TopBar>
    );
}

export default NavBar;