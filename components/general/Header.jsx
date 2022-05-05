
import styles from '../../styles/components/general/Header.module.css';
import HeaderContentM from "../mobile/HeaderContent";
import HeaderContentW from "../web/HeaderContentW";
const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderContentM />
            <HeaderContentW />
        </header>
    );
}

export default Header;  