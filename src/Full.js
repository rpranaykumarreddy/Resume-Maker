import './App.css';
import Resume from './Resume';
import React from "react";


class FullFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Ravula Pranay Kumar Reddy",
      link: {
        github: "",
        lgithub: "",
        gmail: "rpranayreddy40@gmail.com",
        lgmail: "https://mailto:rpranayreddy40@gmail.com",
        whatsapp: "917680904589",
        lwhatsapp: "https://wa.me/917680904589",
        linkedin: "rpranaykumarreddy",
        llinkedin: "http://www.linkedin.com/in/rpranaykumarreddy"
      },
      education: [{
        startYear: "2020",
        endYear: "2024",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Indian Institute of Information Technology, Bhopal",
        CGPA: "8.41"
      }, {
        startYear: "2018",
        endYear: "2020",
        degree: "Intermediate in MPC",
        institution: "Nano Junior College, Nallakunta (TSBIE)",
        CGPA: "",
        percentage: "96.6"
      }, {
        startYear: "2020",
        endYear: "2024",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Academic Heights Public School, Bhongir (CBSE)",
        CGPA: "",
        percentage: "87.2"
      }],
      portfolioLink: "https://pranay.wethinc.in",
      projects: [{
        category: "Chrome Extension",
        name: "Youtube Playlist Ranger",
        link: "https://chrome.google.com/webstore/detail/alpnapppdjbdbbaagjpchaaipphcnejo",
        role: "Developer",
        teamSize: "1",
        duration: "4 days",
        achievements: ["Understanding the architecture of Chrome Extensions.", "Constant maintenance & bug fixing with version controls."],
        date: "October 22, 2022"
      }, {
        category: "Web App",
        name: "Bulk Certificate Maker & Verifier",
        link: "https://rpranaykumarreddy.github.io/youtube-Ext/",
        role: "Developer",
        teamSize: "2",
        duration: "2 days",
        achievements: ["Maker to produce certificate(.pdf) in bulk along with QR code for verification.", "Verifier to scan the QR Code on certificate & fetch the data of the certificate."],
        date: "September 22, 2022"
      }],
      skills: [
        ["Web Development", "HTML, CSS, JavaScript,SQL, ReactJS, Django"],
        ["Languages", "C lang"],
        ["Soft Skills", "Problem Solving, Effective Communication, Management Skills, Perceptive"],
        ["Others", "Git, GitHub, Chrome Extensions, Adobe Photoshop, MS Access"]
      ],
      achievements: [
        "Secured 2nd position in IBM Innovation Camp: AI | IBM & Edunet",
        "Completion of Finding the leader in You (FLY)-Scholar Program | Competitiveness Mindset Institute"
      ],
      positions: [{
        title: "Google Developer Student Club (GDSC) Lead",
        timeline: "July 2022 - Present",
        achievements: ["", ""]
      },
      {
        title: "Lead Developer at We Thinc Solutions (Freelance) ",
        timeline: "December 2020 – June 2022",
        achievements: ["Built a group to have an environment to work-on different Ideas & to increase efficiency.", ""]
      }
      ]
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({ [name]: value }));
  };

  setGmail = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    if (value.trim() === "") { value = "" }
    else {
      value = "mailto:" + value;
    }
    this.setLink(name, value);
  }
  setWhatsapp = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    if (value.trim() === "") { value = "" }
    else { value = "https://wa.me/" + value; }
    this.setLink(name, value);
  }
  setGithub = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState);
    if (value.trim() === "") { value = "" }
    else {
      value = "https://www.github.com/" + value;
    }
    this.setLink(name, value);
  }
  setLinkedin = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    value = value.trim();
    var prevState = this.state;
    prevState.link = { ...prevState.link, [name]: value };
    this.setState(prevState); if (value.trim() === "") { value = "" }
    else {
      value = "https://www.linkedin.com/in/" + value;
    }
    this.setLink(name, value);
  }
  setLink = (n, v) => {
    v = v.trim();
    n = "l" + n;
    var prevState = this.state;
    if (!(v.includes("http://") || v.includes("https://"))) {
      if (v.trim() === "") { v = "" }
      else {
        v = "https://" + v;
      }
    }
    prevState.link = { ...prevState.link, [n]: v };
    this.setState(prevState);
  }



  setEducation = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fStartYear", "fEndYear", "fDegree", "fInstitution", "fCGPA", "fPercentage"]
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.education[classIndex] = { ...prevState.education[classIndex], [nam]: val };
    });
    this.setState(prevState);
  }
  setProjects = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fCategory", "fName", "fLink", "fRole", "fTeamSize", "fDuration", "fDate"];
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.projects[classIndex] = { ...prevState.projects[classIndex], [nam]: val };
    });
    this.setState(prevState);
  }

  setProAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target.parentNode, "d");
    var achIn = 0;
    var ele = document.getElementsByClassName("fProAchievements");
    for (var i = 0; i < ele.length; i++) {
      if ((showIndex(ele[i].parentNode, "d")) === classIndex) {
        var val = ele[i].value;
        prevState.projects[classIndex].achievements[achIn++] = val;
      }
    }
    this.setState(prevState);
  }

  setSkills = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var temp = document.getElementsByClassName("fSkill");
    var val = temp[classIndex].value;
    prevState.skills[classIndex][0] = val;
    temp = document.getElementsByClassName("fSkillDes");
    val = temp[classIndex].value;
    prevState.skills[classIndex][1] = val;
    this.setState(prevState);
  }
  setAchievement = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var temp = document.getElementsByClassName("fAchi");
    var val = temp[classIndex].value;
    prevState.achievements[classIndex] = val;
    this.setState(prevState);
  }

  setPositions = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target, "f");
    var classList = ["fTitle", "fTimeline"];
    classList.forEach(className => {
      var temp = document.getElementsByClassName(className);
      var val = temp[classIndex].value;
      var nam = temp[classIndex].name;

      prevState.positions[classIndex] = { ...prevState.positions[classIndex], [nam]: val };
    });
    this.setState(prevState);
  }

  setPosAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    var classIndex = showIndex(e.target.parentNode, "d");
    var achIn = 0;
    var ele = document.getElementsByClassName("fPosAchievements");
    for (var i = 0; i < ele.length; i++) {
      if ((showIndex(ele[i].parentNode, "d")) === classIndex) {
        var val = ele[i].value;
        prevState.positions[classIndex].achievements[achIn++] = val;
      }
    }
    this.setState(prevState);
  }
  newForEdu = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.education.push({ startYear: "", endYear: "", degree: "", institution: "", CGPA: "", percentage: "" });
    this.setState(prevState);
  }
  newForProject = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.projects.push({
      category: "", name: "", link: "", role: "", teamSize: "", duration: "", date: "", achievements: ["", ""]
    });
    this.setState(prevState);
  }
  newForSkill = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.skills.push(["", ""]);
    this.setState(prevState);
  }
  newForAchi = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.achievements.push("");
    this.setState(prevState);
  }
  newForPosition = (e) => {
    e.preventDefault();
    var prevState = this.state;
    prevState.positions.push({
      title: "", timeline: "", achievements: ["", ""]
    });
    this.setState(prevState);

  }

  handleSubmit = e => {
    e.preventDefault();
    console("Submitted" + JSON.stringify(this.state));
  };

  render() {
    return (
      <>
        <div className='FormInter'>
          <form onSubmit={this.handleSubmit}>
            <input required name="fullName" onChange={this.handleChange} value={this.state.fullName} type="text" placeholder="Full Name" />
            <input name="github" onChange={this.setGithub} value={this.state.link.github} type="text" placeholder="github ID" />
            <input name="gmail" onChange={this.setGmail} value={this.state.link.gmail} type="text" placeholder="mailAdd" />
            <input name="whatsapp" onChange={this.setWhatsapp} value={this.state.link.whatsapp} type="number" placeholder="phoneNo" />
            <input name="linkedin" onChange={this.setLinkedin} value={this.state.link.linkedin} type="text" placeholder="linkedin ID" />
            <br /><br />
            <br /><br />
            <div id="divForEdu">
              {this.state.education.map((con, index) => {
                return (<NewForEduRow cha={this.setEducation} base={this.state.education} ind={index} key={index}></NewForEduRow>);
              })}
              <br />
              <button onClick={this.newForEdu} className="fAddEdu">+ Add Education</button>
            </div>
            <br /><br />
            <div id="divForPro">
              <input name="portfolioLink" onChange={this.handleChange} value={this.state.portfolioLink} type="text" placeholder="portfolio Link" />
              <br /><br />
              {this.state.projects.map((con, index) => {
                return (<NewForPro cha={this.setProjects} achCha={this.setProAchi} base={this.state.projects} ind={index} key={index}></NewForPro>);
              })}
              <br />
              <button onClick={this.newForProject} className="fAddProject">+ Add Projects</button>
            </div>
            <br /><br />
            <div id="divForSkills">
              {this.state.skills.map((con, index) => {
                return (<NewForSkills cha={this.setSkills} base={this.state.skills} ind={index} key={index}></NewForSkills>);
              })}
              <br />
              <button onClick={this.newForSkill} className="fAddSkills">+ Add Skills</button>
            </div>
            <br /><br />
            <div id="divForAchiv">
              {this.state.achievements.map((con, index) => {
                return (<NewForAchievement cha={this.setAchievement} base={this.state.achievements} ind={index} key={index}></NewForAchievement>);
              })}
              <br />
              <button onClick={this.newForAchi} className="fAddAchi">+ Add Achievement</button>
            </div>
            <br /><br />
            <div id="divForpositions">
              {this.state.positions.map((con, index) => {
                return (<NewForPosition cha={this.setPositions} achCha={this.setPosAchi} base={this.state.positions} ind={index} key={index}></NewForPosition>);
              })}
              <br />
              <button onClick={this.newForPosition} className="fAddPosition">+ Add Positions</button>
            </div>
            <br /><br />
          </form>
        </div>
        <Resume data={this.state} />
      </>
    );
  }
}


function NewForEduRow(props) {
  var { cha, base, ind } = props;
  return (<div className='divEduSer'>
    <input name="startYear" className="fStartYear" onChange={cha} value={base[ind].startYear} type="number" step="1" placeholder="Year of start" />
    <input name="endYear" className="fEndYear" onChange={cha} value={base[ind].endYear} type="number" step="1" placeholder="Year of end" />
    <input name="degree" className="fDegree" onChange={cha} value={base[ind].degree} type="text" placeholder="Degree" />
    <input name="institution" className="fInstitution" onChange={cha} value={base[ind].institution} type="text" placeholder="Institution" />
    <p>CGPA is preferred over Percentage</p>
    <input name="CGPA" className="fCGPA" onChange={cha} value={base[ind].CGPA} type="number" min="0" max="10" step="0.01" placeholder="CGPA" />
    <input name="percentage" className="fPercentage" onChange={cha} value={base[ind].percentage} type="number" min="0" max="100" step="0.01" placeholder="Percentage" />
    <br /><br />
  </div>
  );

}
function NewForPro(props) {
  var { cha, achCha, base, ind } = props;
  var achi = base[ind].achievements.map((con, index) => {
    return (<input name="achievements" className="fProAchievements" onChange={achCha} value={base[ind].achievements[index]} type="text" placeholder="Achievement" key={index} />);
  });
  return (
    <div className='divProSer'>
      <input name="category" className="fCategory" onChange={cha} value={base[ind].category} type="text" placeholder="Category" />
      <input name="name" className="fName" onChange={cha} value={base[ind].name} type="text" placeholder="Name" />
      <input name="link" className="fLink" onChange={cha} value={base[ind].link} type="text" placeholder="Link" />
      <input name="role" className="fRole" onChange={cha} value={base[ind].role} type="text" placeholder="Role" />
      <input name="teamSize" className="fTeamSize" onChange={cha} value={base[ind].teamSize} type="number" step="1" placeholder="Team Size" />
      <input name="duration" className="fDuration" onChange={cha} value={base[ind].duration} type="text" placeholder="Duration" />
      {achi}
      <input name="date" className="fDate" onChange={cha} value={base[ind].date} type="text" placeholder="Date" />
      <br /><br />
    </div>
  );

}
function NewForSkills(props) {
  var { cha, base, ind } = props;
  return (<div className='divSkillsSer'>
    <input name="skill" className="fSkill" onChange={cha} value={base[ind][0]} type="text" placeholder="Skill Title" />
    <input name="skillDes" className="fSkillDes" onChange={cha} value={base[ind][1]} type="text" placeholder="Skill Des" />
    <br /><br />
  </div>
  );

}
function NewForAchievement(props) {
  var { cha, base, ind } = props;
  return (
    <div className='divAchieveSer'>
      <input name="achievements" className="fAchi" onChange={cha} value={base[ind]} type="text" placeholder="Achievement" />
      <br /><br />
    </div>
  );

}

function NewForPosition(props) {
  var { cha, achCha, base, ind } = props;
  var achi = base[ind].achievements.map((con, index) => {
    return (<input name="achievements" className="fPosAchievements" onChange={achCha} value={base[ind].achievements[index]} type="text" placeholder="Achievement" key={index} />);
  });
  return (
    <div className='divPosSer'>
      <input name="title" className="fTitle" onChange={cha} value={base[ind].title} type="text" placeholder="Title" />
      <input name="timeline" className="fTimeline" onChange={cha} value={base[ind].timeline} type="text" placeholder="Timeline" />
      {achi}
      <br /><br />
    </div>
  );

}
function showIndex(evt, str) {
  var classList = evt.classList;
  var className;
  for (let i = 0; i < classList.length; i++) {
    if (classList[i].charAt(0) === str) {
      className = classList[i];
    }
  }
  var claArr = document.getElementsByClassName(className);
  for (let i = 0; i < claArr.length; i++)
    if (claArr[i] === evt) {
      //console.log("classIndex: " + i);
      return i;
    }
}

export default FullFun;