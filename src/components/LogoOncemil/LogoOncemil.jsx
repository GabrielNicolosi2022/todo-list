import './LogoOncemil.css';
import logo from '../../imagenes/profile.png';
const LogoOncemil = () => {
  return (
    <div className="oncemilLogoContainer">
      <img src={logo} className="oncemilLogo" alt="logo de oncemil" />
    </div>
  );
};

export default LogoOncemil;
