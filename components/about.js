import Navbar from './navbar'
import Head from 'next/head'
import Link from 'next/link'
import {Card, Jumbotron} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>

                <Card>
                    <Card.Body>
                    <h5>Professional Summary</h5>
                    <p>I am an engineer who is passionate about developing unique solutions to technical problems. My experience with a wide network of languages and frameworks such as React, Swift, MongoDB, Vue and PostgreSQL makes me a formidable and dynamic developer across the full stack. I strive to grow and build upon these skills both personally and professionally in my next role as a software engineer.</p>
                    </Card.Body>
                </Card>
                {/* <Card>
                    <Card.Body>
                        <h5>Personal Interests </h5>
                        <p>
                        I have a diverse background that's rooted in the contemplative practices of meditation and yoga. Lately I've been focusing on hiking, skiing and camping. I have a personal goal of hiking all the 14'ers in colorado over the next five years. I love cooking, working out, playing with my dogs and watching The Office.
                        </p>
                    </Card.Body>
                </Card> */}
        </div>
    )
}