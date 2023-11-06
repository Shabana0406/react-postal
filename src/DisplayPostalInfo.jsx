function DisplayPostalInfo({ postalData }) {
  return (
    <>
      {postalData?.places?.map((place, index) => (
        <tr key={place["place name"]}>
          <td>{postalData.country}</td>
          <td>{place.state}</td>
          <td>{place["place name"]}</td>
          <td>{postalData["country abbreviation"]}</td>
          <td>{postalData["post code"]}</td>
        </tr>
      ))}
    </>
  );
}

export default DisplayPostalInfo;
