var mang = [];

// Get mảng sản phẩm

mang = JSON.parse(localStorage.getItem('danhSachSanPham'));
if (mang == null)
    mang = new Array();




// Thêm sản phẩm mới

function hamThemSanPhamMoi() {
    let ID = taoMaIDChoSanPham();
    let nodeInputHinh = document.getElementById("hinh-san-pham");
    let hinhSP = nodeInputHinh.value;
    let nodeInputTen = document.getElementById("ten-san-pham");
    let tenSP = nodeInputTen.value;
    let nodeInputGia = document.getElementById("gia-san-pham");
    let giaSP = nodeInputGia.value;
    let nodeInputHang = document.getElementById("hang-san-pham");
    let hangSP = nodeInputHang.value;
    let nodeInputKhuyenMai = document.getElementById("khuyen-mai-san-pham");
    let khuyenMaiSP = nodeInputKhuyenMai.value;

    if (hinhSP == "" || tenSP == "" || giaSP == "" || hangSP == "" || khuyenMaiSP == "") {
        alert("Bạn nhập chưa đủ các thông tin");
        return;
    }
    if (5 > tenSP.length || tenSP.length > 50) {
        alert("Bạn phải nhập tên lớn hơn 5 kí tự và nhỏ hơn 50 kí tự");
        return;
    }

    if (isNaN(giaSP)) {
        alert("Giá trị ở giá sản phẩm phải là số");
        return
    }
    if (giaSP <= 0) {
        alert("Giá trị ở giá sản phẩm phải lớn hơn 0");
        return
    }
    if (khuyenMaiSP < giaSP) {
        alert("Giá trị ở giá gốc phải lớn hơn giá giảm");
        return
    }


    var spMoi = {
        id: ID,
        hinhAnh: hinhSP,
        ten: tenSP,
        gia: giaSP,
        hang: hangSP,
        khuyenMai: khuyenMaiSP,
        giam: khuyenMaiSP - giaSP
    }

    mang.push(spMoi);
    console.log(mang);

    var jsonmang = JSON.stringify(mang)
    localStorage.setItem("danhSachSanPham", jsonmang);
}

// Tạo mã ID cho sản phẩm mới

function taoMaIDChoSanPham() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// Xuất giao diện điều chỉnh được sản phẩm lên kho hàng

/**
 * @param  {[]} arr
 */
function xuatGiaoDienAdmin(arr, idNode) {

    let nodeDSSANPHAM = document.getElementById(idNode);
    nodeDSSANPHAM.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
    <div class="san-pham">
    <div class="hinh-anh">
        <img src="${arr[i].hinhAnh}" alt="">
    </div>
    <h2 class="ten">${arr[i].ten}</h2>
    <p class="gia">Giảm giá: ${hamFormatGiaTien(String(arr[i].gia))} VND</p>
    <p class="khuyenMai">Giá gốc: <strike>${hamFormatGiaTien(String(arr[i].khuyenMai))}</strike>  VND <img src="https://www.vietthuong.vn/vnt_upload/news/09_2017/top_seller_icon_1.png " /></p>
    <div class="bodybutton">
    <button class="button" name="button" value="OK" type="button" onclick="viTriSP(${i})"><a href="#popup1">Sửa Sản Phẩm</a></button> </br>
    <button class="button" name="button" value="OK" type="button" onclick="xoaSP(${i})"><a href="#">Xóa Sản Phẩm</a></button>
    </div>
</div>
`
    }
}
xuatGiaoDienAdmin(mang, "dssp1");


// Chức năng xóa sản phẩm trong kho hàng

/**
 * @param  {number} vitri
 */
function xoaSP(vitri) {
    mang.splice(vitri, 1);
    console.log(mang);
    xuatGiaoDienAdmin(mang, "dssp1");
    var jsonmang = JSON.stringify(mang)
    localStorage.setItem("danhSachSanPham", jsonmang);

}

// Chức năng sửa sản phẩm trong kho hàng
//a. Xác định vị trí sản phẩm cần sửa
var vitrisP = [];

function viTriSP(vitri) {
    vitrisP = [];
    vitrisP.push(vitri);
    giaoDienThemSP(mang, "popupsua");
    xuatgiaodiensua(mang, "sanphamsua");
}

//b. Xuất giao diện các ô input để sửa sản phẩm
/**
 * @param  {[]} arr
 */
function giaoDienThemSP(arr, idNode) {
    //b1. truy cập node
    let nodeDSSANPHAM = document.getElementById(idNode);
    //b2. chạy vòng lặp
    nodeDSSANPHAM.innerHTML = ""
    nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
        <div class="form">
                        <p>Sửa Sản Phẩm</p>
                        </br>
                        <div id="sanphamsua">

                        </div>
                        </br>

                        <input type="text" value = "${arr[vitrisP].hinhAnh}" placeholder="Gắn lại link hình ảnh vào đây..." id="hinh-san-pham-moi" /></br>
                       
                        <input type="text" value = "${arr[vitrisP].ten}" placeholder="Nhập lại tên sản phẩm..." id="ten-san-pham-moi" /></br>
                       
                        <input type="text" value = "${arr[vitrisP].gia}" placeholder="Nhập lại giá sản phẩm..." id="gia-san-pham-moi" /> </br>
                       
                        <input type="text" value = "${arr[vitrisP].khuyenMai}" placeholder="Nhập giá gốc sản xuất..." id="khuyen-mai-san-pham-moi" /> </br>
                      
                        <input type="text" value = "${arr[vitrisP].hang}" placeholder="Nhập lại hãng sản xuất..." id="hang-san-pham-moi" /> </br>
                        <button onclick="hamSuaSP()"> <a  class="close" href="#" >
                            Sửa sản phẩm
                        </a> </button>
                        <button>
                            <a class="close" href="#" >Hủy sửa sản phẩm</a>  </button>

                    </div>
`
}

//c. Xuất giao diện hiển thị thông tin sản phẩm cần sửa
/**
 * @param  {[]} arr
 */
function xuatgiaodiensua(arr, idNode) {
    //b1. truy cập node
    let nodeDSSANPHAM = document.getElementById(idNode);
    //b2. chạy vòng lặp
    nodeDSSANPHAM.innerHTML = ""
    nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
        <div class="san-pham-sua">
        <div class="hinh-anh-sua">
            <img src="${arr[vitrisP].hinhAnh}" alt="">
        </div>
        <h2 class="ten-sua">${arr[vitrisP].ten}</h2>
        <h2 class="gia-sua">Giảm giá: ${hamFormatGiaTien(String(arr[vitrisP].gia))} VND</h2>
        <h2 style = "margin-top: -10px"class="gia-sua">Giá gốc: ${hamFormatGiaTien(String(arr[vitrisP].khuyenMai))} VND  <img style = "width: 30px;"src="https://www.vietthuong.vn/vnt_upload/news/09_2017/top_seller_icon_1.png " /></h2>
        <h2 class="gia-sua">Hãng: ${arr[vitrisP].hang} </h2>

      
    </div>
`
}

//d. Hàm sửa sản phẩm
let tenSanPhamCu = [];

/**
 * @param  {number} vitri
 */
function hamSuaSP() {
    tenSanPhamCu = [];
    tenSanPhamCu = mang[vitrisP].ten
    setTimeout(function() {
        popUpSuaNgay();
    });
    let IDMoi = mang[vitrisP].id;
    let nodeInputHinhMoi = document.getElementById("hinh-san-pham-moi");
    let hinhSPMoi = nodeInputHinhMoi.value;
    let nodeInputTenMoi = document.getElementById("ten-san-pham-moi");
    let tenSPMoi = nodeInputTenMoi.value;
    let nodeInputGiaMoi = document.getElementById("gia-san-pham-moi");
    let giaSPMoi = nodeInputGiaMoi.value;
    let nodeInputKhuyenMai = document.getElementById("khuyen-mai-san-pham-moi");
    let khuyenMaiSPMoi = nodeInputKhuyenMai.value;
    let nodeInputHangMoi = document.getElementById("hang-san-pham-moi");
    let hangSPMoi = nodeInputHangMoi.value;

    if (hinhSPMoi == "" || tenSPMoi == "" || giaSPMoi == "" || hangSPMoi == "") {
        alert("Bạn nhập chưa đủ các thông tin");
        return;
    }
    if (5 > tenSPMoi.length || tenSPMoi.length > 50) {
        alert("Bạn phải nhập tên lớn hơn 5 kí tự và nhỏ hơn 50 kí tự");
        return;
    }

    if (isNaN(giaSPMoi)) {
        alert("Giá trị ở giá sản phẩm phải là số");
        return
    }
    if (giaSPMoi <= 0) {
        alert("Giá trị ở giá sản phẩm phải lớn hơn 0");
        return
    }

    mang[vitrisP] = {
        id: IDMoi,
        hinhAnh: hinhSPMoi,
        ten: tenSPMoi,
        gia: giaSPMoi,
        hang: hangSPMoi,
        khuyenMai: khuyenMaiSPMoi,
        giam: khuyenMaiSPMoi - giaSPMoi
    }
    console.log(mang);

    var jsonmang = JSON.stringify(mang)
    localStorage.setItem("danhSachSanPham", jsonmang);
    xuatGiaoDienAdmin(mang, "dssp1");
}

// Popup đã sửa thành công khi nhấn vào button sửa sản phẩm

function popUpSuaNgay() {

    let nodeWinNotification = document.getElementById("hienThiPopUpSuaNgay");
    nodeWinNotification.innerHTML = `
    <div class="content">
    <p><i class="fas fa-tools"></i></i> Đã sửa thành công sản phẩm ${tenSanPhamCu}</p>
    </div>`;
    setTimeout(function() {
        nodeWinNotification.innerHTML = ``;
    }, 2000);
}

function hamFormatGiaTien(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}