import Head from 'next/head'
import Link from 'next/link'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

export default function portfolioNav() {
    // useEffect(() => {
    //     document.getElementById("home").style.color = "hotpink"
    // }, [])
    return (
        <div className={styles.nav}>
            <Navbar collapseOnSelect  fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
            <div className={styles.flip}>
                <img
                    alt=""
                    src="../svg/18.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /> {"  "}
                 Paul Padian
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/resume/paul-padian-resume.pdf">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}