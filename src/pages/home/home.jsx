import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  return (
    <main className="Home">
      <h1>CrossFit Obernai</h1>
      <section id="Carousel_container">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={1}
          centerMode={false}
          className="Carousel"
          containerClass="container"
          customTransition="all 1s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
          <img src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <img src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <img src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </Carousel>
      </section>
      <section>
        <h2>Qu&apos;est-ce que le CrossFit </h2>
        <p>
          Le CrossFit est un programme d&apos;entraînement général adapté à
          tous, quelle que soit ta condition physique ou ton âge.
        </p>
        <p>
          Il vise à améliorer ton état de santé global au travers
          d&apos;entraînements fonctionnels où tous les mouvements sont basés
          sur des mouvements naturels du quotidien.
        </p>
        <p>
          Que tes objectifs soient une remise en forme, la préparation
          d&apos;épreuves physiques pour un examen ou un challenge sportif,
          notre méthode saura répondre favorablement à tes attentes.
        </p>
        <p>
          Au travers de coachings personnalisés et adaptés, nous te corrigeons
          sur chaque mouvement, en t&apos;assurant une pratique saine et
          respectueuse de tes capacités ainsi qu&apos;une progression sans
          limite grâce à une programmation variée.
        </p>
        <h2>Les points forts :</h2>
        <ul>
          <li>
            La pratique en petits groupes sous l&apos;égide d&apos;un coach à
            chaque séance
          </li>
          <li>Des séances variées, jamais deux fois le même entraînement !</li>
          <li>
            De multiples stimulis, le but est de t&apos;améliorer dans chaque
            qualité physique reconnue dans le monde du sport
          </li>
          <li>
            Un gros boost sur ta confiance en toi au travers de victoires
            quotidiennes et d&apos;accomplissements aux entraînements
          </li>
          <li>
            Une communauté bienveillante ou tout le monde s&apos;encourage et se
            félicite
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
