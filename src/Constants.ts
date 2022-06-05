let envVariables =
  process.env.NODE_ENV === "development"
    ? { API_URL: "http://reapmytube.fr:8082" }
    : { API_URL: "http://reapmytube.fr:8082" };

export const config = {
  API_YOUTUBE_SEARCH_URL: `${envVariables.API_URL}/youtube/search`,
  API_DOWNLOAD_START_YOUTUBE_URL: `${envVariables.API_URL}/download/start`,
  API_DOWNLOAD_MEDIA_URL: `${envVariables.API_URL}/download/media/`,
  WEBSOCKET_ENTRY_POINT: `${envVariables.API_URL}/ws`,
};
