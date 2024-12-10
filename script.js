const img = document.querySelector("img");
const btn = document.getElementById("refresh_btn");

function fetchData() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&s=cats",
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