import './resume.css';
import imGithub from './github.svg';
import imGmail from './gmail.svg';
import imWhatsapp from './whatsapp.svg';
import imLinkedin from './linkedin.svg';
import React from 'react';

function ReIcon(props) {
    const { img, lk, name } = props;
    if (!(lk)) {
        return null;
    }
    return (
        <span className="ReLink">&nbsp;&nbsp;
            <img src={img} alt="Logo" />
            &nbsp;
            <a href={lk} target="_blank" rel="search noreferrer">{name}</a>
            &nbsp;&nbsp;
        </span>
    );

}
function ReHeader(props) {
    const { fullName, link } = props.ob;
    return (<header className="teCen">
        <h1 className="marBot">{fullName}</h1>
        <p className="divReLink">
            <ReIcon img={imGithub} lk={link.lgithub} name="GitHub" />

            <ReIcon img={imGmail} lk={link.lgmail} name={link.gmail} />

            <ReIcon img={imWhatsapp} lk={link.lwhatsapp} name={link.whatsapp} />

            <ReIcon img={imLinkedin} lk={link.llinkedin} name="LinkedIn" />
        </p>
        <br />
    </header>
    );
}

function ReEducation(props) {
    const edu = props.ob;
    const tabEdu = edu.map((det, index) => {
        return (<tr key={index}>
            <td className="noWrap">{Number(det.startYear)}-{Number(det.endYear)}</td>
            <td>{det.degree}</td>
            <td>{det.institution}</td>
            <td className="noWrap">
                {(det.CGPA) ? ("CGPA: " + Number(det.CGPA)) : (Number(det.percentage) + "%")}
            </td>
        </tr>
        )
    });
    return (
        <>
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
                        {tabEdu}
                    </tbody>
                </table>
            </section>
            <br />
        </>
    );
}
function ReProjects(props) {
    const pro = props.ob;
    const link = props.lik;
    const more = (link) ? (<><span>&#40;</span><a style={{ textTransform: "lowercase" }} href={link}>more</a><span>&#41;</span></>) : "";
    const tabPro = pro.map((det, index) => {
        const cat = (det.category) ? (<><span>{det.category}</span>&nbsp;&#124;</>) : null;
        const nam = (det.name) ? (<>&nbsp;<span >{det.name}</span>&nbsp;</>) : null;
        const aHre = ((det.link).trim() !== "") ? (<>&#124;&nbsp;<span ><a href={det.link} target="_blank" rel="noopener noreferrer">Live Demo</a></span></>) : null;

        const rolNam = ((det.role).trim() !== "") ? (<><b><span>{det.role}</span></b>&nbsp;&#124;</>) : null;
        const teatmp = (det.teamSize > 0) ? ("Team size : " + det.teamSize + ((det.teamSize > 1) ? " People" : " Person (me)")) : null;
        const teamSiz = (teatmp) ? (<>&nbsp;<span>{teatmp}</span>&nbsp;</>) : null;
        const durtmp = (det.duration) ? ("Duration : " + det.duration) : null;
        const durSiz = (durtmp) ? (<>&#124;&nbsp;<span>{durtmp}</span></>) : null;
        const achievement = det.achievements;

        const achiv = achievement.map((ach, index) => {
            if (ach.trim() === "") return null;
            return (<li key={index}>{ach}</li>);
        });
        return (
            <article className="marBot" key={index}>
                <h3><b>{cat}{nam}{aHre}</b><span className="proDate">{det.date}</span></h3>
                <h3>{rolNam}{teamSiz}{durSiz}</h3>
                <ul>{achiv}</ul>
            </article>
        )
    });

    return (
        <>
            <section>
                <h2>Projects {more}</h2>
                {tabPro}
            </section>
        </>
    );
}
function ReSkills(props) {
    const sk = props.ob;
    const tabSk = sk.map((det, index) => {
        if (det[0].trim() === "") return null;
        if (det[1].trim() === "") return null;
        return (<h3 key={index}><b>{det[0] + ": "}</b>{det[1]}</h3>);
    });
    return (
        <> <section>
            <h2>Skills</h2>
            {tabSk}
        </section>
            <br />
        </>
    );
}
function ReAchivement(props) {
    const ach = props.ob;
    const LisAch = ach.map((det, index) => {
        if (det.trim() === "") return null;
        return (<li key={index}>{det}</li>);
    });
    return (<><section>
        <h2>Achievements</h2>
        <ul>
            {LisAch}
        </ul>
    </section><br /></>
    );
}
function RePosition(props) {
    const pos = props.ob;
    const Lispos = pos.map((det, index) => {
        var LisFin, lisHig;
        if (det.achievements) {
            const ach = det.achievements;
            lisHig = ach.map((det, index) => {
                if (det.trim() === "") return null;
                return (<li key={index}>{det}</li>);
            });
            LisFin = (<ul>{lisHig}</ul>);
        } else { LisFin = null; }
        return (
            <React.Fragment key={index}>
                <h3>
                    <b>{det.title}</b>
                    <span className="proDate">{det.timeline}</span>
                </h3>
                {LisFin}<br />
            </React.Fragment>);
    });
    return (<><section>
        <h2>Positions of Responsibilities</h2>
        {Lispos}
    </section></>
    );
}
function Resume(props) {
    const d = props.data;
    return (<>
        <div className="resume">
            <ReHeader ob={d} />
            <ReEducation ob={d.education} />
            <ReProjects ob={d.projects} lik={d.portfolioLink} />
            <ReSkills ob={d.skills} />
            <ReAchivement ob={d.achievements} />
            <RePosition ob={d.positions} />
        </div>
    </>
    );
}
export default Resume;