function login() {
    // Username dan password yang ditentukan
    let userBenar = "haniseptiani";
    let passBenar = "septiani2403";

    // Ambil input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Cek login
    if (username === userBenar && password === passBenar) {
        alert("Login Sukses!");
        window.location.href = "sukses.html"; // pindah halaman
        return false; // mencegah reload form
    } else {
        alert("Login Gagal! Username atau password salah.");
        return false; // tetap di halaman
    }
}
