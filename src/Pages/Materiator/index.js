import "./style.css";
import trocador from "../../algorithm";

function Materiator(history) {

  let total = history.location.state.total;
  let pago = history.location.state.pago;

  console.log("total:", total)
  console.log("pago:", pago)

  let resultado = trocador(total, pago)
  console.log("resultado:", resultado)

  return (
    <>
      <h1 className="question"> Quais matérias c já fez?</h1>


      
    </>
  );
}

export default Materiator;
