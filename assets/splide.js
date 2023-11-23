var scrollW = document.getElementsByClassName("wrap-scroll");
var scrollUl = document.getElementsByClassName("ul-scroll");

var itemsScrolled,
  itemsMax,
  cloned = false;

var listOpts = [];

function scrollWrap(i) {
  itemsScrolled = Math.ceil(
    (scrollW[i].scrollTop + listOpts[i].itemHeight / 2) / listOpts[i].itemHeight
  );

  if (scrollW[i].scrollTop < 1) {
    itemsScrolled = 1;
  }

  console.log("itemsScrolled", itemsScrolled);
  listOpts[i].items.forEach(function (ele, i) {
    if (itemsScrolled === i + 1) {
      ele.classList.add("active");
    } else {
      ele.classList.remove("active");
    }
  });

  if (itemsScrolled <= listOpts[i].items.length) {
    var activeSlide =
      listOpts[i].items[itemsScrolled - 1].getAttribute("data-video-url");
    var appendUrl = `url(${activeSlide})`;

    var videoSource = document.querySelector(".slideshow__slide-video-bg");

    if (videoSource.src !== activeSlide)
      videoSource.style.backgroundImage = appendUrl;
  }
  if (itemsScrolled > listOpts[i].items.length) {
    // for (_x = 0; _x <= itemsMax - 1; _x++) {
    //   if (window.CP.shouldStopExecution(1)) {
    //     break;
    //   }
    //   var node = listOpts[i].items[_x];
    //   if (!cloned) {
    //     node = listOpts[i].items[_x].cloneNode(true);
    //   }
    //   scrollUl[0].appendChild(node);
    // }
    // initItems(cloned);
    cloned = true;
    itemsScrolled = 1;
    window.CP.exitedLoop(1);
  }
}
function initItems(i) {
  listOpts.push({
    itemCount: null,
    itemHeight: null,
    items: [],
  });
  listOpts[i].items = [].slice.call(scrollUl[i].querySelectorAll("li"));
  listOpts[i].itemHeight = listOpts[0].items[0].clientHeight - 20;
  listOpts[i].itemCount = listOpts[i].items.length;
  listOpts[i].items[0].classList.add("active");
  if (!itemsMax) {
    itemsMax = listOpts[i].itemCount;
  }
  // if (scrollSmooth) {
  //   var seamLessScrollPoint = (itemsMax - 3) * listOpts.itemHeight;
  //   scrollW[0].scrollTop = seamLessScrollPoint;
  // }
}
document.addEventListener("DOMContentLoaded", function (event) {
  for (let i = 0; i < scrollW.length; i++) {
    initItems(i);
    scrollW[i].onscroll = () => scrollWrap(i);
  }
});
