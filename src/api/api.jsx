const api_key = "AIzaSyDPFw5r4sdtgUJ-grD7b_w0XoGNG7OsPoY";
const base_url = "https://youtube.googleapis.com/youtube/v3";

export const getPopularVideos = async () => {
  const response = await fetch(
    `${base_url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${api_key}`
  );
  const data = await response.json();
  console.log(data);
  return data.items;
};
