import React, {useEffect, useMemo} from 'react';
import {Profile} from "@/components/User";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { userAsyncActions } from '@/store/features/user';
import {UserState} from "@/store/features/user/types";

const otherProfile = () => {

    const {query} = useRouter()
    const dispatch = useAppDispatch()
    const {searchOneUser} = useAppSelector(state => state.user)

    useEffect(() => {
        if(query.id) {
            dispatch(userAsyncActions.getUser({userId: +query.id}))
        }
    }, [query])

    return (
        searchOneUser && <Profile user={searchOneUser || {} as UserState}/>
    );
};

export default otherProfile;
