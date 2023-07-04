import { Koder } from "../types/common.types";

interface Props {
  koder: Koder;
  onDelete: () => void;
}

export default function KoderCard(props: Props) {
  const name = `${props.koder.firstName} ${props.koder.lastName}`;
  const img = `https://api.dicebear.com/6.x/notionists/svg?backgroundType=gradientLinear&seed=${name}`;

  return (
    <article className="flex flex-row w-full max-w-md mx-auto items-center justify-between border border-white/5 p-2 rounded">
      <img src={img} alt="koder" className="h-16 rounded-full" />
      <p>{name}</p>
      <button
        onClick={props.onDelete}
        className="bg-red-500 p-1 w-6 h-6 flex justify-center items-center rounded font-semibold"
      >
        X
      </button>
    </article>
  );
}
