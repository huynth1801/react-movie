const configApi = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "646c9e2eba75ca9eb822c1de3c673f3e",
  orignalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default configApi;
