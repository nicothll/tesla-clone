import styled from "styled-components"
import ListItems from "./ListItems"
import { menuContent, rightMenuContent } from "../settings/menuContent"
import { device } from "../settings/device"
import MenuModal from "./MenuModal"
import { useState } from "react"


const Header = () => {

    const [ showModal, setShowModal ] = useState(false);

  return (
    <HeaderContainer>
        <Logo>
            <a href="#">
                <img src="/images/logo.svg" alt="tesla-logo" />
            </a>
        </Logo>
        <MenuList>
            <ListItems content={menuContent} />
        </MenuList>
        <RightMenuList>
            <ListItems content={rightMenuContent} />
            <li>
                <MenuButton onClick={() => setShowModal(true)}>Menu</MenuButton>
            </li>
        </RightMenuList>
        <MenuModal showMenu={showModal} action={setShowModal} />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    width: 100vw;
    z-index: 3;
`

const Logo = styled.div`
    margin: 0;
    padding-left: var(--tds-size--4x);
    align-items: center;
`

const MenuList = styled.ol`
    display: flex;
    min-block-size: var(--tds-size--7x);
    position: static;
    white-space: nowrap;
    justify-content: center;
    align-items: center;

    @media screen and ${device.tablet} {
        & li {
            a { display: none; }
      }}
`

const RightMenuList = styled(MenuList)`
    margin-right: 10px;
`

const MenuButton = styled.button`
    display: inline-flex;
    padding: var(--tds-size--half) 16px;
    color: var(--tds-color--grey10);
    font-family: inherit;
    font-size: 1em;
    margin-bottom: 1px;
    background: transparent;
    border: transparent;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        background-color: var(--tds-bg-color-variant);
      }

    @media screen and ${device.tablet} {
        background-color: var(--tds-bg-color-variant);
        
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
    }
`
