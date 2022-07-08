import React, { useState, useEffect } from "react";
import APIService from "./APIService";

export default function BeerComponent() {
  const [beers, setBeers] = useState([]);

  function buttoncomponentDidMount() {
    APIService.getBeers()
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setBeers(data.beers);
        console.log(beers);
      })
      .catch(function (ex) {
        console.log(ex);
        console.log("Response parsing failed. Error: ", ex);
      });
  }

  return (
    <div>
      <button onClick={buttoncomponentDidMount}>Beer Button</button>
      <h2 className="text-center">Beer Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Beer Id</th>
            <th>Beer Name</th>
            <th>
              {beers &&
                beers.length > 0 &&
                beers.map((item) => <p>{item.beerCompanyName}</p>)}
            </th>
          </tr>
        </thead>
        <tbody></tbody>
        {/* <tbody>
                        {
                            beers.map(beer =>
                                    <tr key={beer.userId}>
                                        <td>{beer.id}</td>
                                        <td>{beer.title}</td>
                                    </tr>
                            )
                        }
                    </tbody> */}
      </table>
    </div>
  );
}
