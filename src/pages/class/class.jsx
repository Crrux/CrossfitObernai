import Collapsible from "../../components/Collapsible/Collapsible";

function Class() {
  return (
    <main id="class">
      <h1>Nos Cours</h1>
      <div className="collapsible_container">
        <Collapsible
          titre={"1. Le WOD"}
          string={`Le WOD est l'acronyme de Workout of The Day. Chaque jour, une
          nouvelle séance où le but est de t'amener à travailler
          l'ensemble des qualités physiques au travers de 3 disciplines
          principales :`}
          text={["le Cardio", "La Gymnastique", "L'haltérophilie"]}
        />
        <Collapsible
          titre={"2. Functional Body Building"}
          string={`Notre séance de renforcement global,
          alliant exercices au poids de corps et à charges externes. Ses
          bienfaits sont la prévention de blessure, la réathlétisation et le
          développement de la masse musculaire.`}
        />
        <Collapsible
          titre={"3. Gymnastique"}
          string={`La gym' pratiquée en CrossFit regroupe tous les
          mouvements au poids de corps; tractions, pompes, montées de cordes,
          marche sur les mains et bien d'autres… Ce cours favorise le
          développement de l'équilibre, l'agilité, la coordination et
          la précision. Il est destiné à l'apprentissage technique des
          mouvements les plus simples aux plus complexes.`}
        />
        <Collapsible
          titre={"4. Weighlifting"}
          string={`Weightlifting est une discipline olympique composée de deux mouvements
          principaux : le snatch (arraché) et le clean & jerk (épaulé-jeté).
          Elle favorise le développement de la force, la vitesse,
          l'explosivité, l'agilité et la coordination. Un cours pour
          apprendre ou se perfectionner, accompagné de renforcement musculaire
          ciblé.`}
        />
        <Collapsible
          titre={"5. Hybrid Training"}
          string={`Hybrid Training est un cours mélangeant la course à pieds à des
          exercices fonctionnels; vous y retrouverez la pratique du rameur, des
          wall ball shots, des fentes marchées, de la poussée et du tirage de
          sled, du ski-erg, du farmer carry et d'autres petits choses
          venant pimenter cet entraînement à visée d'endurance
          cardiovasculaire et musculaire ciblée sur les membres inférieurs.`}
        />
        <Collapsible
          titre={"6. CrossFit Kids / Teens"}
          string={`CrossFit Kids / Teens est destiné aux enfants de 7 à 11 et de 12 à 17
          ans respectivement. C'est une façon ludique et amusante de faire
          de l'exercice pour vos enfants. Porter une charge avec une bonne
          posture, grimper, sauter, ramper, tirer, pousser, lancer, etc… En plus
          de développer l'ensemble des qualités physiques chez nos jeunes,
          il favorise, entre autres, la concentration, l'écoute, la
          confiance en soi, l'entraide, la bienveillance et la
          détermination.`}
        />
        <Collapsible
          titre={"7. Parents-enfants"}
          string={`Nous avons créé ce cours pour vous donner
          l'opportunité de partager un moment convivial et sportif en duo
          avec votre enfant. Son but est de renforcer vos liens dans un
          environnement positif et de se dépasser en famille. Ensemble, vous
          prenez soin de votre santé et nourrissez une complicité durable. A
          partir de 11 ans !`}
        />
        <Collapsible
          titre={"8. Séniors"}
          string={`Une pratique douce du cardio, de la souplesse et du
          renforcement musculaire pour repousser les effets indésirables de
          l'âge et conserver une santé de fer. En petits groupes, au
          travers de mouvements fonctionnels, dans une ambiance bienveillante et
          chaleureuse. A partir de 65 ans !`}
        />
        <Collapsible
          titre={"9. Le WoD Team"}
          string={`Le WoD Team est un rendez-vous à ne pas manquer ! Vous embarquez pour
          une aventure sportive à plusieurs, au travers d'exercices
          requérant la mise en place de stratégies de groupe en adéquation avec
          les points forts et les appétences de chacun ! Vous y retrouverez des
          mouvements en synchro', des relais et plein d'autres choses
          venant stimuler votre esprit d'équipe !`}
        />
      </div>

      <p>
        Souplesse, mobilité, coordination, renforcement musculaire et bien
        d&apos;autres activités t&apos;attendent dans ces cours riches et variés
        où chaque jour est une surprise et ne se ressemble pas.
      </p>
    </main>
  );
}

export default Class;
