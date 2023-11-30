// tab-switching
class ProductTabs extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll(".tab--heading").forEach((head) => {
      head.addEventListener("click", (event) => {
        this.onChange(event);
      });
    });
  }
  onChange(event) {
    let tabId = event.target.dataset.tab;
    console.log("On Change", tabId);

    this.querySelectorAll(".tab--heading").forEach((tabs) => {
      tabs.classList.remove("is--active");
    });
    this.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active_content");
    });
    event.target.classList.add("is--active");
    const contentTab = this.querySelector(`#${tabId}`);
    contentTab.classList.add("active_content");

    var activeSlide = document
      .querySelector(".active_content .splide div ul li")
      .getAttribute("data-video-url");
    var appendUrl = `url(${activeSlide})`;

    var videoSource = document.querySelector(".slideshow__slide-video-bg");

    if (videoSource.src !== activeSlide)
      videoSource.style.backgroundImage = appendUrl;
    var wrapScroll = document.getElementsByClassName("wrap-scroll");

    for (var item of wrapScroll) {
      item.scrollTop = 0;
    }
  }
}
customElements.define("tab-switch", ProductTabs);

// variant as product script
document.addEventListener("DOMContentLoaded", function () {
  fetchData();
  let relatedProductsContainer = document.querySelector(
    ".related-products__container"
  );
  relatedProductsContainer.addEventListener("click", function () {
    openPopup();
  });
});

async function fetchData() {
  try {
    let productGroupId = document.querySelector(".group-id");
    let groupId = productGroupId.getAttribute("data-group-id");
    let url = `https://api.virgio.com/shop/product/group/${groupId}`;
    let options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = generateProductHTML(data.data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Function to generate HTML for products
function generateProductHTML(products) {
  let html = "";
  let product = document.querySelector(".thb-product-detail");
  let productHandle = product.getAttribute("data-handle");
  products.forEach((product) => {
    const titleParts = product.title.split("|");
    const truncatedTitle = titleParts[0].trim();
    if (productHandle == product.handle) {
      html += `
            <div class="products-container-div">
                <a href="${product.handle}">
                    <img class="product_selected" src="${product.featuredImage.url}" alt="${truncatedTitle}" data-handle="${product.handle}">
                    <div class="product-tittle">${truncatedTitle}</div>
                </a>
            </div>
        `;
    } else {
      html += `
          <div class="products-container-div">
          <a href="${product.handle}">
           <img src="${product.featuredImage.url}" alt="${product.title}" data-handle="${product.handle}">
            <div class="product-tittle">${truncatedTitle}</div>
         </a>
          </div>
        `;
    }
  });

  return html;
}

function openPopup() {
  let popup = document.getElementById("customPopup");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("customPopup");
  popup.style.display = "none";
}
