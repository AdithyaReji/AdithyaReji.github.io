import styles from './Home.module.scss'
import NavBar from '../../components/NavBar/NavBar';
function Home () {
    return (
        <>
        <section>
            <NavBar />
        </section>
        <section className={styles.center}>
            <h1>
            Welcome to the personal website of
            </h1>
            <h1>
                Adithya Reji
            </h1>
        </section>
        <div className="ticks"></div>
        <section className={styles.nextSteps}>
            <div>
                Hello, I am Adithya Reji.
                CS & Physics graduate interested in software engineering solutions to help people and explore deep questions about the Universe in the process.
                Welcome to my page. Browse through the links above to learn more about me, my projects, and how to contact me.
            </div>
        </section>
        <section className={styles.nextSteps}>
            <div>
                This is a work in progress, and I will be adding more content to this website in the following weeks!
            </div>
        </section>
        <div className="ticks"></div>
        <section className={styles.spacer}></section>
        </>
    )
}
export default Home