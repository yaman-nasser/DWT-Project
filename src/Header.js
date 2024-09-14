export default function Header() {
  const currentDate = new Date();
  const formattedLocalDate = currentDate.toLocaleString();

  return (
    <div className="container">
      <div
        className="px-5 py-1 text-darck rounded "
        style={{ backgroundColor: " rgb(233, 231, 231)" }}
      >
        <p style={{ fontSize: "60px" }}>DWT Attendance</p>
        <p>Welcome Mohammad Ragheb</p>

        <p>{formattedLocalDate}</p>
        <p className="text-end">
          <a href="http://localhost:3000/#" style={{ textDecoration: "none", fontWeight: "bold" }}>
            LOGOUT
          </a>
        </p>
      </div>
    </div>
  );
}
