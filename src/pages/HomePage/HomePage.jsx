import {} from 'react-router-dom';

import {} from './HomePage.styled';

import { useResponce } from 'hooks/responce';

import { DesktopHome } from './DesktopHome/DesktopHome';
import { TabletHome } from './TabletHome/TabletHome';
import { MobileHome } from './MobileHome/MobileHome';

export default function HomePage() {
  const { isDesktopOrLaptop, isTablet, isMobile } = useResponce();

  return (
    <>
      {isDesktopOrLaptop && <DesktopHome />}
      {isTablet && <TabletHome />}
      {isMobile && <MobileHome />}
    </>
  );
}
