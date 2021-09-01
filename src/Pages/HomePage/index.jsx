import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const [total, setTotal] = React.useState();
  const [pago, setPago] = React.useState();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    history.push({ 
      pathname: "/materiator",
      state: { 
        total: total,
        pago: pago
      },
    });
  }

  const handleChangeTotal = (event) => {
    setTotal(event.target.value);
  };

  const handleChangePago = (event) => {
    setPago(event.target.value);
  };

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

      <form onSubmit={handleSubmit}>
        <label className="label">
          Valor total (R$):
          <br />
          <input className="textField" type="number" value={total} onChange={handleChangeTotal}/>
          <br />
          <br />
          Valor pago (R$):
          <br />
          <input className="textField" type="number" value={pago} onChange={handleChangePago}/>
          <br />
        </label>
        <input className="calculateButton" type="submit" value="Calcular"/>
      </form>

    </div>
  );
}

export default HomePage;
