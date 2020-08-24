import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'


export default function Home() {
  return (
  <div >
      <Head>
          <title>Hi, I'm Paul</title>
          <link rel="icon" href="/svg/18-red.svg" />
      </Head>
    <main>
    <Navbar />
        <div className={styles.landing}>
        <Container fluid className={"no-gutters mx-0 px-0"}>
          <Row xs={1}>
            <Col md={5, {order: 1}} sm={1, { order: 2 }} xs={ { order: 2 }} className="d-none d-sm-block">
              <div className={styles.mountainContainer}>
                <img src="/svg/mountain.svg" className={styles.mountains}></img>
              </div>
            </Col>
            <Col md={5, {order: 2}} sm={1, { order: 1 }} xs={ { order: 1 }}>
              <div className={styles.card}>
              <br />
              <h1 >Hi, I'm <strong>Paul Padian.</strong></h1>
              <hr/>
              <br />
              <h3>I'm a <strong>Full Stack Engineer </strong>based in Denver, CO.</h3>
              <p>I love delivering clean and efficient code.</p>
              <br />
              <div >
                <Link href='/about'><Button className="btn btn-primary btn-lg" variant="dark" id="about">Get to know me!</Button></Link>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
    </main>
  </div>
  )
}
