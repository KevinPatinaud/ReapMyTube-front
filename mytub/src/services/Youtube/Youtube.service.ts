import { config } from "../../Constants";
import { video } from "../../model/video";
import { HttpService } from "../Http/Http.service";

export class YoutubeService
{
    httpService = new HttpService();

    async search(search : string) : Promise<video[]>
    {
        return await this.httpService.get(config.API_YOUTUBE_SEARCH_URL + "?query=" + search).then((res) => {
            let videoAPIresponse = [] as video[];
            console.log(res.data);
            for (let i = 0; i < res.data?.items.length; i++) {
                videoAPIresponse.push({
                    id: res.data?.items[i].id.videoId,
                    image: res.data?.items[i].snippet.thumbnails.high.url,
                    title: res.data?.items[i].snippet.title,
                });
            }
            
            return videoAPIresponse;
        });
    }
}