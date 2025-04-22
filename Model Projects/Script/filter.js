const filterContainer = document.querySelector(".container-filter__absolute")
const filter = document.querySelector(".filter")

function filterChange(element) {
    if(element.classList.contains("fa-sort-up")) {
        element.removeAttribute("class")
        element.classList.add("fa-solid")
        element.classList.add("fa-sort-down")
        element.classList.add("filter")
    } else {
        element.removeAttribute("class")
        element.classList.add("fa-solid")
        element.classList.add("fa-sort-up")
        element.classList.add("filter")
    }
}

function openFilter() {
    let filterDisplay = filterContainer.style.display
    if(filterDisplay == "none") {
        filterContainer.style.display = "flex"
    } else {
        filterContainer.style.display = "none"
    }
}

