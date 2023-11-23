function cleanUpPage() {
  const displayHidden = document.querySelectorAll(
    "#main-content .shopify-section"
  );
  var hiddenElements = Array.from(displayHidden).filter(function (element) {
    var computedStyle = window.getComputedStyle(element);
    return computedStyle.getPropertyValue("display") === "none";
  });
  hiddenElements.forEach(function (hiddenElement) {
    hiddenElement.remove();
  });
}

function addParallaxDiv() {
  const shopifySections = document.querySelectorAll(
    "#main-content .shopify-section"
  );
  shopifySections.forEach((shopifySection) => {
    const parallaxElement = document.createElement("div");
    parallaxElement.classList.add("fp-bg");
    shopifySection.prepend(parallaxElement);
  });
}

cleanUpPage();
addParallaxDiv();
