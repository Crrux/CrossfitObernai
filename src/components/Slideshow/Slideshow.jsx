import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Slideshow({ data, autoplay, autoplayDelay, buttonEnabled }) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    console.log(slideIndex)
  }, [slideIndex]);

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("myPictures");

    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
  };

  // auto play
  let autoplayTimeout = null

  if (autoplay === true) {
    autoplayTimeout = setTimeout(() => {
      setSlideIndex(slideIndex + 1);
      console.log('timeout')
    }, autoplayDelay);
  }

  const plusSlides = (n) => {
    if (autoplay === true) {
      clearTimeout(autoplayTimeout);
    }
    setSlideIndex(slideIndex + n);
    console.log('plusSlides')
  };

  return (
    <section className="slideshow-container">
      <div className="mySlides">
        {data ? (
          <>
            {data.map((pictures, index) => (
              <div key={index} className="myPictures fade">
                <div className="myPictures--imgcontainer">
                  <img
                    src={`/assets/Slideshow/${pictures.src}`}
                    alt={`${pictures.alt}`}
                  />
                </div>

                {/* <p className="myPictures--indexation">
                  {slideIndex}/{data.length}
                </p> */}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>

      {data.length > 1 && buttonEnabled ? (
        <button className="prev" onClick={() => plusSlides(-1)} type="button">
          &#10094;
        </button>
      ) : (
        ""
      )}
      {data.length > 1 && buttonEnabled ? (
        <button className="next" onClick={() => plusSlides(1)} type="button">
          &#10095;
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

Slideshow.propTypes = {
  data: PropTypes.array.isRequired,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  buttonEnabled: PropTypes.bool,
};

export default Slideshow;
