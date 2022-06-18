import axios from "axios";

export class HttpService {
  async get(url: string) {
    return await axios.get(url);
  }
}
