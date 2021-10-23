import React from 'react';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {useSelector} from "react-redux";
import {AppRootState} from "./store/store";


export const App: React.FC = () => {
    const auth = useSelector<AppRootState, boolean>(state => state.app.auth)

    return (
        <>
            <Header/>
            <main className={'container'}>
                <Content auth={auth}/>
            </main>
            <Footer/>
        </>
    )
}