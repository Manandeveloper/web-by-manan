import React , {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MeImg from '../../assets/images/me.jpg'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // Scroll animation for image
        gsap.fromTo(
            '.about-title__img img',
            { bottom: '-100%' },
            {
                scrollTrigger: {
                    trigger: '.about-title__img',
                    start: window.innerWidth < 768 ? 'top 10%' : 'top 70%',
                    end: window.innerWidth < 768 ? 'bottom -20%' : 'bottom 50%',
                    scrub: 1.3,
                },
                bottom: 0,
                duration: 1.6,
                ease: 'power4.out',
            }
        );

        // Scroll animation for title letters
        gsap.fromTo(
            '.about-title__title_wrapper span',
            { y: '100%' },
            {
                scrollTrigger: {
                    trigger: '.about-title__title_wrapper',
                    start: window.innerWidth < 768 ? 'top 20%' : 'top 85%',
                    end: window.innerWidth < 768 ? 'bottom -10%' : 'bottom 50%',
                    scrub: 1.3,
                },
                y: 0,
                stagger: 0.1,
                duration: 1.2,
                ease: 'power4.out',
            }
        );

        // Scroll animation for each description block
        gsap.utils.toArray('.about-description__wrapper').forEach((wrapper, index) => {
            gsap.to(wrapper.children, {
                scrollTrigger: {
                    trigger: '.about',
                    start: '80% 80%',
                },
                y: 0,
                duration: 0.8,
                delay: 0.1 * index,
            });
        });

        // Scroll animation for hero-white (if used elsewhere)
        gsap.to('.hero-white', {
            scrollTrigger: {
                trigger: '.banner',
                start: '0% 0%',
                end: '200% 50%',
                scrub: true,
            },
            y: '-100%',
        });

        // Scroll to top on "more about me" click
        const link = document.querySelector('.about-more-btn a');
        const handleClick = () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 1100);
        };
        link.addEventListener('click', handleClick);

        return () => {
            link.removeEventListener('click', handleClick);
        };
    }, []);
    return(
        <div className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about-title">
                        <h1 className="about-title__title">
                            <span className="about-title__title_wrapper"><span>h</span></span>
                            <span className="about-title__title_wrapper"><span>e</span></span>
                            <span className="about-title__title_wrapper"><span>l</span></span>
                            <span className="about-title__title_wrapper"><span>l</span></span>
                            <span className="about-title__title_wrapper"><span>o</span></span>
                            <span className="about-title__title_wrapper"><span>o</span></span>
                            <span className="about-title__title_wrapper"><span>o</span></span>
                            <span className="about-title__title_wrapper"><span>o</span></span>
                            <span className="about-title__title_wrapper"><span>o</span></span>
                        </h1>
                        <div className="about-title__img">
                            <img src={MeImg} alt="" />
                        </div>
                    </div>

                    <div className="about-text">
                        <div className="about-description">
                            <span className="about-description__wrapper">
                                <span className="about-description__text">
                                    Hey, I’m Manan — a front-end developer who loves creating visually striking websites with a strong focus on animation and interaction.
                                </span>
                            </span>
                            <span className="about-description__wrapper">
                                <span className="about-description__text">
                                    Let’s make your ideas stand out in the digital world.
                                </span>
                            </span>
                        </div>
                        <div className="about-project">
                            <h2>Let's make your project special!</h2>
                        </div>
                    </div>
                </div>
                <div className="about-more-btn">
                    <a href="about" className="magnetic">more about me</a>
                </div>

            </div>
        </div>
    );
}
export default About;