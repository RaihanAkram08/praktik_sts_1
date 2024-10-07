function validateAccess(role, status) {
    if (
        validateRole(role) &&
        validateStatus(status)
    ) {
        console.log("Akses Diizinkan");
    } else {
        console.log("Akses Ditolak")
    }
}


function validateRole(userRole) { // Membuat Function Validasi Akses hanya untuk super-admin
    if (userRole === "admin" || userRole === "user") {
        return true;
    } else {
        console.log("Hanya admin dan user yang diizinkan.");
        return false;
    }
}

function validateStatus(status) { // Membuat Function Validasi Akses untuk semua pengguna dengan status aktif
    if (status === "active") {
        return true;
    } else {
        console.log("Hanya pengguna dengan status aktif yang diizinkan.");
        return false;
    }
}
 
console.log(validateAccess('admin', 'inactive')); // Output : Hanya pengguna dengan status aktif yang diizinkan. Akses Ditolak
console.log(validateAccess('user', 'inactive')); // Output : Hanya pengguna dengan status aktif yang diizinkan. Akses Ditolak
console.log(validateAccess('guest', 'inactive')); // Output : Hanya admin dan user yang diizinkan. Akses Ditolak
console.log(validateAccess('admin', 'active')); // Output : Akses Diizinkan
console.log(validateAccess('user', 'active')); // Output : Akses Diizinkan