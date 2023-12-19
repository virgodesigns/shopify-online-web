<script>

    document.addEventListener('DOMContentLoaded', function() {
        let order_numbers = []
        var ReturnElements = document.querySelectorAll('.return__exchange');
        Array.prototype.forEach.call(ReturnElements, function(el, i) {
            order_numbers.push(el.getAttribute('data-order_name'));
        });

        let url = 'https://admin.returnprime.com/get-fulfilled-order-status';
        let data = {
            order_numbers: order_numbers,
            store_name: Shopify.shop
        }

        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                let orders = data.orders;
                Array.prototype.forEach.call(ReturnElements, function(el, i) {
                    let orderId = el.getAttribute('data-order_name');
                    orders.forEach(function(order) {
                        if (order.order_id === orderId && !order.status) {
                            el.querySelector(".js-return-exchange").classList.add("disabled");
                            el.querySelector(".js-return-exchange").innerHTML = "Not avalible";
                        }

                    })
                })

            })
            .catch((error) => {
            });



        // on click of return button redirect to returnprime 

        [...document.querySelectorAll(".js-return-exchange")].forEach(el => el.addEventListener('click', function(e) {
            let OrderId = el.getAttribute('data-order');
            let CustomerEmail = el.getAttribute('data-customer');
            let ReturnUrl = 'https://admin.returnprime.com/fetch_order';

            let data = {
                order_number: OrderId,
                email: CustomerEmail,
                store: Shopify.shop,
               //locale:Shopify.locale //Use it only for multi-lang stores

            }

            el.classList.add("rp_btn_loading");
            fetch(ReturnUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(response => {
              		el.classList.remove("rp_btn_loading");
                    if (response.success == false) {
                        var ErrorMessage = response.message;
                        alert(ErrorMessage);

                    } else if (response.success == true) {

                       window.location.href = response.url;

                    }
              
              

                })
                .catch((error) => {
                    el.classList.remove("rp_btn_loading");                    
              		var ErrorMessage = error.message;
                    alert(ErrorMessage);
                });
        }))


    });

</script>