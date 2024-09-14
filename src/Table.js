import { useEffect, useState } from "react";

export default function Table() {
  //[HTTP-Get]
  const [checkerData, setCheckerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7038/api/Table");
      const data = await response.json();

      setCheckerData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const listTable = checkerData.map((t) => {
    return (
      <tr key={t.id}>
        <td>{t.myDate}</td>
        <td>{t.checkIn}</td>
        <td>{t.breakIn}</td>
        <td>{t.breakOut}</td>
        <td>{t.checkOut}</td>
        <td>{t.hours}</td>
        <td>{t.type}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Week Days</h2>
      <p>List Attendance Transactions</p>
      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Check-in</th>
            <th>Break-In</th>
            <th>Break-Out</th>
            <th>Check-Out</th>
            <th>Hours</th>
            <th>Type</th>
          </tr>

          {listTable}
        </tbody>
      </table>
    </div>
  );
}
