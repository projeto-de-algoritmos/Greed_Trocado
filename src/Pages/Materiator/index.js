import "./style.css";
import MSelector from "../../Components/MateriaSelector/MSelector";

function Materiator(history) {

  let total = history.location.state.total;
  let pago = history.location.state.pago;

  console.log("total", total)
  console.log("pago", pago)

  return (
    <>
      <h1 className="question"> Quais matérias c já fez?</h1>


      <MSelector></MSelector>
    </>
  );
}

export default Materiator;
