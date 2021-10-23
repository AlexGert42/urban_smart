import React from 'react';
import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {logoutUser} from '../../store/app/appReducer';

export const Header: React.FC = () => {
    const dispatch = useDispatch()
    const auth = useSelector<AppRootState, boolean>(state => state.app.auth)

    const clickHendler = () => {
        dispatch(logoutUser({value: false}))
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner} container`}>
                <div className={styles.header__title}>
                    <h1>urban smart</h1>
                </div>
                <nav className={styles.header__menu}>
                    {
                        auth && <div
                            className={styles.header__menu_item}
                            onClick={clickHendler}
                        >Logout</div>
                    }

                </nav>
            </div>
        </header>
    )
}