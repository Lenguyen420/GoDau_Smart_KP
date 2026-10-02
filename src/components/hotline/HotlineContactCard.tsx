import { Icon } from "zmp-ui";

import type { HotlineContact } from "@/datas/hotline";

type HotlineContactCardProps = {
  contact: HotlineContact;
};

function HotlineContactCard({ contact }: HotlineContactCardProps) {
  return (
    <li className="hotline-contact-card">
      <div className="hotline-contact-card__icon">
        <Icon icon="zi-call" />
      </div>
      <div className="hotline-contact-card__info">
        <strong>{contact.name}</strong>
        {contact.role && <span>{contact.role}</span>}
        <b>{contact.phone}</b>
      </div>
      <a aria-label={`Gọi ${contact.name}`} href={`tel:${contact.phone}`}>
        <Icon icon="zi-call" />
      </a>
    </li>
  );
}

export default HotlineContactCard;
