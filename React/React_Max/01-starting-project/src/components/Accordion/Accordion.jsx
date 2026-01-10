import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAcordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "useAccordionContext must be used within an AccordionProvider"
    );
  }

  return ctx;
}

export default function Accordion({ className, children }) {
  const [openItemId, setOpenItemId] = useState(null);

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const accordionContextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
