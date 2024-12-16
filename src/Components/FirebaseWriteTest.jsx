import React from "react";
import { ref, set } from "firebase/database";
import database from "./FirebaseConfig";

const FirebaseWriteTest = () => {
  const SwitchOn = () => {
    const dataRef = ref(database, "/data");
    const val = 0;
    set(dataRef, { switch: val })
      .then(() => {
        console.log("Radar System Activated!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
  };

  const SwitchOff = () => {
    const dataRef = ref(database, "/data");
    const val = 1;
    set(dataRef, { switch: val })
      .then(() => {
        console.log("Radar System Deactivated.");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
  };

  return (
    <div className="text-center p-4 bg-white shadow-md rounded-md my-8 mx-auto w-1/3">
      <h2 className="text-3xl font-semibold text-gray-700 mt-8 mb-4">Control Device</h2>
      <button
        onClick={SwitchOff}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
      >
        Start Radar
      </button>
      <button
        onClick={SwitchOn}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Stop Radar
      </button>
    </div>
  );
};

export default FirebaseWriteTest;
