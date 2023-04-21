import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);


    return {
        isLoggedIn,

    };
};
