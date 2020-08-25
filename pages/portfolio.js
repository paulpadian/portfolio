import Navbar from '../components/navbar'
import Link from 'next/link'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Row, Col} from 'react-bootstrap'
import styles from '../styles/Portfolio.module.css'

export default function About() {
    return (
        <div>
          <Head>
            <title>Paul's Portfolio</title>
            <link rel="icon" href="/svg/18-red.svg" />
          </Head>
          <Navbar />
          <Container>
            <br />         
            <h1> <strong>Paul's</strong> Portfolio:</h1>
            <hr />
            <Row>
              <Col lg={6}>
                <Card className={styles.card}>
                  <a href='//verve-refactor.herokuapp.com/' >
                  <img src='/Verve.png' className={styles.portfolioImg}/>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide}>
                  <Card.Body>
                    <h2>Crossfit Verve Refactor</h2>
                    <h5>Re-designed a local gym's website to incentivize monetization of content. Implemented authorization, authentication system and administrator controls. </h5>
                    <p>Technology Utilization: PSQL, Express, EJS & JQuery</p>
                    <a href='https://github.com/paulpadian/verve'><Button variant='dark'>See my code on github!</Button></a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row >
              <Col lg={6, {order : 2}}>
                <Card className={styles.card}>
                  <a href='https://paulpadian.github.io/minesweeper/'>
                    <img src='/Minesweeper.png' className={styles.portfolioImg}/>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide} >
                  <Card.Body>
                    <h2>Vanilla JS Minesweeper</h2>
                    <h5>Created a microsoft inspired minesweeper game from scratch to explore game logic.</h5>
                    <p>Technology Utilization: Javascript, CSS & HTML</p>
                    <a href='https://github.com/paulpadian/minesweeper'><Button variant='dark'>See my code on github!</Button></a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={6}>
                <Card className={styles.card}>
                  <a href='https://happy-hypatia-639c22.netlify.app/login'>
                    <img src='/Devspot.png' className={styles.portfolioImg}/>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide}>
                  <Card.Body>
                    <h2>Devspot</h2>
                    <h5>Worked with a team setting to create a platform for developers to post open-source application ideas.</h5>
                    <p>Technology Utilization: React, MongoDB, Express & Git </p>
                    <a href='https://github.com/jamo1998/Dev-Spot-2.0'><Button variant='dark'>See my code on github!</Button></a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
    )
}