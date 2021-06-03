//selectors
const urlInput = document.querySelector("input[name='url']");
const colorInput = document.querySelector("input[name='color']");
const widthInput = document.querySelector("input[name='width']");
const image = document.querySelector(".image");

//information variables (global)
let url = "";
let width = 10;
let color = "#000000";


//functions
function hideImageOnLoad() {
    image.style.display = "none";
}

function setImage(url, width, color) {
    image.style.display = "block";
    image.style.borderStyle = "solid";
    image.style.backgroundImage = "url(" + url + ")";
    image.style.borderWidth = width + "px";
    image.style.borderColor = color;

}

//event listeners
urlInput.addEventListener("change", () => {
    url = urlInput.value;
    setImage(url, width, color);
})

colorInput.addEventListener("change", () => {
    color = colorInput.value;
    setImage(url, width, color);
})

widthInput.addEventListener("change", () => {
    width = widthInput.value;
    setImage(url, width, color);
})

hideImageOnLoad();