import React from "react";
import Api from "../api/api"

function getUserAccess() {
  const api = new Api();

  const fetchUserAccess = api.getUserAccess();

  return <div className="UserAccess">hello</div>

  
}

export default getUserAccess