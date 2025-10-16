import tape from "../assets/tape-img.png";

export function Tape({ vertical }: { vertical?: boolean }) {
  return (
    <div>
      {" "}
      <div
        className={[
          vertical
            ? "-bottom-6 left-[calc(50%-2rem)] w-16 h-12 rotate-[30deg]"
            : "-top-4 -left-6 w-16 h-12",
          "absolute  opacity-75",
        ].join(" ")}
      >
        <img src={tape} alt="" className="object-fill w-full h-full" />
      </div>
      <div
        className={[
          vertical
            ? "-top-6 left-[calc(50%-2rem)] w-16 h-12 rotate-[30deg]"
            : "-top-4 -right-6 w-16 h-12",
          ,
          "absolute opacity-75",
        ].join(" ")}
      >
        <img
          src={tape}
          alt=""
          className={[
            "object-fill w-full h-full",
            vertical ? "" : "scale-x-[-1]",
          ].join(" ")}
        />
      </div>
    </div>
  );
}
