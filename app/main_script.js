// === TASK #1 ===
// DOM connectings var
const inputArea = document.querySelector('#words-area');
const divText = document.querySelector('.output');
// Event listeners
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey == true && e.code == 'KeyE') {
        e.preventDefault()
        inputArea.value = divText.innerText;
        inputArea.classList.add('show');
        inputArea.classList.remove('hide');
        divText.classList.add('hide');
        divText.classList.remove('show');
        inputArea.focus();
    }
});
window.addEventListener('keydown', (e) => {
    if((e.ctrlKey == true && e.key == '=') ||  e.ctrlKey == true && e.key == '+'){
        e.preventDefault()
        divText.classList.add('edited');
        divText.classList.remove('no-edit');
        divText.innerText = inputArea.value;
        inputArea.classList.add('hide');
        inputArea.classList.remove('show');
        divText.classList.add('show');
        divText.classList.remove('hide');
    }
})
// === TASK 2 ===
const parentTable = document.querySelector('.table')
const column = document.querySelector('.table__titel');
const tableArr = [
    {'Brand': 'Toyota', 'Country': 'Japan', 'Engine': 'V6', 'Price': 9999},
    {'Brand': 'Mercedes', 'Country': 'Germany', 'Engine': 'V12', 'Price': 12980},
    {'Brand': 'VW', 'Country': 'Germany', 'Engine': '1.6', 'Price': 19999},
    {'Brand': 'DODGE', 'Country': 'USA', 'Engine': 'v12', 'Price': 89678},
    {'Brand': 'Cherry', 'Country': 'China', 'Engine': 'Electric', 'Price': 90000},
    {'Brand': 'Renault', 'Country': 'France', 'Engine': 'Turbo', 'Price': 12839},
    {'Brand': 'Geely', 'Country': 'China', 'Engine': '1.4', 'Price': 1823},
    {'Brand': 'Tavria', 'Country': 'Ukraine', 'Engine': '1.2', 'Price': 2200},
    {'Brand': 'Jeep', 'Country': 'USA', 'Engine': 'Electric', 'Price': 16000},
    {'Brand': 'Audi', 'Country': 'Germany', 'Engine': 'Electric', 'Price': 19999},
    {'Brand': 'BMW', 'Country': 'Germany', 'Engine': '3.2', 'Price': 78000},
    {'Brand': 'Deewoo', 'Country': 'China', 'Engine': '1.4', 'Price': 6000},
];
function createRow (nameParentName, array) {
    array.forEach(element => {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${element.Brand}</td>
        <td>${element.Country}</td>
        <td>${element.Engine}</td>
        <td>${element.Price}</td>
        `;
        nameParentName.append(newRow);
    });
};
createRow(parentTable, tableArr);
column.addEventListener('click', (e,i)=> {
    console.log(`Clicked: ${e.target}`);
    console.log(`Clicked: ${i}`);
})
// colorizer
// 
