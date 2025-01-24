import hero from './assets/hero.jpg'
function About(){
    return(
        <section id="about" className="section about">
        <div className="a-container">
            <div className="profile">
                <img src={hero}  className="profile-img"/>
            </div>
            <div className="bio">
                <h2>Hello, I'm<span> ABDUL MAJEEDHU A</span></h2>
                <p>I am a passionate Front-End Developer with skills in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and create amazing user experiences. Let's connect and build something great!</p>
            </div>
        </div>
    </section>
    )
};

export default About