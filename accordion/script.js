const accordionHeaders = document.querySelectorAll(".accordion-item-header");

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active");
    });
});
