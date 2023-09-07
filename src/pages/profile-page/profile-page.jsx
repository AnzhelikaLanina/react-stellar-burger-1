import {EmailInput, PasswordInput, Button, Input} from '@ya.praktikum/react-developer-burger-ui-components';
import React from "react";
import styles from "./profile-page.module.css";
import ProfileNav from "../../components/profile-nav/profile-nav";
import {useDispatch} from "react-redux";
import {updateUser} from "../../services/actions/auth";
const ProfilePage = () => {

    const dispatch = useDispatch();

    const [form, setForm] = React.useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(form.name, form.email, form.password));
    };

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
    }

    return (
        <div >
            <main className={styles.profile}>
                <ProfileNav />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={handleChange}
                        icon='EditIcon'
                        value={form.name}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        ref={inputRef}
                        onIconClick={onIconClick}
                    />
                    <EmailInput
                        onChange={handleChange}
                        value={form.email}
                        name={'email'}
                        placeholder={'Логин'}
                        icon='EditIcon'
                    />
                    <PasswordInput
                        onChange={handleChange}
                        value={form.password}
                        name={'password'}
                        placeholder={'Пароль'}
                        icon='EditIcon'
                    />
                    <div className={styles.buttons}>
                        <Button htmlType="button" type="secondary" size="medium">
                            Отмена
                        </Button>
                        <Button htmlType="submit" type="primary" size="medium">
                            Сохранить
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default ProfilePage;