import { Container } from '@mui/material';
import React from 'react'
import DesktopMenu from './component/DesktopMenu';
import MobileMenu from './component/MobileMenu';

const LockerMenu = (props) => {
    const menuList = [ // You can pass 4 perameters for menu title, link, target and customClass
        {
        title: "Home",
        link: "/",
        },
        {
        title: "Locker",
        link: "/",
        },
        {
        title: "View Chart",
        link: "",
        target: "_blank"
        },
        {
        title: "Buy Now",
        link: "",
        customClass: "",
        target: "_blank"
        },
    ];
  return (
    <Container>
        <DesktopMenu menuList={menuList} />
        <MobileMenu menuList={menuList} />
    </Container>
  )
}

export default LockerMenu