import s from './style.module.css';

const Logo = props => {
  return (
    <>
      <div className={s.container}>
        <img
          className={s.image}
          src={props.img}
          alt="Logo"
          onClick={props.onClick}
        />
        <div className={s.title}>{props.title}</div>
      </div>
      <div className={s.subtitle}>{props.subtitle}</div>
    </>
  );
};

export default Logo;