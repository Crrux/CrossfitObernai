import TitleBackgroundImage from "/assets/title_background/TitleBackground_Offres.png";

function Offers() {
  return (
    <main id="offers">
      <div className="main__header">
        <div className="title_container">
          <img src={TitleBackgroundImage} alt="Background" />
          <p>Découvrez</p>
          <h1>Nos offres</h1>
        </div>
      </div>
      <h2>Les abonnements</h2>
      <p>
        Chez CrossFit Obernai, nous avons à cœur de vous proposer une offre qui
        s&apos;adapte à votre emploi du temps et vos finances. Tous nos
        abonnements sont modulables, d&apos;un mois à l&apos;autre, pour
        répondre au mieux à vos attentes et votre style de vie qui, nous le
        savons, peut évoluer au fil du temps.
      </p>
      <p>
        Nos formules, disponibles avec un engagement initial de 6 ou 12 mois :
      </p>
      <ul>
        <li>
          Découverte : 9 séances mensuelles (soit une moyenne de 2x/semaine)
        </li>
        <li>Santé : 13 séances mensuelles (soit une moyenne de 3x/semaine)</li>
        <li>
          Performance : 17 séances mensuelles (soit une moyenne de 4x/semaine)
        </li>
        <li>
          Compétition : 21 séances mensuelles (soit une moyenne de 5x/semaine)
        </li>
      </ul>
      <p>
        Nos tarifs sont disponibles à la box, au terme de votre première séance
        découverte offerte. Le prix de la séance est à partir de 4,71€
      </p>
      <p>
        Retrouvez également les abonnements séniors, kids et teens à raison
        d&pos;une à deux séances par semaine !
      </p>
      <h2>Les offres à la carte :</h2>
      <p>
        Des carnets de séances à recharger en toute autonomie via notre
        application de réservation. Ils sont nominatifs, vous permettent de
        gérer votre budget et votre pratique en toute liberté.
      </p>
      <ul>
        <li>
          Pack découverte : 4 séances pour découvrir l&apos;ensemble de la
          discipline sans s&apos;engager, achetable une fois et non
          renouvelable. Validité de 6 mois
        </li>
        <li>Pack 10 séances: validité de 12 mois, renouvelable.</li>
        <li>Pack 20 séances: validité de 12 mois, renouvelable.</li>
      </ul>
    </main>
  );
}

export default Offers;
