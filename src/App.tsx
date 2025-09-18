import { useEffect, useState } from "react";
import { TabContainer } from "./components/TabContainer";
import { AudiencePanel } from "./components/AudiencePanel";
import type { PolicyHubArticle } from "./types";
import { getFeaturedArticles, getRecentArticles } from "./lib/api";
import { RecentResources } from "./components/RecentResources";
import { BinderRings } from "./components/BinderRings";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [studentArticles, setStudentArticles] = useState<
    [PolicyHubArticle, PolicyHubArticle] | null
  >();

  const [parentArticles, setParentArticles] = useState<
    [PolicyHubArticle, PolicyHubArticle] | null
  >();
  const [teacherArticles, setTeacherArticles] = useState<
    [PolicyHubArticle, PolicyHubArticle] | null
  >();

  const [recentArticles, setRecentArticles] = useState<
    [PolicyHubArticle, PolicyHubArticle, PolicyHubArticle] | null
  >();

  useEffect(() => {
    getFeaturedArticles("students")
      .then(setStudentArticles)
      .catch((err) => {
        console.error(err);
      });
    getFeaturedArticles("teachers")
      .then(setTeacherArticles)
      .catch((err) => {
        console.error(err);
      });
    getFeaturedArticles("parents")
      .then(setParentArticles)
      .catch((err) => {
        console.error(err);
      });

    getRecentArticles()
      .then(setRecentArticles)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <TabContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={[
          {
            label: "For Students",
            content: (
              <AudiencePanel
                title="For Students"
                image="https://static.wixstatic.com/media/9eef37_f95529348d234d7b8061e61eeba73662~mv2.jpg/v1/fill/w_850,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo-1571260899304-425eee4c7efc_q%3D80%26w%3D.jpg"
                description="We can give you the tools to understand your rights and confidently navigate school policies that affect your daily life. From bathroom access and mental health support to name and pronoun use, you’ll learn how the rules work, what options you have, and where to turn for help if something isn’t right."
                articles={studentArticles}
              />
            ),
          },
          {
            label: "For Teachers",
            content: (
              <AudiencePanel
                title="For Teachers"
                image="https://static.wixstatic.com/media/9eef37_fa00e4788a8d4ec4a1b090234a85d465~mv2.jpg/v1/fill/w_850,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/adam-winger-UFG04g43hqs-unsplash.jpg"
                description="We provide guidance for supporting LGBTQ+ students while meeting your legal and professional responsibilities. It covers what the law says, how to handle sensitive topics, and ways to create an inclusive environment within the boundaries of district policy and state law."
                articles={teacherArticles}
              />
            ),
          },
          {
            label: "For Parents",
            content: (
              <AudiencePanel
                title="For Parents"
                image="https://static.wixstatic.com/media/9eef37_1d06971291104d9f9e878b136984df74~mv2.jpg/v1/fill/w_850,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cdc-20YP7NENJzk-unsplash.jpg"
                description="We'll equip you with the knowledge and resources to ensure your child’s safety, dignity, and equal treatment in school. It covers how Florida laws and district policies impact LGBTQ+ students, what rights you have as a parent, and practical steps you can take to advocate effectively on your child’s behalf."
                articles={parentArticles}
              />
            ),
          },
        ]}
      />
      <BinderRings />
      <div className="bg-bg-color p-2 rounded-b-lg">
        <RecentResources articles={recentArticles} />
      </div>
    </div>
  );
}

export default App;
