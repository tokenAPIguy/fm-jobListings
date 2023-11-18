"use strict";

// Fetch data from data.json
async function renderListings() {
  const res = await fetch("./data.json");
  const data = await res.json();

  console.log(data);

  const listingsContainer = document.querySelector(".listings-container");

  data.forEach(
    ({
      id,
      logo,
      company,
      new: isNew,
      featured,
      position,
      postedAt,
      contract,
      location,
      role,
      level,
      languages,
      tools,
    }) => {
      const listing = document.createElement("div");

      listing.innerHTML = `<div class="listing">
          <div class="listing-overview">
            <div class="listing-overview--img">
              <img src="${logo}" alt="${company}" />
            </div>
            <div class="listing-overview--desc">
              <div class="job-intro">
                <div class="job-company">
                  <span><p>${company}</p></span>
                </div>
                <div class="job-new">
                  ${isNew ? "<span>NEW!</span>" : ""}
                </div>
                <div class="job-feat">
                  ${featured ? "<span>FEATURED</span>" : ""}
                </div>
              </div>
              <div class="job-title">
                <span>${position}</span>
              </div>
              <div class="job-meta">
                <div class="job-postdate">
                  <span>${postedAt}</span>
                </div>
                <div class="job-hours">
                  <span>${contract}</span>
                </div>
                <div class="job-location">
                  <span>${location}</span>
                </div>
              </div>
            </div>
            <div class="listing-overview--tags">
              <div class="skill-tag">
                <span>${role}</span>
              </div>
              <div class="skill-tag">
                <span>${level}</span>
              </div>
              ${languages
                .map((language) => {
                  return `<div class="skill-tag">
                  <span>${language}</span>
                </div>`;
                })
                .join("")}
              ${tools
                .map((tool) => {
                  return `<div class="skill-tag">
                  <span>${tool}</span>
                </div>`;
                })
                .join("")}
            </div>
          </div>
        </div>`;
      listingsContainer.appendChild(listing);
    }
  );

  // Handle active state of skill tags
  const skillTag = document.querySelectorAll(".skill-tag");

  skillTag.forEach((tag) => {
    tag.addEventListener("click", () => {
      tag.classList.contains("active")
        ? tag.classList.remove("active")
        : tag.classList.add("active");
    });
  });
}
renderListings();

// todo - add filter functionality to tags
