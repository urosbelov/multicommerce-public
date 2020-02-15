import axios from "axios";

////TESTING
const getStores = async callback => {
  await axios
    .get("http://localhost:4000/api/dev/stores", {
      withCredentials: true
    })
    .then(response => callback(null, response.data));
};

////////PRODUCTION

function login(loginData) {
  return axios.post("http://localhost:4000/auth/v1/users/login", loginData, {
    withCredentials: true,
    validateStatus: status => {
      return status === 200 || status === 400;
    }
  });
}

function register(registerData) {
  return axios.post("http://localhost:4000/api/v1/users", registerData, {
    withCredentials: true,
    validateStatus: status => {
      return status === 201 || status === 400;
    }
  });
}

function getUser() {
  return axios.get("http://localhost:4000/auth/v1/users/logged", {
    withCredentials: true
  });
}

//ORDERS
function createOrder(order) {
  return axios.post("http://localhost:4000/api/v1/orders", order, {
    withCredentials: true,
    validateStatus: status => {
      return status === 201 || status === 400;
    }
  });
}
///GET CONNECTIONS
function getConnections() {
  return axios.get("http://localhost:4000/api/v1/connections", {
    withCredentials: true
  });
}

const getStore = async (id, callback) => {
  await axios
    .get(`http://localhost:4000/api/v1/stores/${id}`, {
      withCredentials: true
    })
    .then(response => callback(null, response.data));
};

const getProduct = async (id, callback) => {
  await axios
    .get(`http://localhost:4000/api/v1/items/${id}`, {
      withCredentials: true
    })
    .then(response => callback(null, response.data));
};

export {
  login,
  register,
  getUser,
  getStores,
  getStore,
  getProduct,
  getConnections,
  createOrder
};
