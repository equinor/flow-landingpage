import React, {useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar, Button } from '@equinor/eds-core-react';
import './navbar.css';
import flowlogo from '/flowlogo.png';

  
const NavBar = () => {
    const [scrolled,setScrolled]=React.useState(false);
    let navigate = useNavigate();

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
            <TopBar.CustomContent>
                <Button type="button" onClick={() => openPage("https://web.yammer.com/main/org/statoil.com/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDk2OTkwODgzODQifQ/all")}>Release notes</Button>
                { ' ' }
                 
            </TopBar.CustomContent>
        </TopBar>
    );
}

export default NavBar;