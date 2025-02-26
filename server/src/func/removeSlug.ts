function removeAccentsAndSpacesToLower(str:string) {
  return str
    .normalize("NFD")               // Chuẩn hóa chuỗi (tách dấu)
    .replace(/[\u0300-\u036f\s]/g, "")// Loại bỏ dấu và khoảng trắng
    .toLowerCase();                 // Chuyển thành chữ thường
}


export default removeAccentsAndSpacesToLower