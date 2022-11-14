import './resume.css';
import imGithub from './github.svg';
import imGmail from './gmail.svg';
import imWhatsapp from './whatsapp.svg';
import imLinkedin from './linkedin.svg';
import imphone from './phone.svg';

function ReIcon(props) {
    const { img, lk, name } = props;
    if (!(lk)) {
        return null;
    }
    return (
        <span className="ReLink">&nbsp;&nbsp;
            <img src={img} />
            &nbsp;
            <a href={lk} target="_blank">{name}</a>
            &nbsp;&nbsp;
        </span>
    );

}
function ReHeader(props) {
    const { fullName, link } = props.ob;
    return (<header className="teCen">
        <h1 className="marBot">{fullName}</h1>
        <p>
            <ReIcon img={imGithub} lk={link.github} name="GitHub" />

            <ReIcon img={imGmail} lk={link.gmail} name={link.gmail} />

            <ReIcon img={imWhatsapp} lk={link.whatsapp} name={link.whatsapp} />

            <ReIcon img={imLinkedin} lk={link.linkedin} name="LinkedIn" />
        </p>
        <br />
    </header>
    );
}
function Resume(props) {
    const d = props.data;
    return (<>
        <div className="resume">
            <ReHeader ob={d} />
            <section>
                <h2>Education</h2>
                <table className="teCen">
                    <tbody>
                        <tr>
                            <th className="noWrap">Year</th>
                            <th>Degree</th>
                            <th>Institution</th>
                            <th>CGPA / Percentage</th>
                        </tr>
                        <tr>
                            <td className="noWrap">2020-2024</td>
                            <td>B.Tech (Computer Science and Engineering)</td>
                            <td>Indian Institute of Information Technology, Bhopal</td>
                            <td className="noWrap">CGPA: 8.41</td>
                        </tr>
                        <tr>
                            <td className="noWrap">2018-2020</td>
                            <td>Intermediate (TSBIE)</td>
                            <td>Nano Junior College</td>
                            <td className="noWrap">96.6%</td>
                        </tr>
                        <tr>
                            <td className="noWrap">2018</td>
                            <td>Class X (CBSE)</td>
                            <td>Academic Heights School</td>
                            <td className="noWrap">87.2%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <br />
            <section>
                <h2>Projects</h2>
                <article className="marBot">
                    <h3>
                        <b>
                            <span>AI Project</span> | <span>Detection of Breast Cancer</span> |{" "}
                            <span>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </span>
                        </b>
                        <span className="proDate">February 2022</span>
                    </h3>
                    <h3>
                        <b>
                            <span>Team Leader &amp; Lead Developer</span>
                        </b>{" "}
                        | <span>Team size : 7 People</span>
                    </h3>
                    <ul>
                        <li>Getting high accurate predictions for the health sector.</li>
                        <li>Dynamic predictions based on datasets accuracy.</li>
                    </ul>
                </article>
                <article className="marBot">
                    <h3>
                        <b>
                            <span>AI Project</span> | <span>Detection of Breast Cancer</span> |{" "}
                            <span>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </span>
                        </b>
                        <span className="proDate">February 2022</span>
                    </h3>
                    <h3>
                        <b>
                            <span>Team Leader &amp; Lead Developer</span>
                        </b>{" "}
                        | <span>Team size : 7 People</span>
                    </h3>
                    <ul>
                        <li>Getting high accurate predictions for the health sector.</li>
                        <li>Dynamic predictions based on datasets accuracy.</li>
                    </ul>
                </article>
                <article className="marBot">
                    <h3>
                        <b>
                            <span>AI Project</span> | <span>Detection of Breast Cancer</span> |{" "}
                            <span>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </span>
                        </b>
                        <span className="proDate">February 2022</span>
                    </h3>
                    <h3>
                        <b>
                            <span>Team Leader &amp; Lead Developer</span>
                        </b>{" "}
                        | <span>Team size : 7 People</span>
                    </h3>
                    <ul>
                        <li>Getting high accurate predictions for the health sector.</li>
                        <li>Dynamic predictions based on datasets accuracy.</li>
                    </ul>
                </article>
            </section>
            <br />
            <section>
                <h2>Skills</h2>
                <h3>
                    <b>Language: </b>C Language
                </h3>
                <h3>
                    <b>Web Development: </b>HTML, CSS, JavaScript, SQL, ReactJS, Django
                </h3>
                <h3>
                    <b>Other: </b>Photo Shop, MS Access
                </h3>
                <h3>
                    <b>Soft Skills: </b>Problem Solving, Effective Communication, Management
                    Skills, Perceptive
                </h3>
            </section>
            <br />
            <section>
                <h2>Achiecements</h2>
                <ul>
                    <li>
                        Secured 2nd position in IBM Innovation Camp: AI | IBM &amp; Edunet
                    </li>
                    <li>
                        Completion of Finding the leader in You (FLY)-Scholar Program |
                        Competitiveness Mindset Institute
                    </li>
                </ul>
            </section>
            <br />
            <section>
                <h2>Positions of Responsibilities</h2>
                <h3>
                    <b>Google Developer Student Club (GDSC) Lead</b>
                    <span className="proDate">July 2022 - Present</span>
                </h3>
                <br />
                <h3>
                    <b>Lead Developer at We Thinc Solutions</b>
                    <span className="proDate">December 2022 - Present</span>
                </h3>
                <ul>
                    <li>
                        {" "}
                        Built a group to have an environment to work-on different Ideas &amp; to
                        increase efficiency.
                    </li>
                </ul>
            </section></div>
    </>
    );
}
export default Resume;