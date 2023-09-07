import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import styles from "../page.module.css";
import {Link} from "react-router-dom";

const PasswordForgotPage = () => {
    const [form, setForm] = React.useState({ email: ""});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <form className={styles.form}>
                    <EmailInput
                        onChange={handleChange}
                        value={form.email}
                        name={'email'}
                        placeholder={'Укажите e-mail'}
                    />
                </form>
                <Button htmlType="button" type="primary" size="large">
                    Восстановить
                </Button>
                <div className={styles.caption}>
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?&ensp;
                        <Link to='/login' className={styles.link}>Войти</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

export default PasswordForgotPage;