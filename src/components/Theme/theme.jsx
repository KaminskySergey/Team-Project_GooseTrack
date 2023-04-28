export const theme = {
  /* 
    Звертатись до змінних у файлі .styled.jsx через ${props => props.theme.mainBackgroundColor};  
  */
  // ======================================================================================================

  // Стилі для світлої теми
  light: {
    defaultTransition: 'all 250ms',
    // comon colors
    mainBackgroundColor: '#FFFFFF',
    secondaryBackgroundColor: '#F7F6F9',
    accentColor: '#3E85F3',
    mainTextColor: '#111111',
    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#FFFFFF',
    asideBarTitle: '#7E7D82',
    asideBarIcon: '#84828A',
    asideBarIconActive: '#3E85F3',
    asideBarLinkText: '#84828A',
    asideBarActiveLinkText: '#3E85F3',
    asideBarActiveLinkBackground: '#E3F3FF',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    asideBarLogoutBtnShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
  },

  // Стилі для темної теми
  dark: {
    defaultTransition: 'all 250ms',
    // comon colors
    mainBackgroundColor: '#21222C',
    secondaryBackgroundColor: '#171820',
    accentColor: '#3E85F3',
    mainTextColor: '#FFFFFF',
    secondaryTextColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.15)',

    // AsideBar
    asideBarBackground: '#13151A',
    asideBarTitle: '#585A5D',
    asideBarIcon: '#FFFFFF',
    asideBarIconActive: '#FFFFFF',
    asideBarLinkText: '#FFFFFF',
    asideBarActiveLinkText: '#FFFFFF',
    asideBarActiveLinkBackground: '#3E85F3',
    asideBarLinkBackgroundHover: 'rgba(120, 165, 191, 0.1)',
    asideBarLogoutBtnShadow: '4px 2px 16px rgba(136, 165, 191, 0.3)',
  },
};
