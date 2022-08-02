import React, {useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar, Button, Tabs } from '@equinor/eds-core-react';
import { Sparklines, SparklinesBars, SparklinesLine  } from 'react-sparklines';
import './navbar.css';
import flowlogo from './flowlogo.png';

  
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

      const openPage = (url: string) => {
        window.open(url);
      };
    
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
            <TopBar.Actions>
              <Button type="button" onClick={() => openPage("https://web.yammer.com/main/org/statoil.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDk2OTkwODgzODQifQ/all")}>Release notes</Button>
       
              &nbsp;&nbsp;
              <Sparklines data={[1,1,0,0,0,1,1,1,1,1,0]} width={100} height={100} margin={0} min={0} max={1}>
                <SparklinesLine style={{ stroke: "white", strokeWidth: "1", fill: "red" }}  />
              </Sparklines>
            </TopBar.Actions>
            <TopBar.CustomContent>
               SAP Roles
                { ' ' }
                 
            </TopBar.CustomContent>
        </TopBar>
    );
}

export default NavBar;