import React, { useState } from "react";
import { Icon, Card, Typography, Button } from '@equinor/eds-core-react'
import { Banner } from '@equinor/eds-core-react'
import Popup from '../components/popup';
import './pages.css'
import { beat, platform,thumbs_down } from "@equinor/eds-icons"
import GetUserAccess from '../services/maint.useraccess'
Icon.add({ beat, platform,thumbs_down });
declare var renderSurvey: any;

const Info = () => {


  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e:any) => {
    setVisibility(e);
  };

  const popupOpenHandler = (e:any) => {
    setVisibility(e)
  }

  const openPage = (url: string) => {
    window.open(url);
  };


  const appsList = [
    { title: "EPN/MMP - Maintenance PM & CM", description: "", image: "/grane.png", link: "/epn" },
    { title: "EPN - Manage sickleave", description: "", image: "/msl.jpg", link: "/msl" },
    { title: "EPN - Early Phase Field Development", description: "", image: "/EPF_Tile_Image.jpeg", link: "/epf" },
    { title: "FLX - Maintenance PM & CM", description: "", image: "/statfjord.png", link: "/flx" },
    { title: "FLX - Projects", description: "", image: "/projects.png", link: "/project" },
    { title: "FLX - SCM", description: "", image: "/procurement.png", link: "/scm" },
    { title: "FLX - Work Order Preparation", description: "", image: "/woprep.jpg", link: "/wo-preparation" },
    { title: "EPN/FLX - Blue Light", description: "Requires YO900 role in SAP", image: "/BLUE LIGHT.jpeg", link: "/bl" }
    { title: "EPN/FLX - FLOW LCI M5", description: "Requires YO900 role in SAP", image: "/m5.jpg", link: "/m5lci" }
  ].map((element, index) => {
    const style = { gridColumn: "span 1", width: "400px" };

    return (
      <Card style={style} key={index}>
        <Card.Media>
          <img src={element.image}  width="320" height="240"/>
        </Card.Media>
        <Card.Header>
          <Card.HeaderTitle>
            <Typography variant="h5">
              {element.title}
            </Typography>
            <Typography variant="body_short">
              {element.description}
            </Typography>
          </Card.HeaderTitle>

        </Card.Header>
        <Card.Actions>
          
          <Button type="button" onClick={() => openPage(element.link)}>
            Open
            <Icon name="platform"></Icon>
          </Button>
        </Card.Actions>
      
      </Card>
    );

  });




  return (
    <div>

      <br />
      <div className="panelCards">
        {appsList}
      </div>

      

    </div>
  );
}

export default Info
