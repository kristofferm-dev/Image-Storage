let nav = "closed";

function openNav() {
    const panel = document.getElementById("mySidepanel");
    if (nav === "closed") {
        panel.style.maxHeight = "300px";
        nav = "open";
    }
    else if (nav === "open") {
        panel.style.maxHeight = 0;
        nav = "closed";
    }

}


setInterval(() => {
    const left = document.querySelector('.project-card.left');
    const center = document.querySelector('.project-card.center');
    const right = document.querySelector('.project-card.right');

    left.classList.replace('left', 'right');
    center.classList.replace('center', 'left');
    right.classList.replace('right', 'center');

}, 3000)

const p = document.querySelector(".copytext p");

p.addEventListener("click", () => {
    navigator.clipboard.writeText(p.textContent)
        .then(() => {
            console.log("Kopiert!");
        })
        .catch(err => {
            console.error("Kunne ikke kopiere.", err);
        });
});
