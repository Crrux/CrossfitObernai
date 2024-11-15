import Slideshow from "../../components/Slideshow/Slideshow";
import TitleBackgroundImage from "/assets/title_background/TitleBackground_Crossfit.png";

function Home() {
  const Slideshow_data = [
    { name: "1", src: "1.jpeg", alt: "1" },
    { name: "2", src: "2.jpeg", alt: "2" },
    { name: "3", src: "3.jpeg", alt: "3" },
    { name: "4", src: "4.jpeg", alt: "4" },
  ];

  return (
    <main className="Home">
      <section className="Slideshow_section">
        <div id="Slideshow_container">
          <Slideshow data={Slideshow_data} />
        </div>
      </section>
      <section>
        <div className="main__header">
          <div className="title_container">
            <img src={TitleBackgroundImage} alt="Background" />
            <p>Qu&apos;est que</p>
            <h1>Le Crossfit</h1>
          </div>
        </div>
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
