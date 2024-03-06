class MuteToggleElement extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll(".main-slideshow .mute-toggle").forEach((head) => {
      head.addEventListener("click", (event) => {
        this.muteToggle(event);
      });
    });
  }

  muteToggle(event) {
    event.preventDefault();
    let mute = false;
    const muteIcon = this.querySelector(".mute-icon");
    const unmuteIcon = this.querySelector(".unmute-icon");
    const videos = this.querySelectorAll(
      ".main-slideshow .slideshow__slide-video-bg video"
    );
    if (videos.length > 0) {
      if (videos[0].muted === true) {
        mute = false;
        unmuteIcon.classList.remove("icon-hide");
        muteIcon.classList.add("icon-hide");
      } else {
        mute = true;
        unmuteIcon.classList.add("icon-hide");
        muteIcon.classList.remove("icon-hide");
      }

      videos.forEach((video) => {
        video.muted = mute;
        if (!mute) {
          video.play().catch((error) => {
            console.error("Error playing video:", error);
          });
        }
      });
    }
  }
}

customElements.define("mute-toggle-element", MuteToggleElement);

// view more button for product description
let productContent = document.getElementById("content");
let viewMoreBtn = document.getElementById("viewMoreBtn");
let isExpanded = false;

if (viewMoreBtn)
  viewMoreBtn.addEventListener("click", () => {
    if (isExpanded) {
      productContent.style.maxHeight = "0px";
      viewMoreBtn.textContent = "View More";
    } else {
      productContent.style.maxHeight = "none";
      viewMoreBtn.textContent = "View Less";
    }
    isExpanded = !isExpanded;
  });

// on page load by default first tab selecting
document.addEventListener("DOMContentLoaded", () => {
  const tabHeading = document.querySelectorAll(".tab--heading");
  const tabContent = document.querySelectorAll(".tab-content");
  for (let i = 0; i <= tabContent.length; i++) {
    let exist = false;
    if (tabContent && tabContent[i] && tabContent[i].getAttribute("id") != "") {
      tabContent[i].classList.add("active_content");
      exist = true;
    }
    if (exist) {
      break;
    }
  }
  for (let i = 0; i <= tabHeading.length; i++) {
    let exist = false;
    if (
      tabHeading &&
      tabHeading[i] &&
      tabHeading[i].getAttribute("data-tab") != ""
    ) {
      tabHeading[i].classList.add("is--active");
      exist = true;
    }
    if (exist) {
      break;
    }
  }
});
