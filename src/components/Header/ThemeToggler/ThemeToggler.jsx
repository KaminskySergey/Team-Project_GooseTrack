import { useSelector, useDispatch } from 'react-redux';
import { selectIsTheme } from 'redux/theme/selectors';
import { Toggler, Checkbox } from './ThemeToggler.styled';

import { toggleThemeAction } from 'redux/theme/themeSlice';

import { ReactComponent as ToggleToDark } from 'images/svg/toggleToDark.svg';
import { ReactComponent as ToggleToLight } from 'images/svg/toggleToLight.svg';

export const ThemeToggler = () => {
  const isTheme = useSelector(selectIsTheme);
  const dispatch = useDispatch()

  const handleCheckboxChange = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <>
      <Toggler>
        <Checkbox
          type="checkbox"
          checked={isTheme}
          onChange={handleCheckboxChange}
        />
        {isTheme ? <ToggleToLight /> : <ToggleToDark />}
      </Toggler>
    </>
  );
};
