import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  // id: string;
  image: string;
  description: string;
}

export function AudiencePanel({
  title,
  image,
  id,
  description,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div>
        <div>
          <img src={image} alt="dummy image" />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <h2>Recommended Resources</h2>
        <article>
          <header>
            <h3>Article One</h3>
          </header>
          <p>article description</p>
        </article>
        <article>
          <header>
            <h3>Article Two</h3>
          </header>
          <p>article description</p>
        </article>
      </div>
    </div>
  );
}
