import styles from './Home.module.scss'
function Home () {
    return (
        <>
        <section className={styles.center}>
            <h1>
            Welcome to the personal website of Adithya Reji.
            </h1>
        </section>
        <div className="ticks"></div>
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