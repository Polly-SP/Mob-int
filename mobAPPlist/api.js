import Axios from "axios";


export class API {
  static http = Axios.create({
    baseURL: "http://api.openWinerydb.org/",
  });
  //метод getWineries 
  static getWineries() {
    return API.http.get("Wineries");
  }
  static getWinery(id) {
    return API.http.get(`Wineries/${id}`);
  }
}
