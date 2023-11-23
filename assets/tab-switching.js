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

    // let videoSource = document.querySelector(".slider-video");
    // var currentVideoSrc = videoSource.src;
    // var dynamicVideoSrc = document
    //   .querySelector(".active_content .splide div ul li")
    //   .getAttribute("data-video-url");

    // if (currentVideoSrc !== dynamicVideoSrc)
    //   videoSource.src = document
    //     .querySelector(".active_content .splide div ul li")
    //     .getAttribute("data-video-url");
    // videoSource.classList.add("is-active");

    var wrapScroll = document.getElementsByClassName("wrap-scroll");

    for (var item of wrapScroll) {
      item.scrollTop = 0;
    }
  }
}
customElements.define("tab-switch", ProductTabs);
