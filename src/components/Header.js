import React from 'react'
import PropTypes from 'prop-types'

const headerSpan = {
    fontSize: '40px',
    fontWeight: 'bold'

}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span style={headerSpan}>J S</span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Joseph Stanfield</h1>
                <p>Full-Stack Web Developer</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Resume</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
