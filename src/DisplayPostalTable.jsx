import DisplayPostalInfo from "./DisplayPostalInfo";
import Button from "./ui/Button";

function DisplayPostalTable({ postalData, setPostalData, setPostalCode }) {
  function handleClear() {
    setPostalData([]);
    setPostalCode("");
  }

  return (
    <>
      {postalData?.places?.length > 0 && (
        <>
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>State</th>
                  <th>Place</th>
                  <th>Country Abbrviation</th>
                  <th>Pincode</th>
                </tr>
              </thead>
              <tbody>
                <DisplayPostalInfo postalData={postalData} />
              </tbody>
            </table>
          </div>

          <div>
            <Button onClick={handleClear}>Clear</Button>
          </div>
        </>
      )}
    </>
  );
}

export default DisplayPostalTable;
