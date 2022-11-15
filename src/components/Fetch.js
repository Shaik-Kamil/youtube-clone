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
    // `https://www.googleapis.com/youtube/v3/search?key=${key}&q=arianegrande&type=video&part=snippet`
    // `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=25&key=${key}`
    `https://www.googleapis.com/youtube/v3/search?key=${key}&q=Mostpopular&type=video&part=snippet`
  ).then((res) => res.json());
}
