import { useState, type FormEvent } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import styles from './Contact.module.scss'

const CONTACT_EMAIL = 'adithyareji3@gmail.com'

function Contact () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const subject = `Message from ${name || 'website visitor'}`
        const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <>
        <section>
            <NavBar />
        </section>
        <h1>Contact</h1>
        <section className={styles.center}>
            <p>
                You can reach me at my email address: {CONTACT_EMAIL}
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    className={styles.textarea}
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                />
                <Button variant="primary">Send message</Button>
            </form>
        </section>
        </>
    )
}
export default Contact