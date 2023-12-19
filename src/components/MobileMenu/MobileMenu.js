/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <MobileFooter>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </MobileFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: var(--color-background);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  padding: 32px;
  background-color: var(--color-white);
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16} rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileFooter = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16} rem;
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-normal);
`;

export default MobileMenu;
