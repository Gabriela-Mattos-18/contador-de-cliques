import { useState } from "react";
import "./styles.css";

function useContador(valorInicial = 0) {
  const [count, setCount] = useState(valorInicial);

  const incrementar = () => {
    setCount((prev) => prev + 1);
  };

  return { count, incrementar };
}

export default function Contador() {
  const { count, incrementar } = useContador(0);

  return (
    <div className="container">
      <h1 className="titulo">
        Cliquei{" "}
        <span key={count} className="animacao">
          {count}
        </span>{" "}
        vezes
      </h1>

      <button className="botao" onClick={incrementar}>
        +1
      </button>
    </div>
  );
}
