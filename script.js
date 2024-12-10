const img = document.querySelector("img");
const btn = document.getElementById("refresh_btn");
const search = document.getElementById("search_field");
const searchBtn = document.getElementById("search_btn");

fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&s=cats`,
  { mode: "cors" },
)
  .then(function (response) {
    return response.json();
  })

  .then(function (response) { 
    img.src = response.data.images.original.url;
  });


function fetchData() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&s=${search.value}`,
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })

    .then(function (response) { 
      img.src = response.data.images.original.url;
    });
};
//fetchData();
btn.addEventListener("click", fetchData);


let userInput = search.value;


function searchGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&limit=5`, 
    { mode: "cors" },
  )
.then(function (response) {
  return response.json();
})
.then(function (response) {
  //console.log(response);
  img.src = response.data[0].images.original.url;
});
};

searchBtn.addEventListener("click", searchGif);


