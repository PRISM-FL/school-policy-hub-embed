import type { HTMLAttributes } from "react";
import type { PolicyHubArticle } from "../types";
import ruledBg from "../assets/ruled-bg.png";
import { ellipsify } from "../lib/format";
import { excerptCharacterLimit } from "../config";
import { Tape } from "./Tape";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  // id: string;
  image: string;
  description: string;
  articles?: PolicyHubArticle[] | null;
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
        className="p-4 pb-16 md:flex md:flex-row gap-4"
        style={{
          backgroundImage: `url(${ruledBg})`,
          backgroundSize: "700px",
        }}
      >
        <div className="flex-1">
          <div className="mb-1">
            <img src={image} alt="dummy image" />
          </div>
          <h1 className="text-3xl font-header font-bold pb-1 mb-2 border-b-2 border-black">
            {title}
          </h1>
          <p className="font-medium">{description}</p>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-bold font-header text-2xl pb-1 mb-2 border-b-2 border-black">
            Recommended Resources
          </h2>
          <div className="flex flex-col gap-4 md:flex-1">
            {!articles && (
              <p>
                Could not load recommended resources. Please refresh the page
                and try again.
              </p>
            )}
            {articles &&
              articles.map(({ title, excerpt, url }) => (
                <article
                  key={title + url}
                  className="flex flex-col text-white md:flex-1"
                >
                  <a
                    className="w-full h-full bg-fg-color p-2 relative"
                    href={url}
                  >
                    <Tape />

                    <header className="border-b-2 border-white pb-1 mb-1">
                      <h3 className="text-xl font-header font-bold">{title}</h3>
                    </header>
                    <p>{ellipsify(excerpt, excerptCharacterLimit)}</p>
                  </a>
                </article>
              ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
