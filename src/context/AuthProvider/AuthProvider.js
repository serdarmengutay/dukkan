import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import reducer from './reducer';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('@USER').then(userSession => {
            userSession && setUser(JSON.parse(userSession));
            setAuthLoading(false);
        });
    }, []);

    const store = createStore(reducer, { user, isAuthLoading });
    return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
