"use strict";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const paragraph = document.querySelector("p") || "";
            const value = button.dataset.value;
            if (paragraph) {
                paragraph.innerHTML = value;
            }
        });
    });
});
