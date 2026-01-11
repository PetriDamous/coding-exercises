import { useAcordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionHeader({ className, children }) {
  const { toggleItem } = useAcordionContext();
  const id = useAccordionItemContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
