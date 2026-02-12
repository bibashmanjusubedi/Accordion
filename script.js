document.addEventListener("DOMContentLoaded",() => {
    const items = document.querySelectorAll(".accordion-item");
    
    items.forEach(item => {
        const trigger = item.querySelector(".accordion-trigger");

        trigger.addEventListener("click", ()=> {
            // Close any currently open item
            items.forEach(other => {
                if (other !== item) {
                    other.classList.remove("active");
                }
            });

            // Toggle current item
            item.classList.toggle("active");
        });
    });
});