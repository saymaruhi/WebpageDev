
import logo from "./logo.png";
function School() {
  return (
    <div>
      <div >
        <header className="header">
           <img src={logo} alt=" School Logo" />
          <h2>Little Ferry School</h2>
          <div className="corner">
            <h5>Home</h5>
            <h5>Contact Us</h5>
          </div>
        </header>
      </div>
    </div>
  );
}
export default School;

