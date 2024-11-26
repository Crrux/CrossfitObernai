import TitleBackgroundImage from "/assets/title_background/TitleBackground_Planning.webp";

function Planning() {
  window.scrollTo(0, 0);
  return (
    <main id="Planning">
      <div className="main__header">
        <div className="title_container">
          <img src={TitleBackgroundImage} alt="Background" />
          <p>Consultez</p>
          <h1>Notre planning</h1>
        </div>
      </div>
    </main>
  );
}

export default Planning;
