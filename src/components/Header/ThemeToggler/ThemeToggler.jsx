import { useSelector, useDispatch } from 'react-redux';
import { selectIsTheme } from 'redux/theme/selectors';
import {
  Toggler,
  Checkbox,
  ToggleToDark,
  ToggleToLight,
} from './ThemeToggler.styled';

import { toggleThemeAction } from 'redux/theme/themeSlice';

export const ThemeToggler = () => {
  const isTheme = useSelector(selectIsTheme);
  const dispatch = useDispatch();

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
