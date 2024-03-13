const pincodeInput = document.querySelector(".pin-input");
const checkButton = document.querySelector(".pin-check-button");
const alertMessage = document.querySelector(".alert_message");
const productStyleId = document.querySelector('.style-id');
const styleId = productStyleId.getAttribute('data-style-id');
const urlLocation = "https://api.damocles.co.in/shop/delivery/eta/";
checkButton.addEventListener("click", () => {
  let pincode = pincodeInput.value.trim();
  if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
    alertMessage.textContent = "please enter valid pin-code";
    alertMessage.classList.add("red");
    return;
  }
 async function fetchData() {
  try {
    let url = `${urlLocation}${pincode}?styleId=${styleId}`;
    let options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    alertMessage.textContent = data.data.estimatedDelivery;
    alertMessage.classList.remove("red");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


  fetchData();
});
