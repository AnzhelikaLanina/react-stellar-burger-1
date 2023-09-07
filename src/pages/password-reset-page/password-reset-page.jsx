import {Input, Button, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import styles from "../page.module.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const PasswordResetPage = () => {
    const [form, setForm] = React.useState({ password: "", email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className="text text_type_main-medium">Восстановление пароля</h1>
                <form className={styles.form}>
                    <PasswordInput
                        onChange={handleChange}
                        placeholder={'Введите новый пароль'}
                        value={form.password}
                        name={'password'}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={handleChange}
                        value={form.email}
                        name={'name'}
                        size={'default'}
                    />
                </form>
                <Button htmlType="button" type="primary" size="large">
                    Сохранить
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

export default PasswordResetPage;