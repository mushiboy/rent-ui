import { ReactElement } from "react";

export default function Button({
  text,
  onClick,
}: {
  text: String;
  onClick?: ReactElement;
}) {
  return (
    <button type="button" className="p-3 w-20 bg-or mx-10 rounded-md text-wh">
      {text}
    </button>
  );
}
