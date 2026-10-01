import bg1 from "@/static/icon/bg1.jpg";
import bg2 from "@/static/icon/bg2.jpg";
import binhDanHocVuSo from "@/static/icon/binhdanhocvuso.png";
import duLich from "@/static/icon/dulich.png";
import duongDayNong from "@/static/icon/duongdaynong.png";
import logo from "@/static/icon/logo1.jpg";
import nopHoSoTrucTuyen from "@/static/icon/nophosotructuyen.png";
import phanAnhKienNghi from "@/static/icon/phananhkiennghi.png";
import sanPhamDiaPhuong from "@/static/icon/sanphamdiaphuong.png";
import thanhToanTrucTuyen from "@/static/icon/thanhtoantructuyen.png";
import thongBaoKhan from "@/static/icon/thongbaokhan.png";
import tinTucDiaPhuong from "@/static/icon/tintucdiaphuong.png";
import traCuuHoSo from "@/static/icon/tracuuhoso.png";
import traCuuThuTucHanhChinh from "@/static/icon/tracuuthutuchanhchinh.png";
import troLyAoHanhChinhCong from "@/static/icon/trolyaohanhchinhcong.png";

export const homeImages = {
  bg1,
  bg2,
  logo,
};

export const utilities = [
  {
    title: "Nộp hồ sơ trực tuyến",
    icon: nopHoSoTrucTuyen,
    href: "https://dichvucong.gov.vn/?typeInapp=1",
  },
  { title: "Tra cứu hồ sơ", icon: traCuuHoSo , href: "https://vpcp.dichvucong.gov.vn/p/home/dvc-tra-cuu-ho-so.html?typeInapp=1"},
  { title: "Tra cứu thủ tục hành chính", icon: traCuuThuTucHanhChinh, href: "https://dichvucong.gov.vn/tra-cuu-thu-tuc/danh-sach?typeInapp=1" },
  { title: "Thanh toán trực tuyến", icon: thanhToanTrucTuyen, href: "https://dichvucong.gov.vn/thanh-toan-truc-tuyen?typeInapp=1" },
  { title: "Trợ lý ảo hành chính công", icon: troLyAoHanhChinhCong },
  { title: "Tin tức địa phương", icon: tinTucDiaPhuong, path: "/news" },
  { title: "Phản ánh kiến nghị", icon: phanAnhKienNghi, path: "/feedback" },
  { title: "Du lịch", icon: duLich, path: "/tourism" },
  { title: "Sản phẩm địa phương", icon: sanPhamDiaPhuong },
  { title: "Thông báo khẩn", icon: thongBaoKhan },
  { title: "Bình dân học vụ số", icon: binhDanHocVuSo },
  { title: "Đường dây nóng", icon: duongDayNong },
];

export const bottomTabs = [
  { label: "Trang chủ", icon: "zi-home", path: "/", active: true },
  { label: "Phản ánh", icon: "zi-chat", path: "/feedback" },
  { label: "Thông báo", icon: "zi-notif", path: "/notifications" },
  { label: "Cá nhân", icon: "zi-user", path: "/profile" },
];
