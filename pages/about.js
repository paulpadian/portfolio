import Navbar from '../components/navbar'
import Head from 'next/head'
import Link from 'next/link'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <Head>
                <title>About Paul</title>
                <link rel="icon" href="/svg/18-red.svg" />
            </Head>
            <Navbar />
            <div className="container">
                <Jumbotron>
                    <h1>About <strong>Paul</strong> :</h1>
                    <hr />
    
                    <h5>I am a full-stack web developer who is inspired to bridge my dynamic programming skills with my healthcare experience. I strive to serve local organizations with creative development solutions that stem from an eclectic and contemplative background.</h5>
                    <br />
                    <h4>My Tech Stack:</h4>
                    <div className={styles.stackContainer}>
                        <img src="/svg/javascript-original.svg" alt="Javascript Logo" className={styles.logo}/>
                        <img src="/svg/swift-plain.svg" alt="Swift Logo" className={styles.logo}/>
                        <img src="/svg/react-original.svg" alt="React Logo" className={styles.logo}/>
                        <img src="/svg/postgresql-original.svg" alt="Postgresql Logo" className={styles.logo}/>
                        <img src="/svg/mongodb-plain.svg" alt="Postgresql Logo" className={styles.logo}/>
                        <img src="/svg/css3-plain.svg" alt="Postgresql Logo" className={styles.logo}/>
                        <img src="/svg/vuejs-original.svg" alt="Postgresql Logo" className={styles.logo}/>
                    </div>
                    <br />
                    <h5>Other than Coding my Passions are:</h5>
                    <p>Yoga</p>
                    <p>Meditation</p>
                    <p>Skiing</p>
                    <p>Camping</p>
                    <p>Hiking (especially 14'ers)</p>
                    <br/>
                    <Link href='/resume/paul-padian-resume.pdf'><Button className="btn btn-primary btn-lg" variant="dark" download >Download my Resume</Button></Link>
                </Jumbotron>
            </div>
        </div>
    )
}