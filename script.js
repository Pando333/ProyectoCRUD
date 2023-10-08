



const formulario = document.querySelector("#formulario")

const nameinput = document.querySelector("#nameinput")
const nombreurlinput = document.querySelector("#nombreurlinput")
const form_input = document.querySelector("#form_input")

const tablebody = document.getElementById('tablebody');

let data = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const name = nameinput.value;
    const name2 = nombreurlinput.value;
    const name3 = form_input.value;

    if (name && name2 && name3) {
        const newData = { name, name2, name3 };
        data.push(newData);
        saveDataToLocalStorage();
        renderTable();
        //Función para borrar y volver a iniciar de JavaScript no se necesita crear
        form.reset();
    } else {
        alert('Favor llenar todos los campos');

    }
})

function saveDataToLocalStorage() {
    localStorage.setItem('formData', JSON.stringify(data));
}

function renderTable() {
    tablebody.innerHTML = '';

    data.forEach(function (item, index) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ame2Cell = document.createElement('td');
        const name3Cell = document.createElement('td');
        const actionCell = document.createElement('td');

        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')
        editButton.textContent = 'Editar';
        deleteButton.textContent = 'Eliminar';

        editButton.classList.add('button', 'button--secundary');
        deleteButton.classList.add('button', 'button--terciary');

        // Eventos de escucha con funciones para los botones de la celda "acciones" editar y eliminar.
        editButton.addEventListener('click', function () {
            editData(index);
        })

        deleteButton.addEventListener('click', function () {
            deleteData(index);
        })

        // Agregamos los botones a la celda de acciones.
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(ame2Cell);
        row.appendChild(name3Cell);
        row.appendChild(actionCell);

        // Creamos las filas para nuestro tablebody "la que aparece con la data":
        tablebody.appendChild(row);

    })
}

function deleteData(index) {
    data.splice(index, 1);
    saveDataToLocalStorage();
    renderTable();
}

renderTable();