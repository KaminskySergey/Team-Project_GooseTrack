import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsRefreshing, } from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);


    return {
        isLoggedIn,
        isRefreshing,

    };
};
