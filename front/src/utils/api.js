import axios from "axios";

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl =
  process.env.REACT_APP_BASE_URL + ":" + backendPortNumber + "/";

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

export { get };
