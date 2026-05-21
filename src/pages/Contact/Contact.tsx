import NavBar from '../../components/NavBar/NavBar'
import styles from './Contact.module.scss'
function Contact () {
    return (
        <>
        <h1>Contact</h1>
        <section>
            <NavBar />
        </section>
        <section className={styles.center}>
            <p>
                You can reach me at my email address:   
            </p>
        </section>
        </>
    )
}
export default Contact