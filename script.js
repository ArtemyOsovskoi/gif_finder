const img = document.querySelector("img");
const btn = document.getElementById("refresh_btn");
const search = document.getElementById("search_field");
const searchBtn = document.getElementById("search_btn");

const catUrl = `https://api.giphy.com/v1/gifs/translate?api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&s=cats`;

async function getCatData() {
  try {
    const response = await fetch(catUrl);
    const catData = await response.json();
    if (response.ok) {
      img.src = catData.data.images.original.url;
      console.log("Promise resolved");
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}
getCatData();

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&s=${search.value}`,
      { mode: "cors" },
    );
    const data = await response.json();

    if (response.ok) {
      img.src = data.data.images.original.url;
      console.log("Promise resolved");
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}
btn.addEventListener("click", fetchData);

let userInput = search.value;

async function searchGif() {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=7CkGGQkqUHujXAe1i31OgekECUyWWP8O&limit=5`,
      { mode: "cors" },
    );
    const data = await response.json();
    if (response.ok) {
      img.src = data.data[0].images.original.url;
      console.log("Promise resolved");
    } else {
      console.error("Promise resolved but HTTP status failed");
    }
  } catch {
    console.error("Promise rejected");
  }
}

searchBtn.addEventListener("click", searchGif);