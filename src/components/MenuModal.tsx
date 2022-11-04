import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { device } from '../settings/device'
import { menuContent, navMenuContent, rightMenuContent } from '../settings/menuContent';
import ListItems from './ListItems';
import CloseIcon from '@mui/icons-material/Close';

const backdropVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4 
      }
    },
    exit: {
      opacity: 0,
      when: "beforeChildren",
    }
  }
  
  const modalVariants = {
    hidden : {
      x: "200vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    },
    exit: {
      x: "200vw",
      opacity: 0,
      transition: { duration: 0.9 },
    }
  }

interface MenuModalConfig {
    showMenu: boolean;
    action: Function;
}

const MenuModal = ({ showMenu, action }: MenuModalConfig) => {
  let navContent;
  const tabletSize = true

  if( showMenu && tabletSize ) {
    navContent = [...menuContent, ...navMenuContent, ...rightMenuContent];
  } else {
    navContent = navMenuContent;
  };

  return (
    <AnimatePresence>
        { showMenu && (

          <BackdropStyled as={motion.div}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
              <MenuNavDialog open={showMenu}
                as={motion.dialog}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                id='menuModal'
              >
                <MenuNavHeader>
                    <MenuButtonClose onClick={() => action(false)}>
                        <CloseIcon />
                    </MenuButtonClose>
                </MenuNavHeader>
                <MenuNavSection>
                  <MenuNavList>
                    <ListItems content={navContent}/>
                  </MenuNavList>
                </MenuNavSection>
            </MenuNavDialog>
          </BackdropStyled>
        )}
      </AnimatePresence>
  )
}

export default MenuModal

const MenuNavDialog = styled.dialog`
    display: flex;
    flex-direction: column;
    max-block-size: 100vh;
    top: 0;
    left: auto;
    right: 0;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.16);
    background-color: #fff;
    border: none;
    width: 311px;
    height: 100%;
    color: var(--tds-color--grey20);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 0;
    position: fixed;
    will-change: scroll-position;
    padding-block-end: var(--tds-size--6x);
    
    @media screen and ${device.mobile} {
      border-radius: 0;
      bottom: 0;
      max-block-size: 100vh;
    }
`
const MenuNavHeader = styled.div`
    display: flex;
    min-block-size: 80px;
    padding: 20px;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    z-index: 10;
`
const MenuButtonClose = styled.button`
    width: 40px;
    height: 40px;
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: var(--tds-size--6x);
    cursor: pointer;
    outline: none;
    padding: var(--tds-size--1x);
    z-index: 2;

    &:hover {
        background-color: var(--tds-bg-color-variant);
    }
`
const MenuNavSection = styled.section`
    padding-inline-end: var(--tds-size--4x);
    padding-inline-start: var(--tds-size--4x);
    padding-block-start: var(--tds-size--half);
    padding: 0 var(--tds-size--3x) var(--tds-size--6x);
    backdrop-filter: none;
`
const MenuNavList = styled.ol`
    display: flex;
    margin: 0;
    position: relative;
    align-items: normal;
    flex-direction: column;

    & li {
        margin-block-end: var(--tds-size--1x);
    }

    & span {
        display: inline-flex;
        inline-size: 100%;
        flex-grow: 1;
        margin: 0 var(--tds-size--half);
        text-align: start;
    }
`

const BackdropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 1;
`