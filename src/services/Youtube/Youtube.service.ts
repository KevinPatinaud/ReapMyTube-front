import { config } from "../../Constants";
import { video } from "../../model/video";
import { HttpService } from "../Http/Http.service";

export class YoutubeService {
  httpService = new HttpService();

  async search(search: string): Promise<video[]> {
    const resultAPI = await this.httpService.get(
      config.API_YOUTUBE_SEARCH_URL + "?query=" + search
    );

    const videoAPIresponse = [] as video[];
    if (resultAPI) {
      for (let i = 0; i < resultAPI.data?.items.length; i++) {
        videoAPIresponse.push({
          id: resultAPI.data?.items[i].id.videoId,
          image: resultAPI.data?.items[i].snippet.thumbnails.high.url,
          title: resultAPI.data?.items[i].snippet.title,
        });
      }
    }

    return videoAPIresponse;
  }
}
