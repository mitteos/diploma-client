import styled from "styled-components";
import Link from "next/link";
import SvgHomePage from "@/assets/svgr/HomePage";
import SvgSubscriptionsPage from "@/assets/svgr/SubscriptionsPage";
import {useRouter} from "next/router";
import SvgLogo from "@/assets/svgr/Logo";
import SvgLogout from "@/assets/svgr/Logout";
import SvgProfile from "@/assets/svgr/Profile";
import SvgSendMail from "@/assets/svgr/SendMail";
import {useAppDispatch} from "@/hooks/redux";
import {userActions} from "@/store/features/user";

const routes = [
    {id: 1, icon: (active: boolean) => <SvgHomePage fill={active ? "#114FEE" : "#686868"}/>, href: "/"},
    {id: 2, icon: (active: boolean) => <SvgSubscriptionsPage fill={active ? "#114FEE" : "#686868"}/>, href: "/subscriptions"},
    {id: 3, icon: (active: boolean) => <SvgSendMail fill={active ? "#114FEE" : "#686868"}/>, href: "/chats"},
    {id: 4, icon: (active: boolean) => <SvgProfile fill={active ? "#114FEE" : "#686868"}/>, href: "/profile"},
]

export const Navigation = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleLogoutClick = () => {
        dispatch(userActions.userLogout())
    }

    return (
        <Container>
            <Logo href="/">
                <SvgLogo fill="#114FEE"/>
            </Logo>
            <Nav>
            {routes.map(route =>
                <NavItem key={route.id} href={route.href} $active={router.route === route.href}>
                    {route.icon(router.route === route.href)}
                </NavItem>
            )}
            </Nav>
            <LogoutButton onClick={handleLogoutClick}>
                <SvgLogout fill="#686868" />
            </LogoutButton>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  @media (max-width: 876px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    flex-direction: row;
    z-index: 10;
    background: #060419;
    padding: 10px 20px;
  }
`
const Logo = styled(Link)`
  @media (max-width: 876px) {
    display: none;
  }
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  @media (max-width: 876px) {
    flex-direction: row;
  }
`
const NavItem = styled(Link)<{$active?: boolean}>`
  transition: all .3s ease;
  border-radius: 11px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #1D192D;
  }
  background: ${({$active}) => $active && "#1D192D"};
  @media (max-width: 540px) {
    width: 40px;
    height: 40px;
  }
`
const LogoutButton = styled.div`
  transition: all .3s ease;
  cursor: pointer;
  border-radius: 11px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #1D192D;
  }
  @media (max-width: 540px) {
    width: 40px;
    height: 40px;
  }
`
