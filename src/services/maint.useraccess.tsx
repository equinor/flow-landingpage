import React from "react";

export default class GetUserAccess extends React.Component {
  state = {
    loading: true,
    error: null,
    userAccess: null
  }

  async componentDidMount() {
    const url = "/api/maintenance/user?api-version=v1";
    const reponse = await fetch(url);
    console.log(reponse);
    if(reponse.status === 200) {
      const data = await reponse.json();
      this.setState({userAccess: data.results[0], loading: false});
    } else {
      this.setState({error: true, loading: false});
    }

  }

  render(){
    return(
      <div>
        {this.state.loading || !this.state.userAccess ? <div>Loading...</div> : <div>useraccess</div>}
        
        {this.state.error ? <div>Something went wrong...</div> : <div></div>}
        
      </div>
    );
  }

}


