import styles from '../styles/About.module.css'

export default function stack() {
    return (
        <div>
            <h5>My Tech Stack:</h5>
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
        </div>
    )
}