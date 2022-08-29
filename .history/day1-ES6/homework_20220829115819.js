const array = [
    {
        gia: "3000",
        san_pham: "ao 3 lỗ",
        so_luong: 1,
    },
    {
        gia: "12000",
        san_pham: "quan Đen",
        so_luong: 2,
    },
    {
        gia: "3000",
        san_pham: "quan dài",
        so_luong: 5,
    },
];

const total = array.reduce((acc, item) => {
    return acc + Number(item.gia) * item.so_luong;
}, 0);
console.log(total);
const chuoiNumber = "12234534342";
const chuoiNumberCopy = chuoiNumber.split("");
console.log(chuoiNumberCopy);
console.log(chuoiNumberCopy.filter((item) => item === "2").length);

// form
const form = document.querySelector(".app-up");
const nameInput = document.querySelector("#nameInput");
const phoneInput = document.querySelector("#phoneInput");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const appContent = document.querySelector(".app-content");
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const info = {};
    const name = nameInput.value;
    const phone = phoneInput.value;
    info.name = name;
    info.phone = phone;
    saveToLocalStorage(name, phone);
    nameInput.value = "";
    phoneInput.value = "";
    showData(name, phone);
});

searchBtn.addEventListener("click", () => {
    const searchInfo = searchInput.value;
    console.log(searchInfo);
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    data.map((item) => {
        if (item.name.toUpperCase() === searchInfo.toUpperCase()) {
            appContent.innerHTML = "";
        }
    });
});
const showData = (name, phone) => {
    const htmls = `
    <div class="app-item">
        <h2 class="user-name">${name}</h2>
        <h2 class="user-phone">${phone}</h2>
    </div>
    `;
    const divElement = document.createElement("div");
    divElement.innerHTML = htmls;
    appContent.appendChild(divElement);
};
const loadData = () => {
    const initData = JSON.parse(localStorage.getItem("data")) || [];
    appContent.innerHTML = "";
    initData.forEach((data) => {
        showData(data.name, data.phone);
    });
};
const saveToLocalStorage = (name, phone) => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const user = { name, phone };
    data.push(user);
    localStorage.setItem("data", JSON.stringify(data));
};
loadData();
