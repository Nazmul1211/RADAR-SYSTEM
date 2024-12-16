import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import database from "./FirebaseConfig";

const FirebaseReadOperation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "/data"); // The path where you wrote data
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
      console.log("Data fetched from Firebase:", value);
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-1/3 mx-auto">
      <h2 className="text-3xl text-start font-semibold text-gray-700 mb-4">Realtime Radar Data from Firebase</h2>
      <div className="text-center">
        {data ? (
          <div>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left text-blue-600">
              <thead>
                <tr className="text-xl">
                  <th className="border border-gray-300 px-4 py-2">Parameter</th>
                  <th className="border border-gray-300 px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody className="font-bold text-black">
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Angle</td>
                  <td className="border border-gray-300 px-4 py-2">{data.angle}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Distance</td>
                  <td className="border border-gray-300 px-4 py-2">{data.distance}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Detected</td>
                  <td className="border border-gray-300 px-4 py-2">{data.detect ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No data available or loading...</p>
        )}
      </div>

      <div className='text-3xl text-center my-10 font-bold text-pink-500'>
        {
          data ? <h3>An Object Dected</h3> : <h3>No Object Dected</h3>
        }
        {
          data ?  <input type="checkbox" className="toggle toggle-error mt-6" defaultChecked /> : <input type="checkbox" className="toggle toggle-error mt-6" />
        }
      </div>
      {/* <div className='flex justify-center'>
        <div role="alert" className="alert alert-error max-w-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div> */}

    </div>
  );
};

export default FirebaseReadOperation;
