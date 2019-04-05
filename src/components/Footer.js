import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/lindseymaae" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:lmsandberg@stkate.edu" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://www.linkedin.com/in/lindsey-sandberg-611346123/" className= "icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy;Lindsey Sandberg</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
