import "./style.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  function handleSubmit() {
    // alert('Um nome foi enviado:');
    history.push({ pathname: "/materiator" });
  }

  return (
    <div className="HomePage">
      <h3 className="question">
        {" "}
        Digite e valor total e o valor pago. <br />
        Clique em "Calcular" para calcular o troco
      </h3>
      <br />
      <br />
      <br />

      <form  onSubmit={handleSubmit}>
        <label className="label">
          Valor total (R$):
          <br />
          <input className="textField" type="number" name="total" />
          <br />
          <br />
          Valor pago (R$):
          <br />
          <input className="textField" type="number" name="pago" />
          <br />
        </label>
        <input className="calculateButton" type="submit" value="Calcular"/>
      </form>
    </div>
  );
}

export default HomePage;
