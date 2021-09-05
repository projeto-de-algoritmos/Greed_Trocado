import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Checkbox from "@material-ui/core/Checkbox";

const names = {
  moeda1: "Moeda de 1c",
  moeda5: "Moeda de 5c",
  moeda10: "Moeda de 10c",
  moeda25: "Moeda de 25c",
  moeda50: "Moeda de 50c",
  moeda100: "Moeda de 1r",
  nota2: "Nota de 2",
  nota5: "Nota de 5",
  nota10: "Nota de 10",
  nota20: "Nota de 20",
  nota50: "Nota de 50",
  nota100: "Nota de 100",
};

function HomePage() {
  const [total, setTotal] = React.useState();
  const [pago, setPago] = React.useState();
  const [picks, setPicks] = React.useState({
    moeda1: false,
    moeda5: false,
    moeda10: false,
    moeda25: false,
    moeda50: false,
    moeda100: false,
    nota2: false,
    nota5: false,
    nota10: false,
    nota20: false,
    nota50: false,
    nota100: false,
  });

  const [modal, setModal] = React.useState({
    show: false,
  });
  const history = useHistory();

  function handleClose() {
    setModal({ show: false });
  }

  function handleSubmit() {
    if (total <= 0 || pago <= 0 || pago < total) {
      setModal({
        show: true,
      });
    } else {
      history.push({
        pathname: "/materiator",
        state: {
          total: total,
          pago: pago,
          picks: picks,
        },
      });
    }
  }

  const handleChangeTotal = (event) => {
    setTotal(event.target.value);
  };

  const handleChangePago = (event) => {
    setPago(event.target.value);
  };

  const handleCoinChange = (event) => {
    let newPicks = picks;
    newPicks[event.target.name] = event.target.checked;

    setPicks(newPicks);
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

      <div>
        <label className="label">
          Valor total (R$):
          <br />
          <input
            className="textField"
            type="number"
            value={total}
            step="0.01"
            precision={2}
            onChange={handleChangeTotal}
          />
          <br />
          <br />
          Valor pago (R$):
          <br />
          <input
            className="textField"
            type="number"
            value={pago}
            onChange={handleChangePago}
          />
          <div className="pickArea">
            {Object.entries(picks).map((key, value) => {
              return (
                <div key={key[0]} className="checkDiv">
                  {names[key[0]]}{" "}
                  <Checkbox
                    className="checkbox"
                    type="checkbox"
                    value={value}
                    name={key[0]}
                    onChange={handleCoinChange}
                  />
                </div>
              );
            })}
          </div>
          <br />
        </label>
        <button className="calculateButton" onClick={handleSubmit}>
          {" "}
          Trocar
        </button>
      </div>

      <Modal
        open={modal.show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="modaldiv">
          <h1>O valor pago precisa ser maior que o valor total</h1>

          <button className="calculateButton" onClick={handleClose}>
            {" "}
            Voltar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
