import type {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";

type Tab = { label: ReactNode; content: ReactNode };
interface Props extends HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  contentClassName?: string;
}

export function TabContainer({
  activeTab,
  setActiveTab,
  tabs,
  contentClassName,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div role="tablist" className="flex flex-row border-b border-black">
        {tabs.map(({ label }, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className="border border-b-0 border-black p-1"
            key={index}
            id={`${label}-tab`}
            aria-selected={activeTab === index ? "true" : "false"}
            aria-controls={`${label}-panel`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={["w-full", contentClassName].join(" ")}>
        {tabs.map(({ label, content }, index) => (
          <div
            id={`${label}-panel`}
            key={`${label}-${index}`}
            className="w-full h-full"
            hidden={activeTab === index ? false : true}
            role="tabpanel"
            tabIndex={index}
            aria-labelledby={`${label}-tab`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
