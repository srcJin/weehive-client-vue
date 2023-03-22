import axios from "axios";

const http = axios.create({
  baseURL: "https://weehive-server.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

class DataService {
  getAll() {
    console.log(' DataService getAll() http.get("/tutorials"')
    return http.get("/tutorials");
  }

  get(id) {
    console.log("DataService get(id) http.get(`/tutorials/${id}`)'", id)
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    console.log('DataService create(data)  http.post("/tutorials", data)')
    return http.post("/tutorials", data);
  }

  update(id, data) {
    console.log('DataService update(id, data) http.put(`/tutorials/${id}`, data)',id,data)
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    console.log('DataService delete(id) http.delete(`/tutorials/${id}`)',id)
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    console.log('DataService deleteAll()  http.delete(`/tutorials`)');
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    console.log('DataService findByTitle(title) http.get(`/tutorials?title=${title}`)',title)
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new DataService();