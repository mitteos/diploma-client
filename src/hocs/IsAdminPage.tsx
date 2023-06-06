import React, {useEffect} from 'react';
import {useAppSelector} from "@/hooks/redux";
import {useRouter} from "next/router";
import {NextPage} from "next";

const IsAdminPage = (Component: NextPage) => {
    const AuthenticatedComponent = () => {
        const {user} = useAppSelector(state => state.user)
        const {push} = useRouter()

        useEffect(() => {
            if(user && user.role === "USER") {
                push("/")
            }
        }, []);

        return <Component />;
    }
    return AuthenticatedComponent
};

export default IsAdminPage;
