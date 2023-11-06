import { useCallback, useState } from "react";
import axios from "axios";

import Loader from "./ui/Loader";
import Error from "./ui/Error";
import DisplayPostalTable from "./DisplayPostalTable";
import Button from "./ui/Button";

const Base_Url = "https://api.zippopotam.us/in/";

function App() {
  const [postalCode, setPostalCode] = useState("");
  const [postalData, setPostalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPostalData = useCallback(
    async function fetchPostalData() {
      try {
        setError("");
        setIsLoading(true);
        const { data } = await axios.get(`${Base_Url}/${postalCode}`);
        console.log(data);
        setPostalData(data);
      } catch (err) {
        console.log(err);
        setError(
          "There is something wrong with your PostalCode. Please check it"
        );
      } finally {
        setIsLoading(false);
      }

      if (postalCode.length < 4) {
        setPostalData([]);
        setError("");
        return;
      }
    },

    [postalCode]
  );

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handlClick() {
    fetchPostalData();
  }

  return (
    <div className="container">
      <h1 className="title">Postal Code </h1>
      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Pincode"
            value={postalCode}
            onChange={(e) => setPostalCode(+e.target.value)}
            className="input"
          />
          <Button onClick={handlClick} className="btn-details">
            Show Details
          </Button>
        </form>
      </div>

      {isLoading && <Loader />}
      {error && <Error message={error} />}

      {!isLoading && !error && (
        <DisplayPostalTable
          postalData={postalData}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          setPostalData={setPostalData}
        />
      )}
    </div>
  );
}

export default App;
