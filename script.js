let apartments = [
    { id: 1, street: "Пушкина", houseNumber: 6, apartmentNumber: 14, area: 100, rooms: 2 },
    { id: 2, street: "Ленина", houseNumber: 3, apartmentNumber: 60, area: 70, rooms: 2 },
    { id: 3, street: "Арбузова", houseNumber: 8, apartmentNumber: 34, area: 50, rooms: 3 },
    { id: 4, street: "Дынино", houseNumber: 17, apartmentNumber: 63, area: 80, rooms: 2 },
    { id: 5, street: "Придружино", houseNumber: 25, apartmentNumber: 2, area: 55, rooms: 3 },
    { id: 6, street: "Яблочкина", houseNumber: 22, apartmentNumber: 11, area: 77, rooms: 1 },
    { id: 7, street: "Клевово", houseNumber: 11, apartmentNumber: 22, area: 69, rooms: 4 },
    { id: 8, street: "Унива", houseNumber: 34, apartmentNumber: 45, area: 88, rooms: 2 },
    { id: 9, street: "Клюкова", houseNumber: 68, apartmentNumber: 3, area: 52, rooms: 3 },
    { id: 10, street: "Пюрино", houseNumber: 28, apartmentNumber: 5, area: 60, rooms: 3 }
];

let realtors = [
    { id: 1, fullName: "Соловьев С.С.", commission: 4 },
    { id: 2, fullName: "Ковалев К.К.", commission: 11 },
    { id: 3, fullName: "Морозов М.М.", commission: 22 },
    { id: 4, fullName: "Васильев В.В.", commission: 5 },
    { id: 5, fullName: "Попов П.П.", commission: 14 },
    { id: 6, fullName: "Смирнов С.С.", commission: 21 },
    { id: 7, fullName: "Кузнецов К.К.", commission: 19 },
    { id: 8, fullName: "Сидоров С.С.", commission: 20 },
    { id: 9, fullName: "Петров П.П.", commission: 13 },
    { id: 10, fullName: "Иванов И.И.", commission: 18 }
];

let deals = [
    { id: 1, apartmentId: 1, realtorId: 1, dealDate: "2023-01-15", price: 3000000, commission: 90000 },
    { id: 2, apartmentId: 2, realtorId: 2, dealDate: "2023-02-20", price: 4500000, commission: 112500 },
    { id: 3, apartmentId: 3, realtorId: 3, dealDate: "2023-03-10", price: 2000000, commission: 80000 },
    { id: 4, apartmentId: 9, realtorId: 9, dealDate: "2023-04-05", price: 6000000, commission: 210000 },
    { id: 5, apartmentId: 7, realtorId: 7, dealDate: "2023-05-22", price: 3500000, commission: 70000 },
    { id: 6, apartmentId: 10, realtorId: 10, dealDate: "2023-06-30", price: 5000000, commission: 250000 },
    { id: 7, apartmentId: 6, realtorId: 6, dealDate: "2023-07-15", price: 4000000, commission: 120000 },
    { id: 8, apartmentId: 4, realtorId: 4, dealDate: "2023-08-01", price: 2500000, commission: 70000 },
    { id: 9, apartmentId: 5, realtorId: 5, dealDate: "2023-09-10", price: 5500000, commission: 165000 },
    { id: 10, apartmentId: 8, realtorId: 8, dealDate: "2023-10-20", price: 3700000, commission: 118400 }
];

let apartmentIdCounter = apartments.length + 1;
let realtorIdCounter = realtors.length + 1;
let dealIdCounter = deals.length + 1;

function renderApartmentTable() {
    const tbody = document.getElementById("apartmentTable").getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    apartments.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.street;
        row.insertCell(2).textContent = item.houseNumber;
        row.insertCell(3).textContent = item.apartmentNumber;
        row.insertCell(4).textContent = item.area;
        row.insertCell(5).textContent = item.rooms;
        const actionsCell = row.insertCell(6);
        
        const editButton = document.createElement("button");
        editButton.textContent = "Редактировать";
        editButton.addEventListener("click", () => editApartment(index));
        actionsCell.appendChild(editButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            apartments.splice(index, 1);
            renderApartmentTable();
        });
        actionsCell.appendChild(deleteButton);
    });
}

function renderRealtorTable() {
    const tbody = document.getElementById("realtorTable").getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    realtors.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.fullName;
        row.insertCell(2).textContent = item.commission;
        const actionsCell = row.insertCell(3);
        
        const editButton = document.createElement("button");
        editButton.textContent = "Редактировать";
        editButton.addEventListener("click", () => editRealtor(index));
        actionsCell.appendChild(editButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            realtors.splice(index, 1);
            renderRealtorTable();
        });
        actionsCell.appendChild(deleteButton);
    });
}

function renderDealTable() {
    const tbody = document.getElementById("dealTable").getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
    deals.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.apartmentId;
        row.insertCell(2).textContent = item.realtorId;
        row.insertCell(3).textContent = item.dealDate;
        row.insertCell(4).textContent = item.price;
        row.insertCell(5).textContent = item.commission;
        const actionsCell = row.insertCell(6);
        
        const editButton = document.createElement("button");
        editButton.textContent = "Редактировать";
        editButton.addEventListener("click", () => editDeal(index));
        actionsCell.appendChild(editButton);
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            deals.splice(index, 1);
            renderDealTable();
        });
        actionsCell.appendChild(deleteButton);
    });
}

document.getElementById("showApartmentTable").addEventListener("click", function() {
    document.getElementById("apartmentTable").style.display = "table";
    document.getElementById("realtorTable").style.display = "none";
    document.getElementById("dealTable").style.display = "none";
    renderApartmentTable();
});

document.getElementById("showRealtorTable").addEventListener("click", function() {
    document.getElementById("apartmentTable").style.display = "none";
    document.getElementById("realtorTable").style.display = "table";
    document.getElementById("dealTable").style.display = "none";
    renderRealtorTable();
});

document.getElementById("showDealTable").addEventListener("click", function() {
    document.getElementById("apartmentTable").style.display = "none";
    document.getElementById("realtorTable").style.display = "none";
    document.getElementById("dealTable").style.display = "table";
    renderDealTable();
});

// Обработчики кнопок "Обновить таблицу"
document.getElementById("refreshApartmentTable").addEventListener("click", function() {
    renderApartmentTable();
});

document.getElementById("refreshRealtorTable").addEventListener("click", function() {
    renderRealtorTable();
});

document.getElementById("refreshDealTable").addEventListener("click", function() {
    renderDealTable();
});

document.getElementById("addApartment").addEventListener("click", function() {
    document.getElementById("addApartmentContainer").style.display = "block";
    document.getElementById("addRealtorContainer").style.display = "none";
    document.getElementById("addDealContainer").style.display = "none";
    clearApartmentInputs();
});

document.getElementById("addRealtor").addEventListener("click", function() {
    document.getElementById("addApartmentContainer").style.display = "none";
    document.getElementById("addRealtorContainer").style.display = "block";
    document.getElementById("addDealContainer").style.display = "none";
    clearRealtorInputs();
});

document.getElementById("addDeal").addEventListener("click", function() {
    document.getElementById("addApartmentContainer").style.display = "none";
    document.getElementById("addRealtorContainer").style.display = "none";
    document.getElementById("addDealContainer").style.display = "block";
    clearDealInputs();
});

document.getElementById("submitApartment").addEventListener("click", function() {
    const street = document.getElementById("streetInput").value;
    const houseNumber = parseInt(document.getElementById("houseNumberInput").value);
    const apartmentNumber = parseInt(document.getElementById("apartmentNumberInput").value);
    const area = parseInt(document.getElementById("areaInput").value);
    const rooms = parseInt(document.getElementById("roomsInput").value);

    if (street && houseNumber && apartmentNumber && area && rooms) {
        apartments.push({ id: apartmentIdCounter++, street, houseNumber, apartmentNumber, area, rooms });
        clearApartmentInputs();
        alert("Квартира добавлена!");
        renderApartmentTable();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

document.getElementById("submitRealtor").addEventListener("click", function() {
    const fullName = document.getElementById("fullNameInput").value;
    const commission = parseInt(document.getElementById("commissionInput").value);

    if (fullName && commission) {
        realtors.push({ id: realtorIdCounter++, fullName, commission });
        clearRealtorInputs();
        alert("Риэлтор добавлен!");
        renderRealtorTable();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

document.getElementById("submitDeal").addEventListener("click", function() {
    const apartmentId = parseInt(document.getElementById("apartmentIdInput").value);
    const realtorId = parseInt(document.getElementById("realtorIdInput").value);
    const dealDate = document.getElementById("dealDateInput").value;
    const price = parseInt(document.getElementById("priceInput").value);
    const commission = parseInt(document.getElementById("commissionDealInput").value);

    if (apartmentId && realtorId && dealDate && price && commission) {
        deals.push({ id: dealIdCounter++, apartmentId, realtorId, dealDate, price, commission });
        clearDealInputs();
        alert("Сделка добавлена!");
        renderDealTable();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

function editApartment(index) {
    const apartment = apartments[index];
    document.getElementById("streetInput").value = apartment.street;
    document.getElementById("houseNumberInput").value = apartment.houseNumber;
    document.getElementById("apartmentNumberInput").value = apartment.apartmentNumber;
    document.getElementById("areaInput").value = apartment.area;
    document.getElementById("roomsInput").value = apartment.rooms;

    const submitButton = document.getElementById("submitApartment");
    submitButton.onclick = function() {
        apartment.street = document.getElementById("streetInput").value;
        apartment.houseNumber = parseInt(document.getElementById("houseNumberInput").value);
        apartment.apartmentNumber = parseInt(document.getElementById("apartmentNumberInput").value);
        apartment.area = parseInt(document.getElementById("areaInput").value);
        apartment.rooms = parseInt(document.getElementById("roomsInput").value);

        alert("Квартира обновлена!");
        renderApartmentTable();
        clearApartmentInputs();
        submitButton.onclick = addApartment; // Сбросить обработчик
    };
}

function editRealtor(index) {
    const realtor = realtors[index];
    document.getElementById("fullNameInput").value = realtor.fullName;
    document.getElementById("commissionInput").value = realtor.commission;

    const submitButton = document.getElementById("submitRealtor");
    submitButton.onclick = function() {
        realtor.fullName = document.getElementById("fullNameInput").value;
        realtor.commission = parseInt(document.getElementById("commissionInput").value);

        alert("Риэлтор обновлен!");
        renderRealtorTable();
        clearRealtorInputs();
        submitButton.onclick = addRealtor; // Сбросить обработчик
    };
}

function editDeal(index) {
    const deal = deals[index];
    document.getElementById("apartmentIdInput").value = deal.apartmentId;
    document.getElementById("realtorIdInput").value = deal.realtorId;
    document.getElementById("dealDateInput").value = deal.dealDate;
    document.getElementById("priceInput").value = deal.price;
    document.getElementById("commissionDealInput").value = deal.commission;

    const submitButton = document.getElementById("submitDeal");
    submitButton.onclick = function() {
        deal.apartmentId = parseInt(document.getElementById("apartmentIdInput").value);
        deal.realtorId = parseInt(document.getElementById("realtorIdInput").value);
        deal.dealDate = document.getElementById("dealDateInput").value;
        deal.price = parseInt(document.getElementById("priceInput").value);
        deal.commission = parseInt(document.getElementById("commissionDealInput").value);

        alert("Сделка обновлена!");
        renderDealTable();
        clearDealInputs();
        submitButton.onclick = addDeal; // Сбросить обработчик
    };
}

// Функции для очистки полей ввода
function clearApartmentInputs() {
    document.getElementById("streetInput").value = "";
    document.getElementById("houseNumberInput").value = "";
    document.getElementById("apartmentNumberInput").value = "";
    document.getElementById("areaInput").value = "";
    document.getElementById("roomsInput").value = "";
}

function clearRealtorInputs() {
    document.getElementById("fullNameInput").value = "";
    document.getElementById("commissionInput").value = "";
}

function clearDealInputs() {
    document.getElementById("apartmentIdInput").value = "";
    document.getElementById("realtorIdInput").value = "";
    document.getElementById("dealDateInput").value = "";
    document.getElementById("priceInput").value = "";
    document.getElementById("commissionDealInput").value = "";
}

// Первоначальный рендер таблиц
renderApartmentTable();
renderRealtorTable();
renderDealTable();
