import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">GLOBAL</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://img.wallpapersafari.com/desktop/1600/900/82/74/adP7Gt.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
