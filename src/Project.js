import ProImg from './assets/Project.webp';

        function Project() {
            return (
                <div>
                    <section id="projects" className="section projects">
                        <div className="p-container">
                            <h2>My <span>Projects</span></h2>
                            <div className="projects-container">
        
                                <div className="project">
                                    <img src={ProImg} alt='no'/>
                                    <h3>AdminPortal</h3>
                                    <p>This project is a simple web portal using React states like `useState`, `useEffect`, `params` and Formik concepts.</p>
                                    <br/>  
                                    <a href="https://abdulmajeedhu.github.io/adminportal/" className="btn">View Project</a>
                                </div>
        
                                {/* <!-- Project 2 --> */}
                                <div className="project">
                                    <img src={ProImg} alt="Project 2"/>
                                    <h3>ShoppingCart</h3>
                                    <p>This project is a simple shopping cart add/remove functionality using React states like `useState`</p>
                                    <br/>
                                    <a href="https://abdulmajeedhu.github.io/shopping_cart/" className="btn">View Project</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        
    
export default Project