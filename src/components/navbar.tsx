import React, {useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar, Button, Tabs } from '@equinor/eds-core-react';
import { Sparklines, SparklinesBars, SparklinesLine  } from 'react-sparklines';
import './navbar.css';

  
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
                <Link to="/"><img className="flowlogo" src="/flowlogo.png" alt="" /> </Link> 
            </TopBar.Header>
            <TopBar.Actions>
            <Button type="button" onClick={() => openPage("https://equinor.service-now.com/selfservice?id=sc_cat_item&table=sc_cat_item&sys_id=07b538e11b6f2190cb5add72b24bcb8e")}>Report error/improvement</Button>
            &nbsp;              
            <Button type="button" onClick={() => openPage("https://web.yammer.com/main/org/statoil.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDk2OTkwODgzODQifQ/all")}>Yammer page</Button>
            &nbsp;
              <Button type="button" onClick={() => openPage("https://statoilsrm.sharepoint.com/:f:/r/sites/NWOW-iBPM/Shared%20Documents/%C3%85pent%20innhold%20til%20nettside%20og%20deling%20internt?csf=1&web=1&e=Nngqnj")}>Documentation</Button>
            </TopBar.Actions>
            <TopBar.CustomContent>

            </TopBar.CustomContent>
        </TopBar>
    );
}

export default NavBar;