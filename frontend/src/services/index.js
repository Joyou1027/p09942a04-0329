import axios from "axios";

const API_HOST =
  process.env.NODE_ENV === "production"
    ? "https://doraeric-test.herokuapp.com"
    : "";

const instance = axios.create({
  baseURL: `${API_HOST}/api`,
  withCredentials: true,
});

export const checkSession = () => {
  return instance
    .get("/csrf")
    .then(({ data, headers }) => {
      const token = headers["x-xsrf-token"];
      console.log(headers)
      instance.defaults.headers.common["X-XSRF-Token"] = token;
      const firstTime = (data && data.firstTime) || false;
      if (firstTime) {
        // check whether the cookie is really set
        return instance.get("/csrf").then(({ data, headers }) => {
          console.log(headers)
          const token = headers["x-xsrf-token"];
          instance.defaults.headers.common["X-XSRF-Token"] = token;
          const firstTime = (data && data.firstTime) || false;
          if (firstTime) {
            // Not set, maybe due to third party cookie policy
            return false;
          } else {
            // set successfully
            return true;
          }
        });
      } else {
        // the session cookie is ok
        return true;
      }
    })
    .then((isSessionSet) => {
      if (!isSessionSet) {
        window.location.href = `${API_HOST}/api/csrf-redirect`;
      }
    })
    .catch((error) => {
      // maybe connection error
      console.error(error);
    });
};

export const createUser = (payload) => {
  checkSession();
  // return instance.post(`/user`, payload);
};

export const getUsers = () => {
  return instance.get("/users");
};

export const patchUser = ({ id, username }) => {
  return checkSession().then(() => {
    return instance.patch(`/users/${id}`, { username });
  });
};

export const getAllUsers = () => {
  return checkSession().then(() => {
    return instance.get("/users");
  });
};
