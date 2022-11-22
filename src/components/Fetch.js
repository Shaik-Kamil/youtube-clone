//Export functions from here.

export function ErrorMessage() {
  return (
    <section role="error message" className="error">
      <p>Something went wrong!</p>
    </section>
  );
}

//Error Message Created. Edit To Be Modal.

let key = process.env.REACT_APP_API_KEY;
export function showApi() {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&q=trending&type=video&part=snippet`
  ).then((res) => res.json());
}

export function searchVideo(searchInput) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${key}`
  ).then((res) => res.json())
}
