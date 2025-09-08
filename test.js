const createElements = (arr) => {
    const htmlElements = arr.map(el => `<span class = "btn">${el}</span>`);
    console.log(htmlElements.join(" "))
}
const synonyms = ["h","fg","jf"];
createElements(synonyms);