import xoai from "@/static/image/xoai.jpg";

export type LocalProduct = {
  id: number;
  name: string;
  address: string;
  category: string;
  producer: string;
  price: string;
  rating: number;
  ocopRank: number;
  image: string;
  gallery: string[];
  phone: string;
  introTitle: string;
  description: string[];
};

export const localProductSummary = {
  title: "Sản phẩm OCOP",
  subtitle: "Phường Gò Dầu",
  searchPlaceholder: "Tìm kiếm sản phẩm OCOP...",
  programTitle: "Chương trình OCOP",
  programDescription: "Mỗi xã một sản phẩm - Nâng tầm nông sản địa phương Phường Gò Dầu.",
};

export const localProductCategories = [
  { label: "Tất cả", icon: "zi-more-grid" },
  { label: "Trái cây", icon: "zi-home" },
];

export const localProducts: LocalProduct[] = [
  {
    id: 1,
    name: "Xoài Gò Dầu",
    address: "Phường Gò Dầu, tỉnh Tây Ninh",
    category: "Trái cây",
    producer: "Hợp tác xã xoài Gò Dầu",
    price: "35.000",
    rating: 4,
    ocopRank: 4,
    image: xoai,
    gallery: [xoai],
    phone: "0961568433",
    introTitle: "Giới thiệu sản phẩm",
    description: [
      "Xoài Gò Dầu là sản phẩm nông sản địa phương được tuyển chọn từ những vườn xoài chăm sóc theo quy trình ổn định, trái có hương thơm tự nhiên, thịt chắc và vị ngọt thanh.",
      "Sản phẩm phù hợp dùng trực tiếp, làm quà biếu hoặc chế biến thành các món tráng miệng. Quy trình thu hoạch và đóng gói được thực hiện tại địa phương, góp phần nâng cao giá trị nông sản Phường Gò Dầu.",
      "Sản phẩm đạt chứng nhận OCOP 4 sao theo chương trình Mỗi xã một sản phẩm của tỉnh, thể hiện bản sắc và thế mạnh nông nghiệp của địa phương.",
    ],
  },
];
