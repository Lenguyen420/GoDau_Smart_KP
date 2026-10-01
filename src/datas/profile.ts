import avatar from "@/static/image/avarta.jpg";

export const profileUser = {
  avatar,
  name: "Nguyễn Văn A",
  zaloId: "73646288855923172...",
  phone: "0123456789",
};

export const profileInfoCards = [
  {
    label: "Zalo ID",
    value: profileUser.zaloId,
    icon: "zi-user-circle",
    tone: "blue",
  },
  {
    label: "Số điện thoại",
    value: profileUser.phone,
    icon: "zi-call",
    tone: "green",
  },
];

export const profileActivityCards = [
  {
    title: "Mã giới thiệu",
    description: "Nhận và nhập mã bạn bè",
    icon: "zi-star",
    tone: "purple",
  },
  {
    title: "Phản ánh của bạn",
    description: "Theo dõi lịch sử xử lý",
    icon: "zi-warning",
    tone: "blue",
  },
];

export const profileUtilities = [
  {
    title: "Ghim ứng dụng ra màn hình",
    icon: "zi-upload",
    tone: "blue",
  },
  {
    title: "Giới thiệu ứng dụng",
    icon: "zi-info-circle",
    tone: "green",
  },
  {
    title: "Đổi giao diện",
    icon: "zi-auto",
    tone: "orange",
  },
];
