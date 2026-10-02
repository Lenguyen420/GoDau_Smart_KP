import HotlineContactCard from "@/components/hotline/HotlineContactCard";
import type { HotlineGroup as HotlineGroupType } from "@/datas/hotline";

type HotlineGroupProps = {
  group: HotlineGroupType;
};

function HotlineGroup({ group }: HotlineGroupProps) {
  return (
    <section className="hotline-group">
      <h2>{group.title}</h2>
      <ul>
        {group.contacts.map((contact) => (
          <HotlineContactCard contact={contact} key={contact.id} />
        ))}
      </ul>
    </section>
  );
}

export default HotlineGroup;
