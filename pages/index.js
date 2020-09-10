import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import {Row, Col, Container, Jumbotron} from 'react-bootstrap'
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

        <div className={styles.landing}>
        <Container fluid className={"no-gutters mx-0 px-0"}>
          <Row >
            <Col sm={5} className="d-none d-sm-block">
              <div className={styles.mountainContainer}>
                  <img src="/svg/61.svg" className={styles.mountains}></img>    
              </div>
            </Col>
            <Col sm={6}>
              <div>
                <br />
                <h1 >Hi, I'm <strong>Paul Padian</strong>.</h1>
                <hr/>
               
                <h2>I'm a <strong>Full Stack Engineer</strong>.</h2>
                <h5>I love delivering clean and efficient code.</h5>
               
                <h5>📍 Denver, CO</h5>
                <h5>📨 <a className={styles.mail} href="mailto:pdpadian@gmail.com?subject=Contact Paul">pdpadian@gmail.com</a></h5>
                <br />
                <Jumbotron className={styles.homeJumbo}>
                <h4>Connect with me:</h4>
                <a href="https://github.com/paulpadian/"><img src="/svg/github-original.svg" alt="Github Link Image" className={styles.logo}/></a>
                <a href='https://www.linkedin.com/in/paul-padian/'><img src="/svg/linkedin-plain.svg" alt="Linkedin Link Img" className={styles.logo}/></a>
                <br />
                <br />
                <Link href='/resume/paul-padian-resume.pdf'><Button className="btn btn-primary btn-lg" variant="dark" download >Download My Resume!</Button></Link>
                <br />
                <br />
              <div>
                <About />
              </div>
              </Jumbotron>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
    </main>
  </div>
  )
}
