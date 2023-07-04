interface Props {
  text: string;
  onDelete: () => void;
}

export default function Item(props: Props) {
  return (
    <div className="flex flex-row gap-4 w-full max-w-md mx-auto items-center justify-between border border-white/5 p-2 rounded">
      <span>{props.text}</span>
      <button
        onClick={props.onDelete}
        className="bg-red-500 p-1 w-6 h-6 flex justify-center items-center rounded font-semibold"
      >
        X
      </button>
    </div>
  );
}
