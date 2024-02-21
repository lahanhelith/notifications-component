const markAllReadBtn = document.getElementById("mark-as-read-btn");
const unreadNotifications = document.getElementById("unread-notifications")

markAllReadBtn.addEventListener("click", () => {
    const listOfUnreadMarks = document.querySelectorAll(".unread");
    const listOfUnreadNotifications = document.querySelectorAll(".unread-container");

    for(let i of listOfUnreadNotifications){
        i.style.backgroundColor = "white";
    }
    for(let i of listOfUnreadMarks){
        i.remove();
    }
    unreadNotifications.innerText = "0";
})