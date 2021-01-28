// Page is loaded
window.addEventListener("DOMContentLoaded", function(e) {

    const order = localStorage.getItem("order");

    // If its not null
    if(order){ 
        const productOrder = JSON.parse(order);

        // Geo-location API
        let locationBox = document.querySelector("#location");

        let location = {
            latitude: "unknown",
            longitude: "unknown"
        };

        window.navigator.geolocation.getCurrentPosition(
            function(position){
                location={
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                locationBox.value = JSON.stringify(location);
            },
            function(error){
                locationBox.value = JSON.stringify(location);
            });

        const orderInput = document.querySelector("#product-order");
        orderInput.value = order;
        // To give reference
        const product = document.querySelector(".product");

        // To get the details
        const title = product.querySelector(".title");
        const price = product.querySelector(".price");
        const desc = product.querySelector(".desc");

        // To post the details
        title.innerText = productOrder.title;
        price.innerText = productOrder.price;
        desc.innerText = productOrder.desc;

        // To get the image
        const img = product.querySelector("img");
        img.setAttribute("src", `images/${productOrder.id}.png`);
        img.setAttribute("alt",productOrder.title);
    }

});