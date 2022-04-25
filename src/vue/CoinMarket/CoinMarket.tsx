import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { CoinMarketChart } from "../../components";


const CoinMarket: React.FC = () => {
  const [coins, setCoin] = useState<[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets`)
      .then((res) => res.json())
      .then((result) => {
        setCoin(result.data);
      });
  }, []);

  const handleInputChange = (eventKey: any) => {
    setSelectedCoin(eventKey);
  };

  return (
    <div>
      <Dropdown
        onSelect={handleInputChange}
        className="mt-3 d-flex justify-content-center"
      >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {selectedCoin ? selectedCoin : "bitcoin"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {coins.map((item: any) => (
            <Dropdown.Item key={item.id} eventKey={item.id}>
              {item.id}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <CoinMarketChart selectedCoin={selectedCoin} />
    </div>
  );
};

export default CoinMarket;
