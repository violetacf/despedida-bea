import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-buttons-container">
        <a href="/">
          {' '}
          <button className="navbar-button"> Despedida Bea </button>
        </a>
        <a href="/friday">
          {' '}
          <button className="navbar-button"> Friday </button>
        </a>
        <a href="/saturday">
          {' '}
          <button className="navbar-button"> Saturday </button>
        </a>
        <a href="/sunday">
          {' '}
          <button className="navbar-button"> Sunday </button>
        </a>
      </div>
    </div>
  );
}
