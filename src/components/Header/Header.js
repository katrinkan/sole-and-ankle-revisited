import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--colors-gray-300);
  overflow: auto;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    border-top: 4px solid var(--colors-gray-900);
    justify-content: space-between;
    align-items: center;
  }
  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${(props) => props.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--colors-secondary);
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

export default Header;
