import React from "react";
import { Navigate } from 'react-router-dom';
import { Button } from '@equinor/eds-core-react';
declare var renderSurvey: any;
  
export default function Home() {
    return (
        <div>
          <h2>Welcome to FLOW</h2>
          {renderSurvey("","","landingpage","info")}
        </div>
      );
}