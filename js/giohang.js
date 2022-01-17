// Thêm vào giỏ hàng
var mangSPDaMua = [];
var mangTaiKhoanAdmin = [];
// Get mảng sản phẩm đã mua
mangSPDaMua = JSON.parse(localStorage.getItem('danhSachSanPhamDaMua'));
if (mangSPDaMua == null)
    mangSPDaMua = new Array();
// Get mang sản phẩm
mang = JSON.parse(localStorage.getItem('danhSachSanPham'));
if (mang == null)
    mang = new Array();

// Get mảng Admin
// mangTaiKhoanAdmin = JSON.parse(localStorage.getItem('danhSachTaiKhoanAdmin'));
// if (mangTaiKhoanAdmin == null)
//     mangTaiKhoanAdmin = new Array();

// Kiếm tra giỏ hàng các sản phẩm có cùng id không
let sanPhamMuaLai = {}
let SanPhamDaMua = []
for (let i = 0; i < mang.length; i++) {
    for (let j = 0; j < mangSPDaMua.length; j++) {

        if (mang[i].id == mangSPDaMua[j].idSanPham) {
            sanPhamMuaLai = {
                hinhAnh: mang[i].hinhAnh,
                ten: mang[i].ten,
                gia: mang[i].gia,
                soLuong: mangSPDaMua[j].soLuong,
                id: mangSPDaMua[j].idSanPham
            }
            SanPhamDaMua.push(sanPhamMuaLai)


        }
    }

}
//  Them sản phẩm vào giỏ hàng

function muaNgay(idSanPham) {

    mangSPDaMua = JSON.parse(localStorage.getItem('danhSachSanPhamDaMua'));
    if (mangSPDaMua == null)
        mangSPDaMua = new Array();
    setTimeout(function() {
        popUpMuaNgay();
    });
    let coTonTai = false
    for (let i = 0; i < mangSPDaMua.length; i++) {
        let itemGioHangHienTai = mangSPDaMua[i];
        if (itemGioHangHienTai.idSanPham == idSanPham) {
            mangSPDaMua[i].soLuong++;
            coTonTai = true;
        }

    }
    if (coTonTai == false) {
        let taoDT = taoDoiTuong(idSanPham, 1)
        mangSPDaMua.push(taoDT);
    }
    let mangGioHang = mangSPDaMua;
    mangGioHang = JSON.stringify(mangSPDaMua);
    localStorage.setItem("danhSachSanPhamDaMua", mangGioHang);
    location.reload();

}
// Tạo đối tượng

function taoDoiTuong(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}


// Tính tổng tiền

var TongCong = 0;

function Tongtien() {

    mangGioHang = JSON.parse(localStorage.getItem('danhSachSanPhamDaMua'));
    for (var i = 0; i < mangGioHang.length; i++) {
        TongCong = TongCong + (SanPhamDaMua[i].gia * SanPhamDaMua[i].soLuong);
    }

    let nodeDSSANPHAM = document.getElementById("Tong-tien");
    nodeDSSANPHAM.innerHTML = "";
    nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
    ${hamFormatGiaTien(String(TongCong))}đ
    `
}
Tongtien();

// Thay đổi số lượng
function thayDoiSoLuong(viTri, soLuong) {
    let viTriSua = viTri;
    let soLuongMoi = soLuong;
    let sanPhamCanThaySoLuong = SanPhamDaMua[viTriSua].id;
    console.log(sanPhamCanThaySoLuong);
    for (let i = 0; i < mangSPDaMua.length; i++) {
        let CheckIDSanPham = mangSPDaMua[i]
        if (sanPhamCanThaySoLuong == CheckIDSanPham.idSanPham) {
            CheckIDSanPham.soLuong = soLuongMoi
            console.log(mangSPDaMua);

        }
    }
    location.reload();
    SanPhamDaMua[viTriSua].soLuong = soLuongMoi;
    xuatGiaoDien3(SanPhamDaMua, "SPDAMUATRONGGIOHANG");
    Tongtien();
    let mangGioHang = mangSPDaMua;
    mangGioHang = JSON.stringify(mangSPDaMua);
    localStorage.setItem("danhSachSanPhamDaMua", mangGioHang);
}

// Xuất giao diện sản phẩm có trong mảng lên giỏ hàng
/**
 * @param  {[]} arr
 */
function xuatGiaoDien3(arr, idNode) {
    //b1. truy cập node
    let nodeDSSANPHAM = document.getElementById(idNode);
    //b2. chạy vòng lặp
    nodeDSSANPHAM.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        let tongloai = (arr[i].gia * arr[i].soLuong);
        nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
<div class=carts-shop >
        <div class="cart-item cart-column">
        <img class="cart-item-image" src="${arr[i].hinhAnh}" >
        <span class="cart-item-title">${arr[i].ten}</span>
    </div>
    <span class="cart-price cart-column">${hamFormatGiaTien(String(arr[i].gia))} đ</span>
    <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" min="1" value="${arr[i].soLuong}" onchange="thayDoiSoLuong(${i}, this.value)">
   
    </div>
    <span  class="cart-price-tong cart-column">${hamFormatGiaTien(String(tongloai))} đ</span>
    <div class="cart-column-xoa">
    <button class="btn btn-danger cart-column-xoa"  onclick="xoaSPMua(${i})"><a href="giohang.html">Delete.. <i class="far fa-trash-alt"></i></a></button>
    </div>
    </div>
`
    }
}
xuatGiaoDien3(SanPhamDaMua, "SPDAMUATRONGGIOHANG");


// Xóa sản phẩm trong giỏ hàng
/**
 * @param  {number} vitri
 */
function xoaSPMua(vitri) {
    mangSPDaMua.splice(vitri, 1);
    console.log(mangSPDaMua);
    var jsonmangSPDaMua = JSON.stringify(mangSPDaMua)
    localStorage.setItem("danhSachSanPhamDaMua", jsonmangSPDaMua);
    location.reload();
}

// Hiện popup đã thêm vào giỏ hàng

function popUpMuaNgay() {

    let nodeWinNotification = document.getElementById("hienThiPopUpMuaNgay");
    nodeWinNotification.innerHTML = `
    <div class="content">
    <p> <i class="fas fa-luggage-cart"></i> Đã thêm sản phẩm vào giỏ hàng </p>
    </div>`;
    setTimeout(function() {
        nodeWinNotification.innerHTML = ``;
    }, 2000);
}

// Xuất giao diện khi mua hàng

/**
 * @param  {[]} arr
 */
function xuatGiaoDien4(idNode) {
    //b1. truy cập node
    let nodeDSSANPHAM = document.getElementById(idNode);
    //b2. chạy vòng lặp
    nodeDSSANPHAM.innerHTML = ""
    nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML +

        `<div class="container">
        <div class="content">
            <div class="imgCongrate">
                <img src="img/thank.gif" alt="">
            </div>
            <div class="desc">
                <h1 class="title"> <img src="img/okkkk.gif" alt="">.Đặt hàng thành công.<img src="img/okkkk.gif" alt=""></h1>
                <div class="button-item-ok">
                    <button class = "ok"><a href="giohang.html" >
                    OK
                </a>  </button>
                </div>
            </div>

        </div>
    </div>
`
}

xuatGiaoDien4("popupcamonnha");

// Format giá tiền
function hamFormatGiaTien(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

// // lệnh tạo tài khoản admin
// function taoTaiKhoanAdmin() {
//     var usermoi = prompt("Tạo User mới: ", '');
//     var passmoi = prompt("Nhập Password mới: ", '');
//     var passmoix2 = prompt("Nhập lại Password mới: ", '');
//     for (let i = 0; i < mangTaiKhoanAdmin.length; i++) {
//         while (usermoi == mangTaiKhoanAdmin[i].user) {
//             alert("User của bạn đã tồn tại, mời nhập lại !!!")
//             var usermoi = prompt("Tạo User mới: ", '');
//         }
//         while (passmoi == mangTaiKhoanAdmin[i].pass) {
//             alert("Pass của bạn đã tồn tại, mời nhập lại !!!")
//             var passmoi = prompt("Nhập Password mới: ", '');
//             var passmoix2 = prompt("Nhập lại Password mới: ", '');
//         }
//     }
//     if (usermoi == "" || passmoi == "" || passmoix2 == "") {
//         alert("Bạn nhập chưa đủ các thông tin.");
//         return;
//     }
//     if (3 > String(usermoi).length || String(usermoi).length > 20) {
//         alert("Bạn phải nhập user lớn hơn 3 kí tự và nhỏ hơn 20 kí tự.");
//         return;
//     }
//     if (5 > String(passmoi).length) {
//         alert("Bạn phải nhập password lớn hơn 5 kí tự.");
//         return;
//     }
//     while (passmoix2 != passmoi) {
//         alert("Bạn đã nhập không giống password mới, xin vui lòng nhập lại.");
//         var passmoix2 = prompt("Nhập lại Password mới: ", '');
//     }
//     alert("Bạn đã tạo tài khoản thành công !!!");

//     var adminMoi = {
//         user: usermoi,
//         pass: passmoi,
//     }

//     mangTaiKhoanAdmin.push(adminMoi);
//     var jsonmangTaiKhoanAdmin = JSON.stringify(mangTaiKhoanAdmin)
//     localStorage.setItem("danhSachTaiKhoanAdmin", jsonmangTaiKhoanAdmin);
//     console.log(mangTaiKhoanAdmin);

// }

// //lệnh truy xuất admin bằng arlet
// function truyXuatAdmin() {
//     var mangCheckAdmin = [];
//     mangTaiKhoanAdmin = JSON.parse(localStorage.getItem('danhSachTaiKhoanAdmin'));
//     var usercheck = prompt("Nhập User: ", '');
//     var passcheck = prompt("Nhập Password: ", '');
//     for (let i = 0; i < mangTaiKhoanAdmin.length; i++) {
//         if (mangTaiKhoanAdmin[i].user == usercheck && mangTaiKhoanAdmin[i].pass == passcheck) {
//             mangCheckAdmin.push(mangTaiKhoanAdmin[i])
//             console.log(mangCheckAdmin);
//         }
//         console.log(mangCheckAdmin);
//     }
//     if (mangCheckAdmin.length == 0) {
//         alert('Đăng nhập quyền admin không thành công do sai user hoặc password !!!')
//         window.location = "index.html";
//         return;
//     }
//     for (let i = 0; i < mangCheckAdmin.length; i++) {
//         if ((usercheck) == (mangCheckAdmin[i].user) && (passcheck) == (mangCheckAdmin[i].pass)) {
//             alert('Đăng nhập quyền admin thành công !!!')
//             window.location = "khohang.html";
//         }
//     }
// }