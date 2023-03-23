import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    "Content-type": "application/json",
  },
});

class DataService {
  getAll() {
    console.log(' DataService getAll() http.get("/tutorials"');
    return http.get("/tutorials");
  }

  get(id) {
    console.log("DataService get(id) http.get(`/tutorials/${id}`)'", id);
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    console.log('DataService create(data)  http.post("/tutorials")', data);
    return http.post("/tutorials", data);
  }

  update(id, data) {
    console.log(
      "DataService update(id, data) http.put(`/tutorials/${id}`)",
      id,
      data
    );
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    console.log("DataService delete(id) http.delete(`/tutorials/${id}`)", id);
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    console.log("DataService deleteAll()  http.delete(`/tutorials`)");
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    console.log(
      "DataService findByTitle(title) http.get(`/tutorials?title=${title}`)",
      title
    );
    return http.get(`/tutorials?title=${title}`);
  }

  // @note hive data service
  getAllHive() {
    console.log(' DataService getAllHive() http.get("/hive"');
    return http.get("/hive");
  }

  getHive(id) {
    console.log("DataService getHive(id) http.get(`/hive/${id}`)'", id);
    return http.get(`/hive/${id}`);
  }

  createHive(data) {
    console.log(
      'DataService createHive(data)  http.post("/hive", data) data=',
      data
    );
    return http.post("/hive", data);
  }

  updateHive(id, data) {
    console.log(
      "DataService updateHive(id, data) http.put(`/hive/${id}`, data)",
      id,
      data
    );
    return http.put(`/hive/${id}`, data);
  }

  deleteHive(id) {
    console.log("DataService deleteHive(id) http.delete(`/hive/${id}`)", id);
    return http.delete(`/hive/${id}`);
  }

  deleteAllHive() {
    console.log("DataService deleteAllHive()  http.delete(`/hive`)");
    return http.delete(`/hive`);
  }

  findByHiveName(hiveName) {
    console.log(
      "DataService findByHiveName(hiveName) http.get(`/hive?hiveName=${findByHiveName}`);)",
      hiveName
    );
    return http.get(`/hive?hiveName=${findByHiveName}`);
  }

  // @note user data service
  getAllUser() {
    console.log(' DataService getAllUser() http.get("/user"');
    return http.get("/user");
  }

  getUser(id) {
    console.log("DataService getUser(id) http.get(`/user/${id}`)'", id);
    return http.get(`/user/${id}`);
  }

  createUser(data) {
    console.log(
      'DataService createUser(data)  http.post("/user", data) data=',
      data
    );
    return http.post("/user", data);
  }

  updateUser(id, data) {
    console.log(
      "DataService updateUser(id, data) http.put(`/user/${id}`, data)",
      id,
      data
    );
    return http.put(`/user/${id}`, data);
  }

  deleteUser(id) {
    console.log("DataService deleteUser(id) http.delete(`/user/${id}`)", id);
    return http.delete(`/user/${id}`);
  }

  deleteAllUser() {
    console.log("DataService deleteAllUser()  http.delete(`/user`)");
    return http.delete(`/user`);
  }

  findByUserName(userName) {
    console.log(
      "DataService findByUserName(userName) http.get(`/hive?userName=${findByUserName}`);)",
      userName
    );
    return http.get(`/user?userName=${findByUserName}`);
  }
}

export default new DataService();
