"use strict";

// Fetch data from data.json
async function renderListings() {
  const res = await fetch("./data.json");
  const data = await res.json();

  console.log(data);
}
renderListings();
