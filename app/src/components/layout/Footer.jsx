export const Footer = () => {
  return (
    <footer>
      <div className="bg-bg py-16 border-t border-border">
        <div className="max-w-screen-2xl m-auto flex flex-col gap-8 px-12">
          <div className="flex justify-between w-full">
            <span className="text-primary font-bold text-2xl max-2xl:text-xl">
              GamerGear Hub
            </span>
            <div className="flex flex-col items-center text-secondary gap-2">
              <span className="text-secondary font-bold text-xl max-2xl:text-lg">
                Informazioni
              </span>
              <a href="#">Chi siamo</a>
              <a href="#">Contattaci</a>
              <a href="#">Termini e condizioni</a>
              <a href="#">Politica sulla privacy</a>
            </div>
            <div className="flex flex-col items-center text-secondary gap-2">
              <span className="text-secondary font-bold text-xl max-2xl:text-lg">
                Assistenza Clienti
              </span>
              <a href="#">Guida all'acquisto</a>
              <a href="#">Servizio clienti</a>
              <a href="#">Restituzioni e garanzie</a>
            </div>
            <div className="flex flex-col items-center text-secondary gap-2">
              <span className="text-secondary font-bold text-xl max-2xl:text-lg">
                Connettiti con Noi
              </span>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <span className="text-secondary text-end">
            Copyright © 2024
            <span className="text-secondary"> GamerGear Hub</span>. Tutti i diritti
            riservati.
          </span>
        </div>
      </div>
    </footer>
  );
};
