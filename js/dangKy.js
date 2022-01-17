// Get mảng Admin
mangTaiKhoanAdmin = JSON.parse(localStorage.getItem('danhSachTaiKhoanAdmin'));
if (mangTaiKhoanAdmin == null)
    mangTaiKhoanAdmin = new Array();

// lệnh tạo tài khoản admin
function taoTaiKhoanAdmin() {

    let teninput = document.getElementById("ten-dang-nhap");
    var usermoi = teninput.value;
    let passinput = document.getElementById("mat-khau");
    var passmoi = passinput.value;
    var passx2input = document.getElementById("nhap-lai-mat-khau");
    let passmoix2 = passx2input.value;
    var emailinput = document.getElementById("email-dang-nhap");
    let emailmoi = emailinput.value;


    if (usermoi == "" || passmoi == "" || passmoix2 == "" || emailmoi == "") {
        hienThiPopUp("Bạn Chưa Nhập Đủ Thông Tin.");
        return;
    }
    if (document.getElementById('checkdieukhoan').checked) {
        if (emailmoi.includes("@") & emailmoi.includes(".")) {

            for (let i = 0; i < mangTaiKhoanAdmin.length; i++) {
                while (usermoi == mangTaiKhoanAdmin[i].user) {
                    hienThiPopUp("User của bạn đã tồn tại, mời nhập lại !!!");
                    return;
                }
                while (passmoi == mangTaiKhoanAdmin[i].pass) {
                    hienThiPopUp("Pass của bạn đã tồn tại, mời nhập lại !!!");
                    return;
                }
            }

            if (3 > String(usermoi).length || String(usermoi).length > 20) {
                hienThiPopUp("Bạn phải nhập user lớn hơn 3 kí tự và nhỏ hơn 20 kí tự.");
                return;
            }

            if (5 > String(passmoi).length) {
                hienThiPopUp("Bạn phải nhập password lớn hơn 5 kí tự.");
                return;
            }
            while (passmoix2 != passmoi) {
                hienThiPopUp("Bạn đã nhập không giống password mới, xin vui lòng nhập lại.");
                return;
            }
            hienThiPopUpOK("Đăng ký tài khoản thành công !!!");

            var adminMoi = {
                user: usermoi,
                pass: passmoi,
            }

            mangTaiKhoanAdmin.push(adminMoi);
            var jsonmangTaiKhoanAdmin = JSON.stringify(mangTaiKhoanAdmin)
            localStorage.setItem("danhSachTaiKhoanAdmin", jsonmangTaiKhoanAdmin);
        } else {
            hienThiPopUp("Không đúng định dạng Email");
            return;
        }
    } else {
        hienThiPopUp("Bạn chưa đồng ý điều khoản");
        return;
    }

}





//lệnh truy xuất admin bằng arlet
function truyXuatAdmin() {
    var mangCheckAdmin = [];
    var jsonmangTaiKhoanAdmin = JSON.stringify(mangTaiKhoanAdmin)
    localStorage.setItem("danhSachTaiKhoanAdmin", jsonmangTaiKhoanAdmin);
    mangTaiKhoanAdmin = JSON.parse(localStorage.getItem('danhSachTaiKhoanAdmin'));
    let userinput = document.getElementById("username");
    var usercheck = userinput.value;
    let passnamewordinput = document.getElementById("passnameword");
    var passcheck = passnamewordinput.value;
    for (let i = 0; i < mangTaiKhoanAdmin.length; i++) {
        if (mangTaiKhoanAdmin[i].user == usercheck && mangTaiKhoanAdmin[i].pass == passcheck) {
            mangCheckAdmin.push(mangTaiKhoanAdmin[i])
        }
    }
    if (mangCheckAdmin.length == 0) {
        hienThiPopUp("Đăng nhập quyền admin không thành công do sai user hoặc password !!!");
        return;
    }
    for (let i = 0; i < mangCheckAdmin.length; i++) {
        if ((usercheck) == (mangCheckAdmin[i].user) && (passcheck) == (mangCheckAdmin[i].pass)) {
            hienThiPopUpDangNhapOK("Đăng nhập tài khoản thành công !!!");
            console.log(mangCheckAdmin);
        }
    }
}

/**
 * @param  {string} messenger
 */
function hienThiPopUp(messenger) {
    let nodeWinNotification = document.getElementById("hienThiPopUpDangKyThanhCong");
    nodeWinNotification.innerHTML = ""
    nodeWinNotification.innerHTML = nodeWinNotification.innerHTML + `
    <div class="content">
    <img src="images/x.png"/>
    <p> ${messenger}</p>
    </div>
    `;
    setTimeout(function() {
        nodeWinNotification.innerHTML = ``;
    }, 2000);
}

/**
 * @param  {string} messenger
 */
function hienThiPopUpOK(messenger) {
    let nodeWinNotification = document.getElementById("hienThiPopUpDangKyThanhCong");
    nodeWinNotification.innerHTML = ""
    nodeWinNotification.innerHTML = nodeWinNotification.innerHTML + `
    <div class="content">
    <img src="images/ok.png"/>
    <p> ${messenger}</p>
    </div>
    `;
    setTimeout(function() {
        nodeWinNotification.innerHTML = ``;
        window.location = "dangnhap.html";
    }, 2000);
}

/**
 * @param  {string} messenger
 */
function hienThiPopUpDangNhapOK(messenger) {
    let nodeWinNotification = document.getElementById("hienThiPopUpDangKyThanhCong");
    nodeWinNotification.innerHTML = ""
    nodeWinNotification.innerHTML = nodeWinNotification.innerHTML + `
    <div class="content">
    <img src="images/ok.png"/>
    <p> ${messenger}</p>
    </div>
    `;
    setTimeout(function() {
        nodeWinNotification.innerHTML = ``;
        window.location = "khohang.html";
    }, 2000);

}