function isMobileDevice() {
    const userAgentIsMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const screenIsSmall = window.matchMedia("(max-width: 767px)").matches;

    return userAgentIsMobile || screenIsSmall;
}

// inject on DOM load
document.addEventListener("DOMContentLoaded", function() {
    if (isMobileDevice()) {
        console.log("Mobile device confirmed with high certainty.");
        // page = mobile.html
        window.location.href = "/mobile.html";
    } else {
        console.log("Not a mobile device (or not certain).");
    }
});
