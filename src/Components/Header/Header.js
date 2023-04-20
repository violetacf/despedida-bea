import teamBride from './../../Images/team-bride.jpg';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header-container">
        <img src={teamBride} alt="Team bride"></img>
      </div>
      <h1>Despedida Bea 2023</h1>
      <p>
        Estamos aquí para celebrar la despedida de soltera de nuestra amiga Bea!
        Por favor, mira en los botones para ver cual es el plan de hoy :D
      </p>
    </>
  );
}

export default Header;
