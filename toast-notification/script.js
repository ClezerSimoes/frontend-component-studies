const toastBox = document.querySelector("#toast-box");

const sucessBtn = document.querySelector("#sucess-btn");
const errorBtn = document.querySelector("#error-btn");
const invalidBtn = document.querySelector("#invalid-btn");

function toastNotification(message, type){

    let notification = document.createElement("div");

    notification.classList.add("toast-notification");
    notification.classList.add(type);
    notification.innerHTML = message;

    toastBox.appendChild(notification);

    setTimeout(() =>{
        notification.remove();
    }, 5000);
}

let sucessMsg = `<i class="ri-checkbox-circle-fill"></i> Sucess`;
let errorMsg = `<i class="ri-alarm-warning-fill"></i>Error`;
let invalidMsg = `<i class="ri-error-warning-fill"></i>Invalid`;


sucessBtn.addEventListener("click", () => {toastNotification(sucessMsg, "sucess")});
errorBtn.addEventListener("click", () => {toastNotification(errorMsg, "error")});
invalidBtn.addEventListener("click", () => {toastNotification(invalidMsg, "invalid")});

