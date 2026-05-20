import NavBar from '../../components/NavBar/NavBar';
import styles from './About.module.scss';
function About () {
    return (
        <>
        <h1 className={styles.center}>
            About Me
        </h1>
        <section>
            <NavBar />
        </section>
        <section>
            <p>
                My name is Adithya Reji, and 
                I am a software engineer based in the United States. 
                I have a passion for building software that makes a positive impact on people's lives. 
                I have worked on a variety of different frameworks using different technologies.
            </p>
            <p>
                In my free time, I enjoy working out, playing video games, and spending time with my family and friends. 
                I enjoy learning about new topics in technology and science.
                I also enjoy reading where I enjoy learning about psychology in order to
                better understand myself and others which improves my capability to help people.
            </p>
        </section>
        </>
    )
}
export default About;