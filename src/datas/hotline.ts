export type HotlineContact = {
  id: number;
  name: string;
  role?: string;
  phone: string;
};

export type HotlineGroup = {
  id: number;
  title: string;
  contacts: HotlineContact[];
};

export const hotlineSummary = {
  title: "Thông tin liên hệ",
  searchPlaceholder: "Tìm kiếm danh bạ...",
};

export const hotlineGroups: HotlineGroup[] = [
  {
    id: 1,
    title: "UBND PHƯỜNG GÒ DẦU",
    contacts: [
      {
        id: 1,
        name: "Trực ban UBND phường",
        role: "Tiếp nhận thông tin hành chính",
        phone: "02763851234",
      },
      {
        id: 2,
        name: "Bộ phận một cửa",
        role: "Hỗ trợ hồ sơ công dân",
        phone: "02763854567",
      },
    ],
  },
  {
    id: 2,
    title: "HỖ TRỢ KHẨN CẤP",
    contacts: [
      {
        id: 3,
        name: "Công an phường Gò Dầu",
        role: "An ninh trật tự",
        phone: "02763859888",
      },
      {
        id: 4,
        name: "Trạm y tế phường",
        role: "Tư vấn y tế ban đầu",
        phone: "02763857666",
      },
    ],
  },
];
