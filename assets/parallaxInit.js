function fullPageSwipe() {
  let parallaxKey;
  if(window.location.hostname == 'virgiofashion.myshopify.com'){
    parallaxKey = "SXZiWGx6YUc5d2FXWjVMbU52YlE9PVk3XzdJMmNHRnlZV3hzWVhnPXBJTw==";
  }
  else{
    parallaxKey = "TVdkbWx5WjJsdkxtTnZiUT09eDhfQUlBY0dGeVlXeHNZWGc9R3R4";
  }
  var myFullpage = new fullpage("#main-content", {
    licenseKey: 'VL23I-RXIS6-5HM97-QZSVH-JDJSL',
    parallaxKey: parallaxKey,
    sectionSelector: ".shopify-section",
    parallax: true,
    parallaxOptions: { type: "cover", percentage: 100, property: "translate" },
    credits: { enabled: false, label: 'Marmeto', position: 'right'},
  });
}

fullPageSwipe();
