//Export functions from here.

let key = process.env.REACT_APP_API_KEY;

export function showApi(id) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`
  ).then((res) => res.json());
}

export function searchVideo(searchInput) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${key}&maxResults=20`
  ).then((res) => res.json());
}
