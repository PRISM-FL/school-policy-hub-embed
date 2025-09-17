import type { HTMLAttributes } from "react";
import type { PolicyHubArticle } from "../types";
import ruledBg from "../assets/ruled-bg.png";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  // id: string;
  image: string;
  description: string;
  articles?: [PolicyHubArticle, PolicyHubArticle] | null;
}

export function AudiencePanel({
  title,
  image,
  id,
  description,
  articles,
  ...props
}: Props) {
  return (
    <div {...props} className="bg-accent-color p-2">
      <div
        className="p-4"
        style={{ backgroundImage: `url(${ruledBg})`, backgroundSize: "300px" }}
      >
        <div>
          <div className="mb-1">
            <img src={image} alt="dummy image" />
          </div>
          <h1 className="text-3xl font-header font-bold pb-1 mb-2 border-b-2 border-black">
            {title}
          </h1>
          <p className="font-medium font-header">{description}</p>
        </div>
        <div>
          <h2 className="font-bold font-header text-2xl pb-1 mb-2 border-b-2 border-black">
            Recommended Resources
          </h2>
          <div className="flex flex-col gap-4">
            {!articles && (
              <p>
                Could not load recommended resources. Please refresh the page
                and try again.
              </p>
            )}
            {articles &&
              articles.map(({ title, excerpt, url }) => (
                <article key={url} className="flex flex-col text-white">
                  <a className="w-full h-full bg-fg-color p-2" href={url}>
                    <header className="border-b-2 border-white pb-1 mb-1">
                      <h3 className="text-xl font-header font-bold">{title}</h3>
                    </header>
                    <p>{excerpt}</p>
                  </a>
                </article>
              ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
