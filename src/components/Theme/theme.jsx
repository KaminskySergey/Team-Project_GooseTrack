export const theme = {
  /* 
    Хто використоувує для стилізаці своїх компонентів об'єкт 
    colors - перепишіть свої змінні подібно до об'єктів light та dark.
    
    Звертатись до змінних у файлі .styled.jsx через ${props => props.theme.mainBackgroundColor};  
  */
  colors: {
    text: '#000',
    background: '#fff',
    white: '#fff',
    primary: '#07c',
    secondary: '#05a',
    hero: '#3E85F3',
    backgroundAdvantage: '#DCEBF7',
    backgroundColor: '#609',
    muted: '#f6f6f6',
    red: 'red',
    grey: '#CEC9C1',
    border: 'rgb(206, 215, 19)',
    yellow: '#FFFF00',
    green: '#04ff00',
    statusMedium: '#F3B249',
    statusHigh: '#EA3D65',
    statusLow: '#72C2F8',
  },
  // ======================================================================================================

  // Стилі для світлої теми
  light: {
    // comon colors
    mainBackgroundColor: '#FFFFFF',
    secondaryBackgroundColor: '#F7F6F9',
    accentColor: '#3E85F3',
    mainTextColor: '#111111',
    secondaryTextColor: '#FFFFFF',

    // AsideBar
    asideBarBackground: '#FFFFFF',
    asideBarTitle: '#7E7D82', 
    asideBarIcon: '#84828A',
    asideBarLinkText: '#84828A',
    asideBarActiveLinkText: '#3E85F3',
    asideBarActiveLinkBackground: '#E3F3FF',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    asideBarLogoutBtnShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  },

  // Стилі для темної теми
  dark: {
    // comon colors
    mainBackgroundColor: '#21222C',
    secondaryBackgroundColor: '#171820',
    accentColor: '#3E85F3',
    mainTextColor: '#FFFFFF',
    secondaryTextColor: '#FFFFFF',

    // AsideBar
    asideBarBackground: '#13151A',
    asideBarTitle: '#585A5D', 
    asideBarIcon: '#FFFFFF',
    asideBarLinkText: '#FFFFFF',
    asideBarActiveLinkText: '#FFFFFF',
    asideBarActiveLinkBackground: '#3E85F3',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    asideBarLogoutBtnShadow: '4px 2px 16px rgba(136, 165, 191, 0.3)',
  },
};
