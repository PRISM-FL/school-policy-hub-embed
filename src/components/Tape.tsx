import tape from "../assets/tape-img.png";

export function Tape() {
  return (
    <div>
      {" "}
      <div className="absolute -top-4 -left-6 w-16 h-12 opacity-75">
        <img src={tape} alt="" className="object-fill w-full h-full" />
      </div>
      <div className="absolute -top-4 -right-6 w-16 h-12 opacity-75">
        <img
          src={tape}
          alt=""
          className="object-fill w-full h-full scale-x-[-1]"
        />
      </div>
    </div>
  );
}
