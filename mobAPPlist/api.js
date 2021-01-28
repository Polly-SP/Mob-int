import Axios from "axios";


export class API {
  static http = Axios.create({
    baseURL: "http://api.openWinerydb.org/",
  });
 
  static getWineries() {
    return API.http.get("Wineries");
  }
 
  static getWinery(id) {
    return API.http.get(`Wineries/${id}`);
  }
}
