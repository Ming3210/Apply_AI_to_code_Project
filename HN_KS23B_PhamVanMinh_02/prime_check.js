/**
 * Kiểm tra một số có phải là số nguyên tố hay không.
 *
 * Định nghĩa: Số nguyên tố là số nguyên lớn hơn hoặc bằng 2,
 * chỉ có đúng hai ước số dương là 1 và chính nó.
 *
 * Thuật toán:
 * - Loại bỏ các trường hợp không phải số nguyên hoặc nhỏ hơn 2.
 * - Xử lý nhanh cho 2 (là số nguyên tố) và các số chẵn > 2 (không phải nguyên tố).
 * - Duyệt các ước lẻ từ 3 đến căn bậc hai của n. Nếu tồn tại ước chia hết, n không phải nguyên tố.
 *
 * Độ phức tạp: O(√n) cho n >= 2.
 *
 * @param {number} n - Số cần kiểm tra. Chấp nhận kiểu number hữu hạn trong JavaScript.
 * @returns {boolean} Trả về true nếu n là số nguyên tố, ngược lại trả về false.
 *
 * @example
 * // true (2 là số nguyên tố)
 * is_prime(2);
 *
 * @example
 * // false (9 = 3 x 3)
 * is_prime(9);
 *
 * @example
 * // false (số âm và số < 2 không phải số nguyên tố)
 * is_prime(-5);
 *
 * @example
 * // false (số không nguyên hoặc NaN/Infinity đều không phải số nguyên tố)
 * is_prime(7.2);
 * is_prime(NaN);
 */
function is_prime(n) {
    // Kiểm tra nhanh: phải là số hữu hạn và là số nguyên
    if (!Number.isFinite(n) || !Number.isInteger(n)) {
        return false;
    }

    // Các số < 2 không phải số nguyên tố
    if (n < 2) {
        return false;
    }

    // 2 là số nguyên tố duy nhất chẵn
    if (n === 2) {
        return true;
    }

    // Loại bỏ số chẵn > 2
    if (n % 2 === 0) {
        return false;
    }

    // Chỉ cần kiểm tra các ước lẻ từ 3 đến sqrt(n)
    const limit = Math.floor(Math.sqrt(n));
    for (let divisor = 3; divisor <= limit; divisor += 2) {
        if (n % divisor === 0) {
            return false;
        }
    }

    // Không tìm thấy ước số nào => n là số nguyên tố
    return true;
}

// Xuất hàm để có thể dùng trong môi trường Node.js (require)
module.exports = {
    is_prime,
};


