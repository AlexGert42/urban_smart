import React from 'react';
import styles from './Profile.module.scss';
import {useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import {Redirect} from "react-router-dom";


type ProfilePropsType = {
    auth: boolean
}
export const Profile: React.FC<ProfilePropsType> = ({auth}) => {
    const userLogin = useSelector<AppRootState, string>(state => state.app.login)

    if (!auth) {
        return <Redirect to={'/'}/>
    }
    return (
        <div className={styles.profile}>
            <h1>Login: {userLogin}</h1>
        </div>
    )
}