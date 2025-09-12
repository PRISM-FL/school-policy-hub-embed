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
}

export function TabContainer({
  activeTab,
  setActiveTab,
  tabs,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div role="tablist" className="flex flex-row">
        {tabs.map(({ label }, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className="border border-black p-1"
            key={index}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="w-full">{tabs[activeTab].content}</div>
    </div>
  );
}
