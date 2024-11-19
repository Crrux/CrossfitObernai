import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Error() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
    window.scrollTo(0, 0);
  }, 4000);

  return (
    <main id="main_error">
      <p>404 error</p>
      <p>La page demander n&apos;est pas disponible</p>
      {/* <p>Retour a l&apos;acceuil</p> */}
      <Loading />
    </main>
  );
}

export default Error;
