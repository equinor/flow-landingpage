import * as axios from "axios";

export default class Api {
    constructor() {
        this.client = null;
    }

    init = () => {
        let headers = {
            Accept: "application/json"
        };
    
    this.client = axios.create({
        baseURL: `http://${window.location.host}`,
        timeout: 31000,
        headers: headers,
    });

    return this.client;
    };

    getUserAccess = () => {
        return this.init().get("/api/maintenance/user?api-version=v1")
    }
}