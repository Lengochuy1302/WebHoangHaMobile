var mang = [];

// Get mảng sản phẩm
mang = JSON.parse(localStorage.getItem('danhSachSanPham'));

if (mang == null)
    mang = new Array();
console.log(mang);

function kiemTraSanPham() {
    if (mang.length <= 0) {
        console.log("Không có sản phẩm");
        let nodeDSSANPHAM = document.getElementById("baokomua");
        nodeDSSANPHAM.innerHTML = ""
        nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
        <div class="baochuamua">
       
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 1317 551" style="enable-background:new 0 0 1317 551;" xml:space="preserve">
<style type="text/css">
.st6{fill:#ffca55;stroke:#00483d;stroke-width:1.5;stroke-miterlimit:10;}
</style>
<image style="overflow:visible;" width="495" height="282" xlink:href="data:image/png;base64,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
S70s1SdfuQAAAABJRU5ErkJggg==" transform="matrix(1 0 0 1 406 127)">
</image>
<g>
<path class="st6" d="M139.05,451l-3.05-6.1c-1.25-2.35-2.05-4.1-3-6.05h-0.1c-0.7,1.95-1.55,3.7-2.6,6.05l-2.8,6.1h-8.7l9.75-17.05
   l-9.4-16.65h8.75l2.95,6.15c1,2.05,1.75,3.7,2.55,5.6h0.1c0.8-2.15,1.45-3.65,2.3-5.6l2.85-6.15h8.7l-9.5,16.45l10,17.25H139.05z"
   />
<path class="st6" d="M159.6,417.3V451h-7.65v-33.7H159.6z"/>
<path class="st6" d="M166.2,451v-33.7h8.9l7,12.35c2,3.55,4,7.75,5.5,11.55h0.15c-0.5-4.45-0.65-9-0.65-14.05v-9.85h7V451h-8
   l-7.2-13c-2-3.6-4.2-7.95-5.85-11.9l-0.15,0.05c0.2,4.45,0.3,9.2,0.3,14.7V451H166.2z"/>
<path class="st6" d="M210.8,417.3h7.65v27.3h13.4v6.4H210.8V417.3z"/>
<path class="st6" d="M265.3,433.8c0,11.05-6.7,17.75-16.55,17.75c-10,0-15.85-7.55-15.85-17.15c0-10.1,6.45-17.65,16.4-17.65
   C259.65,416.75,265.3,424.5,265.3,433.8z M240.95,434.25c0,6.6,3.1,11.25,8.2,11.25c5.15,0,8.1-4.9,8.1-11.45
   c0-6.05-2.9-11.25-8.15-11.25C243.95,422.8,240.95,427.7,240.95,434.25z M252.05,409.35l5.05,6.15h-5.35l-2.5-3.1h-0.1l-2.5,3.1
   h-5.3l5-6.15H252.05z M242.3,408.55c-0.05-3.5,1.55-5.65,4.1-5.65c1.25,0,2.25,0.45,3.2,1c0.85,0.4,1.55,0.85,2.2,0.85
   c0.8,0,1.15-0.4,1.3-2h3.45c0.15,4.05-1.45,5.75-4.1,5.75c-1.35,0-2.3-0.55-3.35-1.1c-0.9-0.45-1.35-0.7-2-0.7
   c-0.7,0-1.1,0.7-1.2,1.85H242.3z"/>
<path class="st6" d="M277.95,417.3V451h-7.65v-33.7H277.95z"/>
<path class="st6" d="M299.2,423.7h-9.05v-6.4h25.9v6.4h-9.2V451h-7.65V423.7z"/>
<path class="st6" d="M320.1,417.75c2.45-0.4,6.1-0.7,10.15-0.7c5,0,8.5,0.75,10.9,2.65c2,1.6,3.1,3.95,3.1,7.05
   c0,4.3-3.05,7.25-5.95,8.3v0.15c2.35,0.95,3.65,3.2,4.5,6.3c1.05,3.8,2.1,8.2,2.75,9.5h-7.8c-0.55-0.95-1.35-3.7-2.35-7.85
   c-0.9-4.2-2.35-5.35-5.45-5.4h-2.3V451h-7.55V417.75z M327.65,432.25h3c3.8,0,6.05-1.9,6.05-4.85c0-3.1-2.1-4.65-5.6-4.7
   c-1.85,0-2.9,0.15-3.45,0.25V432.25z"/>
<path class="st6" d="M358.05,442.35l-2.4,8.65h-7.9l10.3-33.7h10L378.5,451h-8.2l-2.6-8.65H358.05z M366.6,436.65l-2.1-7.15
   c-0.6-2-1.2-4.5-1.7-6.5h-0.1c-0.5,2-1,4.55-1.55,6.5l-2,7.15H366.6z"/>
<path class="st6" d="M383,451v-33.7h8.9l7,12.35c2,3.55,4,7.75,5.5,11.55h0.15c-0.5-4.45-0.65-9-0.65-14.05v-9.85h7V451h-8l-7.2-13
   c-2-3.6-4.2-7.95-5.85-11.9l-0.15,0.05c0.2,4.45,0.3,9.2,0.3,14.7V451H383z"/>
<path class="st6" d="M445.65,449.45c-2.35,0.8-6.8,1.9-11.25,1.9c-6.15,0-10.6-1.55-13.7-4.55c-3.1-2.9-4.8-7.3-4.75-12.25
   c0.05-11.2,8.2-17.6,19.25-17.6c4.35,0,7.7,0.85,9.35,1.65l-1.6,6.1c-1.85-0.8-4.15-1.45-7.85-1.45c-6.35,0-11.15,3.6-11.15,10.9
   c0,6.95,4.35,11.05,10.6,11.05c1.75,0,3.15-0.2,3.75-0.5v-7.05h-5.2v-5.95h12.55V449.45z"/>
<path class="st6" d="M486.45,450.05c-1.4,0.7-4.55,1.45-8.65,1.45c-11.65,0-17.65-7.25-17.65-16.85c0-11.5,8.2-17.9,18.4-17.9
   c3.95,0,6.95,0.8,8.3,1.5l-1.55,6.05c-1.55-0.65-3.7-1.25-6.4-1.25c-6.05,0-10.75,3.65-10.75,11.15c0,6.75,4,11,10.8,11
   c2.3,0,4.85-0.5,6.35-1.1L486.45,450.05z"/>
<path class="st6" d="M499.09,417.3v12.95h12.55V417.3h7.6V451h-7.6v-14.1h-12.55V451h-7.65v-33.7H499.09z"/>
<path class="st6" d="M558.5,411.15c0.65,1.3,1.1,2.95,1.1,4.65c0,3.05-1.7,5.1-5.35,5.45l-0.85,0.1v14.85
   c0,10.4-5.25,15.35-14.05,15.35c-8.5,0-13.5-4.7-13.5-15.45v-18.8h7.65v19.4c0,5.8,2.2,8.75,6.1,8.75c4,0,6.2-2.8,6.2-8.75v-19.4
   h5.8c2.05,0,2.6-0.65,2.6-1.95c0-1.05-0.35-2.2-1.05-3.35L558.5,411.15z"/>
<path class="st6" d="M568.64,442.35l-2.4,8.65h-7.9l10.3-33.7h10l10.45,33.7h-8.2l-2.6-8.65H568.64z M577.19,436.65l-2.1-7.15
   c-0.6-2-1.2-4.5-1.7-6.5h-0.1c-0.5,2-1,4.55-1.55,6.5l-2,7.15H577.19z"/>
<path class="st6" d="M628.44,450.05c-1.4,0.7-4.55,1.45-8.65,1.45c-11.65,0-17.65-7.25-17.65-16.85c0-11.5,8.2-17.9,18.4-17.9
   c3.95,0,6.95,0.8,8.3,1.5l-1.55,6.05c-1.55-0.65-3.7-1.25-6.4-1.25c-6.05,0-10.75,3.65-10.75,11.15c0,6.75,4,11,10.8,11
   c2.3,0,4.85-0.5,6.35-1.1L628.44,450.05z"/>
<path class="st6" d="M662.79,433.8c0,11.05-6.7,17.75-16.55,17.75c-10,0-15.85-7.55-15.85-17.15c0-10.1,6.45-17.65,16.4-17.65
   C657.14,416.75,662.79,424.5,662.79,433.8z M638.44,434.25c0,6.6,3.1,11.25,8.2,11.25c5.15,0,8.1-4.9,8.1-11.45
   c0-6.05-2.9-11.25-8.15-11.25C641.44,422.8,638.44,427.7,638.44,434.25z M655.29,409.3l-6.1,6.15h-6.1l4.2-6.15H655.29z"/>
<path class="st6" d="M678.14,443.15c2.05,1.05,5.2,2.1,8.45,2.1c3.5,0,5.35-1.45,5.35-3.65c0-2.1-1.6-3.3-5.65-4.75
   c-5.6-1.95-9.25-5.05-9.25-9.95c0-5.75,4.8-10.15,12.75-10.15c3.8,0,6.6,0.8,8.6,1.7l-1.7,6.15c-1.35-0.65-3.75-1.6-7.05-1.6
   c-3.3,0-4.9,1.5-4.9,3.25c0,2.15,1.9,3.1,6.25,4.75c5.95,2.2,8.75,5.3,8.75,10.05c0,5.65-4.35,10.45-13.6,10.45
   c-3.85,0-7.65-1-9.55-2.05L678.14,443.15z"/>
<path class="st6" d="M712.74,442.35l-2.4,8.65h-7.9l10.3-33.7h10l10.45,33.7h-8.2l-2.6-8.65H712.74z M716.24,414.95
   c0.75-2.25,2.45-2.65,2.45-4.3c0-0.9-0.65-1.5-1.45-1.5c-0.95,0-1.8,1-2.25,1.7l-2.4-1.45c1.15-2.3,3.05-3.95,6.1-3.95
   c2.7,0,4.85,1.95,4.85,4.25c0,2.95-2.4,3.5-3.8,6L716.24,414.95z M721.29,436.65l-2.1-7.15c-0.6-2-1.2-4.5-1.7-6.5h-0.1
   c-0.5,2-1,4.55-1.55,6.5l-2,7.15H721.29z"/>
<path class="st6" d="M737.69,451v-33.7h8.9l7,12.35c2,3.55,4,7.75,5.5,11.55h0.15c-0.5-4.45-0.65-9-0.65-14.05v-9.85h7V451h-8
   l-7.2-13c-2-3.6-4.2-7.95-5.85-11.9l-0.15,0.05c0.2,4.45,0.3,9.2,0.3,14.7V451H737.69z"/>
<path class="st6" d="M782.29,417.75c2.35-0.4,5.65-0.7,10.3-0.7c4.7,0,8.05,0.9,10.3,2.7c2.15,1.7,3.6,4.5,3.6,7.8
   c0,3.3-1.1,6.1-3.1,8c-2.6,2.45-6.45,3.55-10.95,3.55c-1,0-1.9-0.05-2.6-0.15V451h-7.55V417.75z M789.84,433.05
   c0.65,0.15,1.45,0.2,2.55,0.2c4.05,0,6.55-2.05,6.55-5.5c0-3.1-2.15-4.95-5.95-4.95c-1.55,0-2.6,0.15-3.15,0.3V433.05z"/>
<path class="st6" d="M818.99,417.3v12.95h12.55V417.3h7.6V451h-7.6v-14.1h-12.55V451h-7.65v-33.7H818.99z"/>
<path class="st6" d="M853.64,442.35l-2.4,8.65h-7.9l10.3-33.7h10l10.45,33.7h-8.2l-2.6-8.65H853.64z M861.34,409.35l4.5,6.15h-4.9
   l-2.2-3.15h-0.1l-2.25,3.15h-4.85l4.5-6.15H861.34z M862.19,436.65l-2.1-7.15c-0.6-2-1.2-4.5-1.7-6.5h-0.1c-0.5,2-1,4.55-1.55,6.5
   l-2,7.15H862.19z M864.99,412.4c0.7-2.1,2.5-2.6,2.5-4.15c0-0.85-0.7-1.5-1.5-1.5c-1.05,0-1.85,1-2.3,1.8l-2.25-1.35
   c1.1-2.1,2.85-3.65,5.6-3.65c2.6,0,4.5,1.7,4.5,3.95c0,2.65-2.3,3.1-3.6,5.6L864.99,412.4z"/>
<path class="st6" d="M907.09,438.1c-0.15-4.05-0.3-8.95-0.3-13.85h-0.15c-1.05,4.3-2.45,9.1-3.75,13.05l-4.1,13.15h-5.95
   l-3.6-13.05c-1.1-3.95-2.25-8.75-3.05-13.15h-0.1c-0.2,4.55-0.35,9.75-0.6,13.95l-0.6,12.8h-7.05l2.15-33.7h10.15l3.3,11.25
   c1.05,3.9,2.1,8.1,2.85,12.05h0.15c0.95-3.9,2.1-8.35,3.2-12.1l3.6-11.2h9.95l1.85,33.7h-7.45L907.09,438.1z"/>
<path class="st6" d="M927.84,430.85h3.55v-13.2c2.8-0.45,6.45-0.75,10.3-0.75c6.35,0,10.55,1.1,13.8,3.55
   c3.5,2.6,5.65,6.9,5.65,12.85c0,6.55-2.3,11.05-5.55,13.8c-3.55,2.95-8.95,4.4-15.55,4.4c-3.95,0-6.75-0.25-8.65-0.5v-14.2h-3.55
   V430.85z M945.69,436.8h-6.7v8.6c0.7,0.1,1.75,0.1,2.65,0.1c7,0,11.45-3.7,11.45-11.95c0-7.3-4.05-10.75-10.65-10.75
   c-1.65,0-2.75,0.15-3.45,0.3v7.75h6.7V436.8z"/>
<path class="st6" d="M986.24,436.75h-12.4v8h13.85V451h-21.5v-33.7h20.8v6.25h-13.15v7h12.4V436.75z M979.44,409.35l4.55,6.15
   h-4.95l-2.2-3.15h-0.1l-2.2,3.15h-4.85l4.45-6.15H979.44z M983.14,412.4c0.7-2.1,2.45-2.6,2.45-4.15c0-0.85-0.65-1.5-1.5-1.5
   c-1,0-1.8,1-2.3,1.8l-2.2-1.35c1.1-2.1,2.85-3.65,5.6-3.65c2.6,0,4.5,1.7,4.5,3.95c0,2.65-2.3,3.1-3.6,5.6L983.14,412.4z"/>
<path class="st6" d="M1010.64,417.3v12.95h12.55V417.3h7.6V451h-7.6v-14.1h-12.55V451h-7.65v-33.7H1010.64z"/>
<path class="st6" d="M1045.09,417.3V451h-7.65v-33.7H1045.09z"/>
<path class="st6" d="M1071.74,436.75h-12.4v8h13.85V451h-21.5v-33.7h20.8v6.25h-13.15v7h12.4V436.75z M1064.94,409.35l4.55,6.15
   h-4.95l-2.2-3.15h-0.1l-2.2,3.15h-4.85l4.45-6.15H1064.94z M1068.64,412.4c0.7-2.1,2.45-2.6,2.45-4.15c0-0.85-0.65-1.5-1.5-1.5
   c-1,0-1.8,1-2.3,1.8l-2.2-1.35c1.1-2.1,2.85-3.65,5.6-3.65c2.6,0,4.5,1.7,4.5,3.95c0,2.65-2.3,3.1-3.6,5.6L1068.64,412.4z"/>
<path class="st6" d="M1078.39,451v-33.7h8.9l7,12.35c2,3.55,4,7.75,5.5,11.55h0.15c-0.5-4.45-0.65-9-0.65-14.05v-9.85h7V451h-8
   l-7.2-13c-2-3.6-4.2-7.95-5.85-11.9l-0.15,0.05c0.2,4.45,0.3,9.2,0.3,14.7V451H1078.39z"/>
<path class="st6" d="M1127.54,423.7h-9.05v-6.4h25.9v6.4h-9.2V451h-7.65V423.7z"/>
<path class="st6" d="M1156.09,417.3v12.95h12.55V417.3h7.6V451h-7.6v-14.1h-12.55V451h-7.65v-33.7H1156.09z"/>
<path class="st6" d="M1190.54,417.3V451h-7.65v-33.7H1190.54z M1183.29,458.45c0-1.95,1.5-3.45,3.5-3.45c1.9,0,3.35,1.5,3.35,3.45
   c0,1.8-1.45,3.4-3.35,3.4C1184.79,461.85,1183.29,460.25,1183.29,458.45z"/>
</g>
</svg>

    </div>
    `
    }
}

kiemTraSanPham();

//Xuất giao diện mua hàng lên trang chủ
/**
 * @param  {[]} arr
 */
function xuatGiaoDienKhachHang(arr, idNode) {

    let nodeDSSANPHAM = document.getElementById(idNode);
    nodeDSSANPHAM.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
    <div class="san-pham">
    <div class="banner0">
<img src="img/New.png" /> 

</div>
<div class="banner">
 <label>Trả góp 0%</label>
</div>
<div class="banner1">
 <label>Giảm ${hamFormatGiaTien(String(arr[i].giam))}đ</label>
</div>
    <div class="hinh-anh">
   <a style = "text-decoration: none;" onclick = "viTriHinhAnh(${i})" href=#popup4>
        <img src="${arr[i].hinhAnh}" alt=""> </a>
    </div>
    <h2 class="ten ">${arr[i].ten}</h2>
    <p class="gia "> ${hamFormatGiaTien(String(arr[i].gia))}đ</p>
    <p class="khuyenMai"> <strike>${hamFormatGiaTien(String(arr[i].khuyenMai))}</strike>đ <img src="https://www.vietthuong.vn/vnt_upload/news/09_2017/top_seller_icon_1.png " /></p>
    <div class="bodybutton">
        <button class="button " name="button" value="OK" type="button"  onclick="muaNgay('${arr[i].id}')"><a>Mua ngay</a></button></br>
    </div>
</div>
`
    }
}
xuatGiaoDienKhachHang(mang, "dssp");


// Chức năng tìm kiếm sản phẩm và loại sản phẩm
mang1 = JSON.parse(localStorage.getItem('danhSachSanPhamtimkiem'));
if (mang1 == null)
    mang1 = new Array();


function timKiemSanPham() {
    let nodeInputTenCanTim = document.getElementById("ten-san-pham-tim-kiem");
    let tenSPCanTim = nodeInputTenCanTim.value;
    let hangSPCanTim = nodeInputTenCanTim.value;
    let mang1 = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].ten == tenSPCanTim) {
            mang1.push(mang[i]);

        } else if (mang[i].hang == hangSPCanTim) {
            mang1.push(mang[i]);
        } else if (tenSPCanTim == 0) {

            xuatGiaoDienKhachHang(mang, "dssp");
            return
        } else if (hangSPCanTim == 0) {

            xuatGiaoDienKhachHang(mang, "dssp");
            return
        }
    };

    var jsonmang1 = JSON.stringify(mang1)
    localStorage.setItem("danhSachSanPhamtimkiem", jsonmang1);

    xuatGiaoDienKhachHang(mang1, "dssp");
}


// Sắp xếp tăng dần cho mảng sản phẩm
function sapXepTang() {
    let mangTangDan = [];
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i].gia * 1 > mang[j].gia * 1) {
                mangTangDan = mang[j];
                mang[j] = mang[i];
                mang[i] = mangTangDan;
                xuatGiaoDienKhachHang(mang, "dssp");
            }

        }
    }

}

// Sắp xếp giảm dần cho mảng sản phẩm
function sapXepGiam() {
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i].gia * 1 < mang[j].gia * 1) {
                mangTangDan = mang[j];
                mang[j] = mang[i];
                mang[i] = mangTangDan;
                console.log(mang);
                xuatGiaoDienKhachHang(mang, "dssp");
            }

        }
    }
}


// Chúc năng lọc sản phẩm theo hãng
var mangTimKiemTheoHang = [];
mangTimKiemTheoHang = JSON.parse(localStorage.getItem('danhSachSanPhamTheoHang'));
if (mangTimKiemTheoHang == null)
    mangTimKiemTheoHang = new Array();

//a.lọc theo hãng Apple
function timKiemSanPhamIphone() {
    mangTimKiemTheoHang = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].hang == 'Apple') {

            mangTimKiemTheoHang.push(mang[i])
        }
    };
    console.log(mangTimKiemTheoHang);
    var jsonmangTimKiemTheoHang = JSON.stringify(mangTimKiemTheoHang)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoHang);

    xuatGiaoDienKhachHang(mangTimKiemTheoHang, "dssp");

}
//b.lọc theo hãng Samsung
function timKiemSanPhamSamSung() {
    mangTimKiemTheoHang = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].hang == 'Samsung') {

            mangTimKiemTheoHang.push(mang[i])
        }
    };
    console.log(mangTimKiemTheoHang);
    var jsonmangTimKiemTheoHang = JSON.stringify(mangTimKiemTheoHang)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoHang);

    xuatGiaoDienKhachHang(mangTimKiemTheoHang, "dssp");

}
//c.lọc theo hãng Xiaomi
function timKiemSanPhamXiaomi() {
    mangTimKiemTheoHang = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].hang == 'Xiaomi') {

            mangTimKiemTheoHang.push(mang[i])
        }
    };
    console.log(mangTimKiemTheoHang);
    var jsonmangTimKiemTheoHang = JSON.stringify(mangTimKiemTheoHang)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoHang);

    xuatGiaoDienKhachHang(mangTimKiemTheoHang, "dssp");

}
//d.lọc theo hãng Oppo
function timKiemSanPhamOppo() {
    mangTimKiemTheoHang = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].hang == 'Oppo') {

            mangTimKiemTheoHang.push(mang[i])
        }
    };
    console.log(mangTimKiemTheoHang);
    var jsonmangTimKiemTheoHang = JSON.stringify(mangTimKiemTheoHang)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoHang);

    xuatGiaoDienKhachHang(mangTimKiemTheoHang, "dssp");

}
// Chức năng lọc sản phẩm theo giá
var mangTimKiemTheoGia = [];
mangTimKiemTheoGia = JSON.parse(localStorage.getItem('danhSachSanPhamTheoGia'));
if (mangTimKiemTheoGia == null)
    mangTimKiemTheoGia = new Array();
//a. lọc theo giá dưới 5TR
function LocSanPhamTheoGiaDuoi5TR() {
    let mangTimKiemTheoGia = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].gia < 5000000) {

            mangTimKiemTheoGia.push(mang[i])
        }
    }
    console.log(mangTimKiemTheoGia);
    var jsonmangTimKiemTheoGia = JSON.stringify(mangTimKiemTheoGia)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoGia);

    xuatGiaoDienKhachHang(mangTimKiemTheoGia, "dssp");
}
//b. lọc theo giá từ 5TR đến 7TR
function LocSanPhamTheoGia5Den7TR() {
    let mangTimKiemTheoGia = []
    for (let i = 0; i < mang.length; i++) {
        if (5000000 <= mang[i].gia && mang[i].gia <= 7000000) {

            mangTimKiemTheoGia.push(mang[i])
        }
    }
    console.log(mangTimKiemTheoGia);
    var jsonmangTimKiemTheoGia = JSON.stringify(mangTimKiemTheoGia)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoGia);

    xuatGiaoDienKhachHang(mangTimKiemTheoGia, "dssp");
}
//c. lọc theo giá từ 7TR đến 15TR
function LocSanPhamTheoGia7Den15TR() {
    let mangTimKiemTheoGia = []
    for (let i = 0; i < mang.length; i++) {
        if (7000000 <= mang[i].gia && mang[i].gia <= 15000000) {

            mangTimKiemTheoGia.push(mang[i])
        }
    }
    console.log(mangTimKiemTheoGia);
    var jsonmangTimKiemTheoGia = JSON.stringify(mangTimKiemTheoGia)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoGia);

    xuatGiaoDienKhachHang(mangTimKiemTheoGia, "dssp");
}
//d. lọc theo giá trên 15TR
function LocSanPhamTheoGiaTren15TR() {
    let mangTimKiemTheoGia = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].gia > 15000000) {

            mangTimKiemTheoGia.push(mang[i])
        }
    }
    console.log(mangTimKiemTheoGia);
    var jsonmangTimKiemTheoGia = JSON.stringify(mangTimKiemTheoGia)
    localStorage.setItem("danhSachSanPhamTheoHang", jsonmangTimKiemTheoGia);

    xuatGiaoDienKhachHang(mangTimKiemTheoGia, "dssp");
}


function hamFormatGiaTien(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}



var vitriHinh = [];

function viTriHinhAnh(vitri) {
    vitriHinh = [];
    vitriHinh.push(vitri);
    console.log(vitriHinh);
    giaoDienHienThiHinhAnh(mang, "popupzoomhinhanh");
}


/**
 * @param  {[]} arr
 */
function giaoDienHienThiHinhAnh(arr, idNode) {
    //b1. truy cập node
    let nodeDSSANPHAM = document.getElementById(idNode);
    //b2. chạy vòng lặp
    nodeDSSANPHAM.innerHTML = ""
    nodeDSSANPHAM.innerHTML = nodeDSSANPHAM.innerHTML + `
    <div class="san-pham-sua">
        <div class="hinh-anh-sua">
           <a href = "#"> <img src="${arr[vitriHinh].hinhAnh}" alt="">   </a> 
        </div>           
    </div>
`
}

// Slide


w3.slideshow(".mySlides", 3000);


var lanbam = 0;

function openForm() {
    if (lanbam >= 1) {
        document.getElementById("myForm").style.display = "none";
        lanbam = 0;


    } else {
        document.getElementById("myForm1").style.display = "none";
        document.getElementById("myForm").style.display = "block";
        lanbam++;

    }

}

function openForm1() {
    if (lanbam >= 1) {
        document.getElementById("myForm1").style.display = "none";
        lanbam = 0;
    } else {
        document.getElementById("myForm").style.display = "none";
        document.getElementById("myForm1").style.display = "block";
        lanbam++;

    }

}