import styles from './Projects.module.scss'
import NavBar from '../../components/NavBar/NavBar';
function Projects() {
    return (
        <>
        <h1 className={styles.center}>
            Projects
        </h1>
        <section>
            <NavBar />
        </section>
        <section className={styles.center}>
            <p>
                I have worked on a variety of different projects.
            </p>
        </section>
        </>
    )
}
export default Projects;