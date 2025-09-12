import { useState } from "react";
import { TabContainer } from "./components/TabContainer";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <TabContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={[
          { label: "For Students", content: "students" },
          { label: "For Teachers", content: "teachers" },
          { label: "For Parents", content: "parents" },
        ]}
      />
    </>
  );
}

export default App;
