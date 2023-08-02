export default function createElement(type, parent, id = "", text = "") {
    const element = document.createElement(type);
    if (id != "") element.classList.add(id);
    if (text != "") element.textContent = text;
    parent.appendChild(element);
    return element;
}