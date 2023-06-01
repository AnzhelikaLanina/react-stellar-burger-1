import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from "./app-header.module.css";

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.block}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <BurgerIcon type="primary" />
                        <p className='text text_type_main-default'>Конструктор</p>
                    </li>
                    <li className={styles.link}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                    </li>
                </ul>
                <Logo />
                <div className={styles.linkRight}>
                    <ProfileIcon type="secondary" />
                    <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                </div>
            </div>
        </header>
    );
}

export default AppHeader;