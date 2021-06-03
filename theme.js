// Selectors
    const themeSelector = document.querySelector("#themes");
    const themeLink = document.querySelector(".theme");

// Functions
    function setTheme() {
        let theme = themeSelector.value;
        themeLink.setAttribute("href", "theme-" + theme + ".css");
    }

// Event Listeners
    themeSelector.addEventListener("change", () => {
        setTheme();
    });

setTheme();