import { privacyOptions } from "@/datas/feedback";

function PrivacySelector() {
  return (
    <fieldset className="feedback-privacy">
      <legend>Quyền riêng tư</legend>
      <div>
        {privacyOptions.map((option, index) => (
          <label key={option}>
            <input defaultChecked={index === 0} name="privacy" type="radio" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default PrivacySelector;
