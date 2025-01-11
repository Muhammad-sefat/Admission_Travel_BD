import React from "react";

const BusSitPlan = () => {
  return (
    <div className="overflow-x-auto my-10">
      <div className="bg-white text-black text-right p-2 md:flex justify-end gap-5">
        <button className="border py-2 px-4 rounded">From</button>
        <button className="border py-2 px-8 rounded">To</button>
        <button className="border py-2 px-4 rounded">Select Units</button>
        <button className="border py-2 px-4 bg-red-500 text-white rounded">
          Reset All
        </button>
      </div>
      <table className="table table-sm border m-5">
        <thead className="bg-green-700 text-white text-base">
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Unit</th>
            <th>Bus Type</th>
            <th>Journey Date</th>
            <th>Exam Date</th>
            <th>Ticket Booking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dhaka</td>
            <td>KUET</td>
            <td>All</td>
            <td>Non AC</td>
            <td>10-jan-25</td>
            <td>11-jan-25</td>
            <td>
              <button className="border bg-red-500 text-white p-2 text-base rounded">
                Book
              </button>
            </td>
          </tr>
          <tr>
            <td>Comilla</td>
            <td>KUET</td>
            <td>All</td>
            <td>Non AC</td>
            <td>10-jan-25</td>
            <td>11-jan-25</td>
            <td>
              <button className="border bg-red-500 text-white p-2 text-base rounded">
                Book
              </button>
            </td>
          </tr>
          <tr>
            <td>Comilla</td>
            <td>BUET</td>
            <td>All</td>
            <td>Non AC</td>
            <td>12-jan-25</td>
            <td>13-jan-25</td>
            <td>
              <button className="border bg-red-500 text-white p-2 text-base rounded">
                Book
              </button>
            </td>
          </tr>
          {/* Add other rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default BusSitPlan;
