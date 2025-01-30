import TitleBackgroundImage from "/assets/title_background/TitleBackground_Planning.webp";
import PlanningImg from "/assets/Planning/Planning_CFO_2025.webp"

function Planning() {

  return (
    <main className="Planning">
      <div className="main__header">
        <div className="title_container">
          <img src={TitleBackgroundImage} alt="Background" />
          <p>Consultez</p>
          <h1>Notre planning</h1>
        </div>
      </div>
      <div className="img_zoom">
        <img src={PlanningImg} alt="Planning de la box CrossFit Obernai"></img>
      </div>
      {/* <Container
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Image ref={sourceRef} alt="source" source={PlanningImg} style={{ width: '100%' }} />
        <Target
          ref={targetRef}
          alt="target"
          opacity={opacity}
          offset={offset}
          source={PlanningImg}
        />
      </Container> */}
    </main>
  );
}

export default Planning;
