import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [number, setNumber] = useState("");
  const [fact, setFact] = useState("");
  const [loader, setLoader] = useState(false);

  const getFact = () => {
    if (number) {
      setLoader(true)
      axios
        .get(`http://numbersapi.com/${number}`)
        .then((res) => {
          setFact(res.data)
          setLoader(false)
          setNumber('')
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      alert("Please enter a number")
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 mx-auto my-3">
            <h4 className="text-center my-3">Number Facts App</h4>
            <div className="card text-center">
              <div className="card-body">
                < input
                  type="text"
                  className="form-control shadow-none mt-4"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                  placeholder="Enter A Number"
                />
                <div className="text-center my-4">
                  <button className="btn btn-dark border-0 shadow-none" onClick={getFact}>Get Fact</button>
                </div>
                {loader != false ? <>
                  <div className="mt-3">
                    <div className="spinner-border text-dark" role="status">
                      <span className="sr-only"></span>
                    </div>
                  </div>
                </>
                  : fact}
              </div>
              <p>Developed by Swapnil Mane</p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default App;
