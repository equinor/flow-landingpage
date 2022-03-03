import axios from "axios";

const apiClient = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api/maintenance`,
    headers: {
      "Accept": "*/*",
    },
  });

const getResponse = () => {
    // &keywords-not=&status-all-of=&
    apiClient.get('/work-orders', {params: {
        'api-version': 'v1',
        'plant-id': 1100,
        'include-work-order-text': true,
        'changed-since-datetime': '2022-02-23T00:00:00Z',
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