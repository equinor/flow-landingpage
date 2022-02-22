import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:8000/api/maintenace_dev",
    headers: {
      "Accept": "*/*",
      "Ocp-Apim-Subscription-Key": "e4624c386c344c76a7b9b795739d0462" // use env var
    },
  });

const getResponse = () => {

    apiClient.get('/work-orders-optimized-for-query', {params: {
        ID: 12,
        ID1: 22
        }
    })
    .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);

        return response.status;
    })

}

const MaintenanceService = {
    getResponse
}

export default MaintenanceService