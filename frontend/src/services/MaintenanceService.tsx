import axios from "axios";
const apiClient = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api/maintenance`,
    headers: {
      "Accept": "*/*",
    },
  });

const getResponse = () => {

    apiClient.get('/work-orders', {params: {
        'api-version': 'v1',
        'filter': 'recently-changed'
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
    .catch(function (error) {
        console.log(error)
    });

}

const MaintenanceService = {
    getResponse
}

export default MaintenanceService