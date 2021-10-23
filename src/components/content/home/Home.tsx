import React, {useState} from 'react';
import styles from './Home.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {DataUser, loginUser} from '../../../store/app/appReducer';
import {AppRootState} from "../../../store/store";




type HomePropsType = {
    auth: boolean
}
export const Home: React.FC<HomePropsType> = ({auth}) => {
    const dispath = useDispatch()
    const data = useSelector<AppRootState, DataUser>(state => {
        return {
            login: state.app._login,
            password: state.app._password
        }
    })

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const submitHendler = (e: React.FormEvent) => {
        e.preventDefault()
        let data = {login, password}
        dispath(loginUser({data}))
    }

    if (auth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.profile}>
            <form className={styles.form} onSubmit={submitHendler}>
                <div className={styles.form__item}>
                    <input
                        type="text"
                        placeholder={'Login'}
                        onChange={e => setLogin(e.target.value)}
                        value={login}
                    />
                </div>
                <div className={styles.form__item}>
                    <input
                        type="password"
                        placeholder={'Password'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className={styles.form__item}>
                    <button disabled={login !== data.login || password !== data.password}>Войти</button>
                </div>
            </form>
        </div>
    )
}