import Navbar from './navbar'
import Head from 'next/head'
import Link from 'next/link'
import {Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <div>
                <Card>
                    <Card.Body>
                    <p>I am an engineer who is passionate about developing unique solutions to technical problems. My experience with a wide network of languages and frameworks such as React, Swift, MongoDB, Vue and PostgreSQL makes me a formidable and dynamic developer across the full stack. I strive to grow and build upon these skills both personally and professionally in my next role as a software engineer.</p>
                    </Card.Body>
                </Card>
                <br />
            </div>
                    <h4>My Tech Stack:</h4>
                        <div className={styles.stackContainer}>
                            <img src="/svg/javascript-original.svg" alt="Javascript Logo" className={styles.logo}/>
                            <img src="/svg/swift-plain.svg" alt="Swift Logo" className={styles.logo}/>
                            <img src="/svg/react-original.svg" alt="React Logo" className={styles.logo}/>
                            <img src="/svg/postgresql-original.svg" alt="Postgresql Logo" className={styles.logo}/>
                            <img src="/svg/mongodb-plain.svg" alt="MongoDb Logo" className={styles.logo}/>
                            <img src="/svg/css3-plain.svg" alt="Css Logo" className={styles.logo}/>
                            <img src="/svg/vuejs-original.svg" alt="Vue Logo" className={styles.logo}/>
                            <img src="/svg/python-plain.svg" alt="Python Logo" className={styles.logo}/>
                        </div>
                <br />
                <Card>
                    <Card.Body>
                        <h5>Personal Interests </h5>
                        <p>
                        I have a diverse background that's rooted in the contemplative practices of meditation and yoga. Lately I've been focusing on hiking, skiing and camping. I have a personal goal of hiking all the 14'ers in colorado over the next five years. I love cooking, working out, playing with my dogs and watching The Office.
                        </p>
                    </Card.Body>
                </Card>
                <br/>
           
        </div>
    )
}