import coffeehouse from "@/static/image/coffeehouse.jpg";
import nhanghianhbao from "@/static/image/nhanghianhbao.jpg";
import tremocquan from "@/static/image/tremocquan.jpg";

export const tourismDayFilters = ["1 ngày", "2 ngày", "3 ngày", "5+ ngày"];

export const tourismTripSummary = {
  title: "Lịch trình du lịch",
  availableCount: 0,
  searchPlaceholder: "Tìm kiếm lịch trình...",
  emptyTitle: "Không tìm thấy lịch trình phù hợp",
  emptyDescription: "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm",
};

export const tourismCategories = [
  { label: "Tất cả", icon: "zi-more-grid" },
  { label: "Ẩm thực", icon: "zi-more-grid" },
  { label: "Lưu trú", icon: "zi-home" },
  { label: "Vui Chơi - Tham quan", icon: "zi-more-grid" },
];

export const tourismPlaces = [
  {
    id: 1,
    name: "Tre Mộc Quán Tây Ninh",
    address: "Phường Gò Dầu, Tây Ninh",
    category: "Ẩm thực",
    time: "10:00 - 22:00",
    image: tremocquan,
    introTitle: "TRE MỘC QUÁN TÂY NINH",
    description: [
      "Tre Mộc Quán Tây Ninh là điểm dừng chân ẩm thực phù hợp cho gia đình, nhóm bạn và du khách khi đến Phường Gò Dầu.",
      "Không gian quán thoáng mát, gần gũi, phục vụ các món ăn địa phương và thực đơn quen thuộc.",
      "Thời gian phục vụ: 10:00 - 22:00.",
    ],
    gallery: [tremocquan, coffeehouse, nhanghianhbao],
    phone: "0961568433",
  },
  {
    id: 2,
    name: "Bò tơ 5 Sánh",
    address: "Phường Gò Dầu, Tây Ninh",
    category: "Ẩm thực",
    time: "10:00 - 22:00",
    image: nhanghianhbao,
    introTitle: "BÒ TƠ 5 SÁNH",
    description: [
      "Bò tơ 5 Sánh là địa điểm ẩm thực phục vụ các món bò tơ đặc trưng, phù hợp cho khách du lịch và người dân địa phương.",
      "Không gian phục vụ rộng rãi, thuận tiện cho nhóm khách và các buổi gặp mặt.",
      "Thời gian phục vụ: 10:00 - 22:00.",
    ],
    gallery: [nhanghianhbao, tremocquan, coffeehouse],
    phone: "0961568433",
  },
  {
    id: 3,
    name: "Coffee House Gò Dầu",
    address: "Phường Gò Dầu, Tây Ninh",
    category: "Ẩm thực",
    time: "07:00 - 22:00",
    image: coffeehouse,
    introTitle: "COFFEE HOUSE GÒ DẦU",
    description: [
      "Coffee House Gò Dầu là điểm hẹn nhẹ nhàng cho người dân và du khách cần không gian nghỉ chân, trò chuyện hoặc làm việc.",
      "Quán có nhiều lựa chọn đồ uống, không gian thoải mái và vị trí thuận tiện.",
      "Thời gian phục vụ: 07:00 - 22:00.",
    ],
    gallery: [coffeehouse, tremocquan, nhanghianhbao],
    phone: "0961568433",
  },
  {
    id: 4,
    name: "Nhà nghỉ cao cấp Anh Bảo 5",
    address: "Phường Gò Dầu, Tây Ninh",
    category: "Lưu trú",
    time: "07:00 - 22:00",
    image: nhanghianhbao,
    introTitle: "NHÀ NGHỈ CAO CẤP ANH BẢO 5",
    description: [
      "Nhà nghỉ cao cấp Anh Bảo 5 là địa điểm lưu trú tiện nghi, phù hợp cho khách du lịch, khách công tác và người dân có nhu cầu nghỉ ngơi.",
      "Phòng nghỉ được bố trí sạch sẽ, thoáng mát và trang bị các tiện ích cơ bản.",
      "Không gian riêng tư, yên tĩnh, phù hợp cho khách cần lưu trú khi đến Phường Gò Dầu và các khu vực lân cận.",
      "Thời gian phục vụ: 07:00 - 22:00.",
    ],
    gallery: [coffeehouse, tremocquan, nhanghianhbao],
    phone: "0961568433",
  },
  {
    id: 5,
    name: "Điểm tham quan trung tâm Gò Dầu",
    address: "Phường Gò Dầu, Tây Ninh",
    category: "Vui Chơi - Tham quan",
    time: "08:00 - 17:00",
    image: tremocquan,
    introTitle: "ĐIỂM THAM QUAN TRUNG TÂM GÒ DẦU",
    description: [
      "Điểm tham quan trung tâm Gò Dầu là nơi phù hợp để du khách tìm hiểu nhịp sống địa phương và khám phá không gian đô thị mới.",
      "Khu vực thuận tiện di chuyển, gần các tiện ích và dịch vụ thiết yếu.",
      "Thời gian phục vụ: 08:00 - 17:00.",
    ],
    gallery: [tremocquan, coffeehouse, nhanghianhbao],
    phone: "0961568433",
  },
];
