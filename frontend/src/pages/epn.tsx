import React, { useState } from "react";
import { Icon, Card, Typography, Button } from '@equinor/eds-core-react'
import CustomDialog from '../components/customdialog'
import MaintenanceService from '../services/MaintenanceService'
import './pages.css'
import { beat, platform } from "@equinor/eds-icons"
Icon.add({ beat, platform });

const EPN = () => {


  const openPage = (url: string) => {
    MaintenanceService.getResponse()
    window.open(url);
  };

  const appsList = [
    { title: "FLX - Maintenance Projets", description: "Blabla", image: "/projects.png", link: "https://db.no" },
    { title: "FLX - Maintenance FV", description: "Blabla", image: "/statfjord.png", link: "https://db.no" },
    { title: "EPN - Maintenance FV", description: "Blabla", image: "/grane.png", link: "https://db.no" }
  ].map((element, index) => {
    const style = { gridColumn: "span 1", width: "350px" };

    return (
      <Card style={style} key={index}>
        <Card.Media>
          <img src={element.image} />
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
      <h2>Welcome to EPN</h2>
      <p>Bla bla bla</p>
      
      <br />
      <div className="panelCards">
        {appsList}
      </div>

    </div>
  );
}

export default EPN