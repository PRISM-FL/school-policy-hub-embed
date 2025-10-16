import type { PolicyHubArticle } from "../types";
import ruledBg from "../assets/ruled-bg.png";
import type { HTMLAttributes } from "react";
import { ellipsify } from "../lib/format";
import { resourceCharacterLimit } from "../config";
import { Tape } from "./Tape";

interface Props extends HTMLAttributes<HTMLDivElement> {
  articles?: PolicyHubArticle[] | null;
}

export function RecentResources({ articles, ...props }: Props) {
  return (
    <div className="bg-accent-color p-2 md:h-[500px] " {...props}>
      <div
        className="w-full h-full p-4 pt-16 flex flex-col"
        style={{ backgroundImage: `url(${ruledBg})`, backgroundSize: "700px" }}
      >
        {" "}
        <h1 className="text-center text-3xl font-header font-bold mb-4">
          Recently Updated
        </h1>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 gap-y-10 flex-1">
          {!articles && (
            <p>
              Could not load recommended resources. Please refresh the page and
              try again.
            </p>
          )}
          {articles &&
            articles.map(({ title, excerpt, url }) => (
              <article
                key={title + url}
                className="flex flex-col text-white h-full "
              >
                <a
                  className="w-full h-full bg-fg-color p-2 relative"
                  href={url}
                >
                  <Tape vertical />

                  <header className="border-b-2 border-white pb-1 mb-1">
                    <h3 className="text-xl font-header font-bold">{title}</h3>
                  </header>
                  <p>{ellipsify(excerpt, resourceCharacterLimit)}</p>
                </a>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
