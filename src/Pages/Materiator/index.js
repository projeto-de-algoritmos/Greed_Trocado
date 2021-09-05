import "./style.css";
import trocador from "../../algorithm";

function Materiator(history) {
  let total = history.location.state.total;
  let pago = history.location.state.pago;
  let picks = history.location.state.picks;

  console.log("total:", total);
  console.log("pago:", pago);

  let resultado = trocador(total, pago, picks);
  console.log("resultado:", resultado);

  return (
    <>
      <h1 className="title"> Troco: </h1>

      {Object.entries(resultado).map((key, value) => {
        return (
          <>
            {" "}
            {key[1]} de {key[0]}
            <br></br>
          </>
        );
      })}
    </>
  );
}

export default Materiator;
