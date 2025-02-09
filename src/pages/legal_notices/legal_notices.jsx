import Popup from "../../components/popup/popup";
import LegalNotices from "../../layout/legal_notices/legal_notices";

function MentionLegale() {
  return (
    <>
      <Popup />
      <main className="legal_notices">
        <LegalNotices />
      </main>
    </>
  );
}

export default MentionLegale;
