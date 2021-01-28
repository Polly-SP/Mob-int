import Axios from "axios";

// класс со статическими полями с такими как HTTP (HTTP - клиент, обозначенным для него baseURL, то есть с каким Юрл мы обращаемся ко всем нашим рутам)
export class API {
  static http = Axios.create({
    baseURL: "http://api.openWinerydb.org/",
  });
  //метод getWineries возвращает ПромисГет, то есть будет происходить ГЕТ запрос с такими "Wineries" урлом
  static getWineries() {
    return API.http.get("Wineries");
  }
  //здесь спрашивает только одну винодельню
  static getWinery(id) {
    return API.http.get(`Wineries/${id}`);
  }
}
