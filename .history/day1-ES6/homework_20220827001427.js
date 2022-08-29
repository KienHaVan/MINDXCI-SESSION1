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

const total = array.map((acc, item) => {
    console.log(acc);
    const output = acc + item.gia * item.so_luong;
    return output;
}, 0);
console.log(total);
