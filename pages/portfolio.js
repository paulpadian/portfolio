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
        <div className={styles.landing}>
          <Head>
            <title>Paul's Portfolio</title>
            <link rel="icon" href="/svg/18-red.svg" />
          </Head>
          <Navbar />
            <br /> 
            <br />
          <Container fluid className={"no-gutters mx-0 px-0"}>
          <Row >
            <Col sm={5} className="d-none d-sm-block">
              <div className={styles.mountainContainer}>
                  <img src="/svg/mountain.svg" className={styles.mountains}></img>    
              </div>
            </Col>
            <Col sm={6}>
                 
            <h1> <strong>Paul's</strong> Portfolio:</h1>
            <hr />
            <Row>
              <Col lg={6}>
                <Card className={styles.card}>
                  <a href='//verve-refactor.herokuapp.com/' >
                  <img src='/Verve.png' className={styles.image}/>
                    <div className={styles.overlay}>
                      <div className={styles.text}>See the live project!</div>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide}>
                  <Card.Body>
                    <h2>Crossfit Verve Refactor</h2>
                    <h5>Re-designed a local gym's website to incentivize monetization of content. Implemented authorization, authentication system and administrator controls. </h5>
                    <p>Technology Utilization: PSQL, Express, EJS & JQuery</p>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br/>
            <Row >
              <Col lg={6}>
                <Card className={styles.card}>
                  <a href='https://paulpadian.github.io/minesweeper/' >
                  <img src='/Minesweeper.png' className={styles.image}/>
                    <div className={styles.overlay}>
                      <div className={styles.text}>See the live project!</div>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide} >
                  <Card.Body>
                    <h2>Vanilla JS Minesweeper</h2>
                    <h5>Created a microsoft inspired minesweeper game from scratch to explore game logic.</h5>
                    <p>Technology Utilization: Javascript, CSS & HTML</p>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={6}>
                <Card className={styles.card}>
                  <a href='https://happy-hypatia-639c22.netlify.app/login'>
                    <img src='/Devspot.png' className={styles.image}/>
                    <div className={styles.overlay}>
                      <div className={styles.text}>See the live project!</div>
                    </div>
                  </a>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className={styles.cardHide}>
                  <Card.Body>
                    <h2>Devspot</h2>
                    <h5>Worked with a team setting to create a platform for developers to post open-source application ideas.</h5>
                    <p>Technology Utilization: React, MongoDB, Express & Git </p>
                   
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            </Col>
          </Row>
        </Container>
         
        </div>
    )
}