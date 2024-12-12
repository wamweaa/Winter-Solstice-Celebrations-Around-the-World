const toggleNav = () => {
    const nav = document.getElementById("side-nav");
    const body = document.getElementById("body");

    if (nav.style.width === "250px") {
        nav.style.width = "0";
        body.style.marginLeft = "0";
    } else {
        nav.style.width = "250px";
        body.style.marginLeft = "250px";
    }
};

const closeNav = () => {
    const nav = document.getElementById("side-nav");
    const body = document.getElementById("body");
    nav.style.width = "0";
    body.style.marginLeft = "0";
};
