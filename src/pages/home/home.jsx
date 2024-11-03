import Slideshow from "../../components/Slideshow/Slideshow";

function Home() {
  const Slideshow_data = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
  return (
    <main className="Home">
      <h1>CrossFit Obernai</h1>
      <section className="Slideshow_section">
        <div id="Slideshow_container">
          <Slideshow data={Slideshow_data} />
        </div>
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
