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
        className="p-2"
        style={{ backgroundImage: `url(${ruledBg})`, backgroundSize: "300px" }}
      >
        <div>
          <div className="mb-1">
            <img src={image} alt="dummy image" />
          </div>
          <h1 className="text-2xl font-bold pb-1 mb-2 border-b-2 border-black">
            {title}
          </h1>
          <p className="font-bold text-sm">{description}</p>
        </div>
        <div>
          <h2>Recommended Resources</h2>
          {!articles && (
            <p>
              Could not load recommended resources. Please refresh the page and
              try again.
            </p>
          )}
          {articles &&
            articles.map(({ title, excerpt, url }) => (
              <article key={url}>
                <a className="w-full h-full" href={url}>
                  <header>
                    <h3>{title}</h3>
                  </header>
                  <p>{excerpt}</p>
                </a>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
