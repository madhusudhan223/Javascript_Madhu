const fakeAPI = [
    "suit jacket",
    "dress shirt",
    "formal shoes",
    "tie clip",
    "blazer pants",
    "cocktail dress",
    "dress shoes",
    "blouse skirt",
    "evening clutch",
    "jumpsuit outfit",
    "t-shirt",
    "jeans",
    "sneakers",
    "skirt",
    "blouse",
    "sandals",
    "hairband",
];

const inputElement = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");

const handleKeyDown = (e) => {
    const inputValue = inputElement.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    const filteredArray = fakeAPI.filter((item) =>
        item.toLowerCase().includes(inputValue)
    );

    resultsContainer.innerHTML = "";
    if (inputElement.value){
        filteredArray.forEach((item) => {
            const listItem = document.createElement("div");
            listItem.innerText = item;
            listItem.classList.add("result-item")
            resultsContainer.appendChild(listItem);
        });

    }
   
};
inputElement.addEventListener("keyup", handleKeyDown);
