import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'


import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import laughing from '../assets/images/fulls/laughing.jpeg'
import solo from '../assets/images/fulls/solo-logo.png'

const DEFAULT_IMAGES = [
    { id: '1', src: solo, thumbnail: solo, caption: 'Solo Project', description: 'Web application to help non-profits manage and utilize inventory to improve outcomes for clients.', link: 'https://lindsey-solo-project.herokuapp.com/'},
    { id: '2', src: laughing, thumbnail: laughing, caption: 'Jokes', description: 'A compilation of jokes told by various people', link: 'https://jen-stack-jokes2.herokuapp.com/'},
    // { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            name: '',
            email: '',
            message: '',
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }
    handleSubmit = () => {
        if ((this.state.name === '') || (this.state.email === '') || (this.state.message === '')) {
            alert('Please ensure the form is filled out entirely. Thank you.');
            return false;
        }
        window.open(`mailto:lmsandberg@stkate.edu?Subject=Show%20of%20Interest&Body=Hello,%20my%20name%20is%20${this.state.name}%20and%20my%20email%20is%20${this.state.email}.%0D%0A%0D%0A${this.state.message}`)
    };

    handleChange = property => event => {
        event.preventDefault();
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    };
    render() {
        const siteTitle = "Lindsey Sandberg"
        const siteDescription = "Personal Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Lindsey Sandberg</h2>
                        </header>
                        <p>Full-stack software developer and purveyor of social justice. Interested in the role that software can have in disease control and prevention.
                            Currently seeking employment opportunities.
                        </p>
                        <ul className="actions">
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        <ul className="actions">
                            {/* <li><a href="#" className="button">Full Portfolio</a></li> */}
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>The best way to reach me is via email, but feel free to reach out via phone call or LinkedIn</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange('name')} /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange('email')}/></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4" onChange={this.handleChange('message')}></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input onClick={this.handleSubmit} type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Minneapolis, Minnesota<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                       651-315-6483
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:lmsandberg@stkate.edu">lmsandberg@stkate.edu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex