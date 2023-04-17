import styled from "styled-components";
import Link from "next/link";
import SvgHomePage from "@/assets/svgr/HomePage";
import SvgSubscriptionsPage from "@/assets/svgr/SubscriptionsPage";
import SvgMailPage from "@/assets/svgr/MailPage";
import {useRouter} from "next/router";
import SvgLogo from "@/assets/svgr/Logo";
import SvgLogout from "@/assets/svgr/Logout";
import SvgProfile from "@/assets/svgr/Profile";

const routes = [
    {id: 1, icon: (active: boolean) => <SvgHomePage fill={active ? "#114FEE" : "#686868"}/>, href: "/"},
    {id: 2, icon: (active: boolean) => <SvgSubscriptionsPage fill={active ? "#114FEE" : "#686868"}/>, href: "/subscriptions"},
    {id: 3, icon: (active: boolean) => <SvgMailPage fill={active ? "#114FEE" : "#686868"}/>, href: "/chats"},
    {id: 4, icon: (active: boolean) => <SvgProfile fill={active ? "#114FEE" : "#686868"}/>, href: "/profile"},
]

export const Navigation = () => {

    const router = useRouter()

    return (
        <Container>
            <Link href="/">
                <SvgLogo fill="#114FEE"/>
            </Link>
            <Nav>
            {routes.map(route =>
                <NavItem key={route.id} href={route.href} $active={router.route === route.href}>
                    {route.icon(router.route === route.href)}
                </NavItem>
            )}
            </Nav>
            <NavItem href="/">
                <SvgLogout fill="#686868" />
            </NavItem>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
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
`
