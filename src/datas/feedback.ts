export const feedbackTabs = ["Gửi phản ánh", "Danh sách", "Lịch sử"];

export const feedbackFields = [
  {
    label: "Họ và tên",
    name: "fullName",
    placeholder: "Nhập họ và tên",
    required: true,
  },
  {
    label: "Số điện thoại",
    name: "phone",
    placeholder: "Nhập số điện thoại",
    required: true,
    inputMode: "tel",
  },
  {
    label: "Địa phương",
    name: "ward",
    placeholder: "Nhập địa phương",
  },
  {
    label: "Tiêu đề",
    name: "title",
    placeholder: "Nhập tiêu đề phản ánh",
    required: true,
  },
];

export const privacyOptions = ["Công khai", "Ẩn danh"];

export const emptyFeedbackMessage = "Chưa có phản ánh nào.";
