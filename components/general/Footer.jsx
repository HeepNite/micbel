import styles from '../../styles/components/general/Footer.module.css';
import FotterContentM from '../mobile/FooterContentM';
import FooterContentW from '../web/FooterContentW';
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <FotterContentM />
            <FooterContentW />
        </footer>
    );
}

export default Footer;