type NoticeCardProps = {
  logo: string;
};

function NoticeCard({ logo }: NoticeCardProps) {
  return (
    <section className="smartkp-notice">
      <h3>Nhận thông báo mới nhất từ thông tin chính quyền</h3>
      <div className="smartkp-oa">
        <img src={logo} alt="" />
        <div>
          <strong>UBND Phường Gò Dầu</strong>
          <span>Official Account</span>
        </div>
        <button>Quan tâm</button>
      </div>
    </section>
  );
}

export default NoticeCard;
