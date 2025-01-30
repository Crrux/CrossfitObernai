import TitleBackgroundImage from "/assets/title_background/TitleBackground_Planning.webp";
import PlanningImg from "/assets/Planning/Planning_CFO_2025.webp"
// import { useRef, useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   position: relative;
//   overflow: hidden;
//   display: block;
//   border-radius: 15px;
//   :hover {
//     box-shadow: 0 14px 24px rgba(0, 0, 0, 0.55), 0 14px 18px rgba(0, 0, 0, 0.55);
//   }
// `;

// const Image = styled.img.attrs((props) => ({
//   src: props.source
// }))``;

// const Target = styled(Image)`
//   position: absolute;
//   left: ${(props) => props.offset.left}px;
//   top: ${(props) => props.offset.top}px;
//   opacity: ${(props) => props.opacity};
// `;

function Planning() {

  // const sourceRef = useRef(null);
  // const targetRef = useRef(null);
  // const containerRef = useRef(null);

  // const [opacity, setOpacity] = useState(0);
  // const [offset, setOffset] = useState({ left: 0, top: 0 });

  // const handleMouseEnter = () => {
  //   setOpacity(1);
  // };

  // const handleMouseLeave = () => {
  //   setOpacity(0);
  // };

  // const handleMouseMove = (e) => {
  //   const targetRect = targetRef.current.getBoundingClientRect();
  //   const sourceRect = sourceRef.current.getBoundingClientRect();
  //   const containerRect = containerRef.current.getBoundingClientRect();

  //   const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
  //   const yRatio =
  //     (targetRect.height - containerRect.height) / sourceRect.height;

  //   const left = Math.max(
  //     Math.min(e.pageX - sourceRect.left, sourceRect.width),
  //     0
  //   );
  //   const top = Math.max(
  //     Math.min(e.pageY - sourceRect.top, sourceRect.height),
  //     0
  //   );

  //   setOffset({
  //     left: left * -xRatio,
  //     top: top * -yRatio
  //   });
  // };

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
