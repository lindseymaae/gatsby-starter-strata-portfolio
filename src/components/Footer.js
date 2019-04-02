import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/lindseymaae" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="lmsandberg@stkate.edu" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://www.linkedin.com/in/lindsey-sandberg-611346123/"><span className="label">LinkedIn</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
