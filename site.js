
// Page is loaded
window.addEventListener("DOMContentLoaded", function(e) {

    // To find the order buttons with data-order name
    const orderButtons = document.querySelectorAll("button[data-order]");


    orderButtons.forEach(function(button) {
        button.addEventListener("click", function(e){

            // To give the reference to the button we clicked
            const button = e.currentTarget;     

            // To get access to the parent information
            const container = button.parentNode;

            // To store the info
            const order={
                id:button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            // Storing the info in the local storage
            localStorage.setItem("order", JSON.stringify(order));

            // Loading the target window by URL
            const url = window.location.href.replace("earrings.html", "order.html");
            window.location.href = url;
            
        });
    });
});