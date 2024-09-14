// import { ArrowRight } from "react-bootstrap-icons";
import { PiForkKnifeFill } from "react-icons/pi";
import { useState } from "react";
import modulecss from "./Form.module.css";

export default function MyList() {
  //[HTTP-Post]
  
  const now = new Date();
  const localTime = now.toDateString();

  // var id = "";

  // let arr = [1,2,3,4];

  // const [times, setTimes] = useState([]);

  // const logTime = () => {
  //   //   //const currentTime = new Date().toLocaleString(); // Get the local time
  //   //setTimes((prevTimes) => [...prevTimes, d.toLocaleTimeString()]); // Add the time to the array

  //   if (id === "l1") {
  //     arr[0]=localTime;
  //     setTimes((prevTimes) => [...prevTimes, arr[0]]);
  //   } else if (id === "l2") {
  //     arr[1]=localTime;
  //     setTimes((prevTimes) => [...prevTimes, arr[1]]);
  //   } else if (id === "l3") {
  //     arr[2]=localTime;
  //     setTimes((prevTimes) => [...prevTimes, arr[2]]);
  //   } else if (id === "l4") {
  //     arr[3]=localTime;
  //     setTimes((prevTimes) => [...prevTimes, arr[3]]);
  //   }

  //   console.log(id);
  //   console.log(arr);
  //   console.log(times)

  // };
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState({
    myDate: localTime,

    checkIn: "",

    breakIn: "",

    breakOut: "",

    checkOut: "",

    Hours: "8",

    Type: "1",
  });
  const handleButtonClick = (column) => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentUser({ ...currentUser, [column]: currentTime });
  };

  const addUserToTable = () => {
    setUsers([...users, currentUser]);
    // إعادة تعيين المستخدم الحالي بعد الإضافة
    // setCurrentUser({
    //   checkIn: "",

    //   breakIn: "",

    //   breakOut: "",

    //   checkOut: "",
    // });
  };

  const handleSubmit = async () => {
    // let arr = new Array(4);

    // const data = {
    //   myDate: localTime,

    //   checkIn: times[0],

    //   breakIn: times[1],

    //   breakOut: times[2],

    //   checkOut: times[3],

    //   Hours: "8",

    //   Type: "1",
    // };

    // const response = await fetch("https://localhost:7038/api/Table", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(users), // Convert the data to a JSON string
    // });

    // const result = await response.json(); // Parse the JSON response
    // console.log(result);
    try {
      const response = await fetch("https://localhost:7038/api/Table", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      });
      const result = await response.json(); // Parse the JSON response
      console.log(result);

      if (response.ok) {
        alert(window.location.reload(), "تم حفظ البيانات بنجاح!");
      } else {
        console.error("فشل في إرسال البيانات");
      }
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error);
    }
  };

  // ****************STYLE FOR CARDES***************
  const cardStyle = {
    userSelect: "none",
    maxWidth: "250px",
    margin: "1rem auto",
    border: "1px solid #ffffff22",
    backgroundColor: "",
    background: "",
    boxShadow:"0 7px 50px 10px #000000aa",
    borderRadius: ".7rem",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(7px)",
    overflow: "hidden",
    transition: ".5s all",
  };
  // ***********************************************

  return (
    <div
      style={{ marginTop: "30px" }}
      className="d-flex justify-content-between flex-wrap mt-3"
    >

      <button className="btn btn-success" onClick={addUserToTable}>
        ADD
      </button>

      <button className="btn btn-success" onClick={handleSubmit}>
        POST
      </button>

      <table className="table table-hover">
        <tbody>
          <tr>
            <th>Check-in</th>
            <th>Break-In</th>
            <th>Break-Out</th>
            <th>Check-Out</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.checkIn}</td>
              <td>{user.breakIn}</td>
              <td>{user.breakOut}</td>
              <td>{user.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <!-- Card 1--> */}
      {/* <a
        href="http://localhost:3000/index"
        onClick={() => handleButtonClick("checkIn")}
        className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <div
          style={{ textAlign: "center", width: "200px", border: "none" }}
          className="card text-primary"
        >
          <ul
            style={{ listStyleType: "none" }}
            className="list-group list-group-flush"
          >
            <li>
              <p className="fs-3">Check-In</p>
            </li>
            <li>
              <i
                className="bi bi-check-lg text-success "
                style={{ fontSize: "80px" }}
              ></i>
            </li>
            <li>
              <p>Records Check-In Attendance in the database</p>
            </li>
          </ul>
        </div>
      </a> */}
      <div onClick={() => handleButtonClick("checkIn")} >
        <div
          className={modulecss.bft}
          style={cardStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="main" style={{ padding: "1rem" }}>
            <div
              style={{
                textAlign: "center",
                width: "200px",
                border: "none",
                background: "none",
              }}
              className="card text-primary"
            >
              <ul
                style={{ listStyleType: "none" }}
                className="list-group list-group-flush"
              >
                <li>
                  <p className="fs-3">Check-In</p>
                </li>
                <li>
                  <i
                    className="bi bi-check-lg text-success "
                    style={{ fontSize: "80px" }}
                  ></i>
                </li>
                <li>
                  <p>Records Check-In Attendance in the database</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 2--> */}
      {/* <a
        href="http://localhost:3000/#"
        onClick={() => handleButtonClick("breakIn")}
        className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <div
          style={{ textAlign: "center", width: "200px", border: "none" }}
          className="card text-primary"
        >
          <ul
            style={{ listStyleType: "none" }}
            className="list-group list-group-flush"
          >
            <li>
              <p className="fs-3">Break-In</p>
            </li>
            <li className="text-success" style={{ fontSize: "80px" }}>
              <PiForkKnifeFill />
            </li>
            <li>
              <p>Records Break-In attendance in the database</p>
            </li>
          </ul>
        </div>
      </a> */}

      <div onClick={() => handleButtonClick("breakIn")}>
        <div
          className={modulecss.bft}
          style={cardStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="main" style={{ padding: "1rem" }}>
            <div
              style={{
                textAlign: "center",
                width: "200px",
                border: "none",
                background: "none",
              }}
              className="card text-primary"
            >
              <ul
                style={{ listStyleType: "none" }}
                className="list-group list-group-flush"
              >
                <li>
                  <p className="fs-3">Break-In</p>
                </li>
                <li className="text-success" style={{ fontSize: "80px" }}>
                  <PiForkKnifeFill />
                </li>
                <li>
                  <p>Records Break-In attendance in the database</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 3--> */}
      {/* 
      <a
        href="http://localhost:3000/#"
        onClick={() => handleButtonClick("breakOut")}
        className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <div
          style={{ textAlign: "center", width: "200px", border: "none" }}
          className="card text-primary"
        >
          <ul
            style={{ listStyleType: "none" }}
            className="list-group list-group-flush"
          >
            <li>
              <p className="fs-3">Break-Out</p>
            </li>
            <li>
              <i
                className="bi bi-arrow-left-circle-fill text-success "
                style={{ fontSize: "80px" }}
              ></i>
            </li>
            <li>
              <p>Records Break-Out attendance in the database</p>
            </li>
          </ul>
        </div>
      </a> */}

      <div onClick={() => handleButtonClick("breakOut")}>
        <div
          className={modulecss.bft}
          style={cardStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="main" style={{ padding: "1rem" }}>
            <div
              style={{
                textAlign: "center",
                width: "200px",
                border: "none",
                background: "none",
              }}
              className="card text-primary"
            >
              <ul
                style={{ listStyleType: "none" }}
                className="list-group list-group-flush"
              >
                <li>
                  <p className="fs-3">Break-Out</p>
                </li>
                <i
                  className="bi bi-arrow-left-circle-fill text-success "
                  style={{ fontSize: "80px" }}
                ></i>
                <li>
                  <p>Records Break-Out attendance in the database</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card 4--> */}
      {/* <a
        href="http://localhost:3000/#"
        onClick={() => handleButtonClick("checkOut")}
        className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <div
          style={{ textAlign: "center", width: "200px", border: "none" }}
          className="card text-primary"
        >
          <ul
            style={{ listStyleType: "none" }}
            className="list-group list-group-flush"
          >
            <li>
              <p className="fs-3">Check-Out</p>
            </li>
            <li>
              <i
                className="bi bi-box-arrow-in-right iconex text-success"
                style={{ fontSize: "80px" }}
              ></i>
            </li>
            <li>
              <p>Records Check-Out attendance in the database</p>
            </li>
          </ul>
        </div>
      </a> */}

      <div onClick={() => handleButtonClick("checkOut")}>
        <div
          className={modulecss.bft}
          style={cardStyle}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="main" style={{ padding: "1rem" }}>
            <div
              style={{
                textAlign: "center",
                width: "200px",
                border: "none",
                background: "none",
              }}
              className="card text-primary"
            >
              <ul
                style={{ listStyleType: "none" }}
                className="list-group list-group-flush"
              >
                <li>
                  <p className="fs-3">Check-Out</p>
                </li>
                <li>
                  <i
                    className="bi bi-box-arrow-in-right iconex text-success"
                    style={{ fontSize: "80px" }}
                  ></i>
                </li>

                <li>
                  <p>Records Check-Out attendance in the database</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
