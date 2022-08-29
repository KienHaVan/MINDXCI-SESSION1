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
const appContent = document.querySelector(".app-content");
console.log(form);
const data = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const phone = phoneInput.value;
    data.name = name;
    data.phone = phone;
    nameInput.value = "";
    phoneInput.value = "";
    const htmls = `
        <div class="app-item">
            <h2 class="user-name">${name}</h2>
            <h2 class="user-phone">${phone}</h2>
        </div>
    `;
    const divElement = document.createElement("div");
    divElement.innerHTML = htmls;
    appContent.appendChild(divElement);
});
