import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import react from '../images/react.png'
import boot from '../images/boot.png'
import js from '../images/js.png'
import less from '../images/less.png'
import node from '../images/node.png'
import sql from '../images/sql.jpg'
import { auto } from 'eol';


const Title = {
  margin: '0 auto',
  marginBottom: '30px'

}

const UL = {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginBottom:'30px'
}

const About = {
  fontFamily: 'source sans pro',
  fontSize: '1.2rem',
  marginBottom: '10px'
}
const AboutP = {
  fontFamily: 'source sans pro',
  fontSize: '1rem',
  marginBottom: '20px'
}

const imageWork = {
  height:'40px',
  width:'9%'
}

const headerThree = {
  textDecoration: 'underline'
}

const Resume = {
  height: '100%'
}


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 style={Title} className="major">Projects</h2>
          <div style={UL} className="icons">
            <img style={imageWork} src={react} alt="" />
            <img style={imageWork} src={boot} alt="" />
            <img style={imageWork} src={js} alt="" />
            <img style={imageWork} src={less} alt="" />
            <img style={imageWork} src={node} alt="" />
          </div>
          <div>
            <a href='https://fitmetrix.netlify.com/'>
              <h3 style={headerThree}>Fitmetrix</h3>
            </a>
            <h4>Stack Used: ReactJS | NodeJS | SQL</h4>
            <p style={AboutP}>
              This app was developed as part of my capstone with Lambda School.  We were given a wireframe of an app that was to be developed and we were given the responsibility of choosing which stack to build the application on as well as the design.  We built the back-end using Node.js and SQL while we built our front-end using React along with a number of other libraries.
               Styling was completed using styling-components. 
            </p>

            <a href='https://reactnoteproject.netlify.com/'>
              <h3 style={headerThree}>Lambda Notes</h3>
            </a>
            <h4>Stack Used: ReactJS | NodeJS | SQL</h4>
            <p style={AboutP}>
              This application was developed as part of a project week at Lambda School. We were given a mock-up and one week in order to complete this project.  The front-end was built using ReactJS while the back-end was built using NodeJS and SQL.
              
            </p>
            </div>

          <p></p>
          <p></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 style={Title} className="major">About Me</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p style={About}>Hello!</p>
          <p style={AboutP}>My name is Joseph Stanfield and I'm a full stack Web-Developer with experience working with the latest web technologies. What's most important to me is my family, then my career.  I approach my career the same as I do my family, with passion, drive and love. I am always striving to learn new technologies and to become a better web developer. In addition, I have a strong background in team and project management.
          
          </p><p style={AboutP}>I began my Full-Stack Web Development 
          journey in early 2018 when I began at Lambda School. Nine exhausting months later, I am now a qualified Full-Stack Web Developer with specialties in React, Node and SQL. I have completed at least fifteen projects over the past year, starting with the simple and continuing with more 
          and more complex applications. Take a look at some of them on my <a href='https://github.com/CookieMonsta89?tab=repositories'>Github!</a>  </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 style={Title} className="major">Contact</h2>
          <ul style={UL} className="icons">
          <li><a href="https://www.facebook.com/joe.stanfield.14" className="icon fa-instagram"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/stickmonster89/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/joseph-stanfield-4a83a757/" className="icon fa-linkedin"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/CookieMonsta89" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="mailto:jlstan06@yahoo.com?Subject=Portfolio%20Reachout" className="icon fa-envelope"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeoutOne' : ''}`} style={{display:'none'}}>
          <h2 style={Title} className="major">Resume</h2>
          <div style={Resume}>
            <iframe src="https://resume.creddle.io/embed/b4hdkq76mtw"
              width="100%" height="80%" seamless></iframe>
          </div>
          {close}
          
        </article>

      </div>

      
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main