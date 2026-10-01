import { Icon } from "zmp-ui";

import { feedbackFields } from "@/datas/feedback";

import FileUpload from "./FileUpload";
import PrivacySelector from "./PrivacySelector";

function FeedbackForm() {
  return (
    <>
      <form className="feedback-form">
        {feedbackFields.map((field) => (
          <label className="feedback-field" key={field.name}>
            <span>
              {field.label}
              {field.required && <b>*</b>}
            </span>
            <input
              inputMode={field.inputMode as any}
              name={field.name}
              placeholder={field.placeholder}
            />
          </label>
        ))}

        <label className="feedback-field">
          <span>
            Nội dung <b>*</b>
          </span>
          <textarea maxLength={1000} placeholder="Mô tả chi tiết nội dung phản ánh..." />
          <small>0/1000</small>
        </label>

        <FileUpload />
        <PrivacySelector />
      </form>

      <div className="feedback-submit-bar">
        <button type="button">
          <span>Gửi phản ánh</span>
          <Icon icon="zi-send-solid" />
        </button>
      </div>
    </>
  );
}

export default FeedbackForm;
