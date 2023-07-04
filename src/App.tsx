import { useState } from "react";
import { Koder } from "./types/common.types";
import KoderCard from "./components/KoderCard";

export default function App() {
  const [koders, setKoders] = useState<Koder[]>([]);
  const [koderFirstName, setKoderFirstName] = useState("");
  const [koderLastName, setKoderLastName] = useState("");

  function onAddItem() {
    if (koderFirstName && koderLastName) {
      const koder: Koder = {
        firstName: koderFirstName,
        lastName: koderLastName,
      };
      setKoders([koder, ...koders]);
      setKoderFirstName("");
      setKoderLastName("");
    } else {
      alert("Falta llenar un campo");
    }
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onAddItem();
    }
  }

  function onDelete(indexToDelete: number) {
    koders.splice(indexToDelete, 1);
    setKoders([...koders]);
  }

  function empty() {
    setKoders([]);
  }

  return (
    <main className="bg-black min-h-screen flex items-center text-white p-10 flex-col gap-10">
      <h1 className="text-3xl">Koders</h1>

      <section className="flex flex-row gap-2 w-full justify-center max-w-md">
        <input
          id="text"
          type="text"
          placeholder="Nombre"
          className="bg-black border border-white/10 rounded w-full p-3"
          onChange={(event) => setKoderFirstName(event.target.value)}
          onKeyUp={onEnter}
          value={koderFirstName}
        />
        <input
          id="text"
          type="text"
          placeholder="Apellido"
          className="bg-black border border-white/10 rounded w-full p-3"
          onChange={(event) => setKoderLastName(event.target.value)}
          onKeyUp={onEnter}
          value={koderLastName}
        />
        <button
          type="submit"
          className="bg-white text-black flex items-center justify-center p-2 rounded w-1/5"
          onClick={onAddItem}
        >
          +
        </button>
      </section>

      <section className="w-full flex flex-col gap-3">
        {koders.map((koder, index) => {
          return (
            <KoderCard
              key={`koder-${index}`}
              onDelete={() => onDelete(index)}
              koder={koder}
            />
          );
        })}
      </section>

      <button
        className="bg-purple-500 w-full max-w-md p-2 rounded"
        onClick={empty}
      >
        🗑️ BORRAR TODO 🗑️
      </button>
    </main>
  );
}
