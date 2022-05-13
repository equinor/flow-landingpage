import React, { useState } from "react";
import { Icon, Card, Typography, Button } from '@equinor/eds-core-react'
import Popup from '../components/popup';
import './pages.css'
import { beat, platform } from "@equinor/eds-icons"
Icon.add({ beat, platform });

const Info = () => {

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e:any) => {
    setVisibility(e);
  };

  const openPage = (url: string) => {
    window.open(url);
  };

  const appsList = [
    { title: "EPN - Maintenance FV", description: "", image: "/grane.png", link: "https://flow.equinor.com/epn" },
    { title: "FLX - Maintenance FV", description: "", image: "/statfjord.png", link: "https://flow.equinor.com/flx" },
    { title: "FLX - Projects", description: "", image: "/projects.png", link: "https://flow.equinor.com/project" },
    { title: "FLX - Procurement", description: "", image: "/procurement.png", link: "https://flow.equinor.com/procurement" }
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
          <Button type="button" color="secondary" onClick={(e) => setVisibility(!visibility)}>
            Test access
            <Icon name="beat"></Icon>
          </Button>
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
      <h2>FLOW</h2>
      <p></p>
      <br />
      <div className="panelCards">
        {appsList}
      </div>
      <Popup
        onClose={popupCloseHandler}
        show={visibility}
        title="Testing access">
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </Popup>

    </div>
  );
}

export default Info