import styles from "../styles/clientList.module.scss";
import clientsList from "../public/clients";
import Client from "../components/Client";
import Flicking from "@egjs/react-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

const flickingPlugins = [new Fade(), new AutoPlay(7000, "NEXT")];

const ClientList = () => {
  return (
    <section className='section-dark'>
      <div className='container-home'>
        <div className='short-divider'></div>
        <h2 className='section-header white-header'>What Clients Say</h2>
        <div className={styles.flickingWrapper}>
          <Flicking
            className={styles.flicking}
            circular={true}
            gap={30}
            duration={500}
            plugins={flickingPlugins}
            moveType='freeScroll'>
            {clientsList.map((client) => (
              <Client key={client.id} {...client} />
            ))}
          </Flicking>
          <img
            className={styles.quoteIcon}
            src='/media-img/icon-quote.svg'
            alt='Quote icon'
          />
        </div>
      </div>
    </section>
  );
};

export default ClientList;
