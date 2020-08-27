import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container} from 'react-bootstrap'
import About from '../components/about.js'

export default function Home() {
  return (
  <div >
      <Head>
          <title>Hi, I'm Paul</title>
          <link rel="icon" href="/svg/18-red.svg" />
      </Head>
    <main>
    <Navbar />
    <br />
    <br />
        <div className={styles.landing}>
        <Container fluid className={"no-gutters mx-0 px-0"}>
          <Row >
            <Col sm={5} className="d-none d-sm-block">
              <div className={styles.mountainContainer}>
                  <img src="/svg/mountain.svg" className={styles.mountains}></img>    
              </div>
            </Col>
            <Col sm={6}>
              <div className={styles.card}>
                <br />
                <h1 >Hi, I'm <strong>Paul Padian</strong>.</h1>
                <hr/>
                <h3>I'm a <strong>Full Stack Engineer</strong>.</h3>
                <p>I love delivering clean and efficient code.</p>
                <br/>
                <h5>📍 Denver, CO</h5>
                <h5>📨 <a className={styles.mail} href="mailto:pdpadian@gmail.com?subject=Contact Paul">pdpadian@gmail.com</a></h5>
                <br />
                <h5>Connect with me:</h5>
                <a href="https://github.com/paulpadian/"><img src="/svg/github-original.svg" alt="Github Link Image" className={styles.logo}/></a>
                <a href='https://www.linkedin.com/in/paul-padian/'><img src="/svg/linkedin-plain.svg" alt="Linkedin Link Img" className={styles.logo}/></a>
                <br />
                <br />
                <Link href='/resume/paul-padian-resume.pdf'><Button className="btn btn-primary btn-lg" variant="dark" download >Download my Resume</Button></Link>
                <br />
                <br />
              <div >
                <About />
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
