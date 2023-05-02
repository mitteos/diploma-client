import React from 'react';
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {Profile} from "@/components/User";
import {UserState} from "@/store/features/user/types";

const ProfilePage = () => {

    const {user} = useAppSelector(state => state.user)

    return (
        <Profile user={user || {} as UserState} />
    );
};

export default ProfilePage;

