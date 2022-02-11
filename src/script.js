/*
 * https://frontendeval.com/questions/image-carousel
 *
 * Build an auto-playing image carousel
 */
let data = [];
let mainImageContainer = document.getElementById("main-img-container");

$(document).ready(function () {
  $.ajax({
    url: "https://www.reddit.com/r/aww/top/.json?t=all",
    method: "GET",
    success: function (res) {
      data = res.data.children.
      filter(function ({ data }) {
        if (data.post_hint === "image") {
          return data;
        }
      }).
      map(({ data }) => data.url_overridden_by_dest);
      if (data.length > 0) {
        data.forEach(url => {
          let mainImage = document.createElement("img");
          mainImage.setAttribute("src", url);
          mainImageContainer.append(mainImage);
        });
      }
    } });

});