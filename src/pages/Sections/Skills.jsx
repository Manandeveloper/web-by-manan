import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HtmlImg from '../../assets/images/html.png'
import JsImg from '../../assets/images/js.png'
import CssImg from '../../assets/images/css.png'
import GsapImg from '../../assets/images/gsap.png'
import ReactImg from '../../assets/images/react.png'
import WordpressImg from '../../assets/images/wordpress.png'
import GithubImg from '../../assets/images/github.png'
import JqueryImg from '../../assets/images/jquery.png'
import ShopifyImg from '../../assets/images/shopify.png'
// const skillsList = [
//     "html",
//     "js",
//     "css",
//     "gsap",
//     "react",
//     "wordpress",
//     "github",
//     "jquery",
//     "shopify",
// ];
const skillsList = [
    { name: 'html', img: HtmlImg },
    { name: 'js', img: JsImg },
    { name: 'css', img: CssImg },
    { name: 'gsap', img: GsapImg },
    { name: 'react', img: ReactImg },
    { name: 'wordpress', img: WordpressImg },
    { name: 'github', img: GithubImg },
    { name: 'jquery', img: JqueryImg },
    { name: 'shopify', img: ShopifyImg },
];
const Skills = () => {
    const hoveredImage = useRef(null);
    const imagesContainer = useRef(null);

    gsap.to("#roundmove", {
        duration: 2,               // Duration for each direction (2 seconds)
        y: "1rem",                 // Move along the Y-axis (vertical movement)
        repeat: -1,                // Repeat indefinitely
        yoyo: true,                // Reverse direction after each repeat
        ease: "power2.inOut"       // Smooth easing for the movement
    });

    const handleMouseEnter = (label) => {
        hoveredImage.current = label;
        gsap.killTweensOf(`.image-${label}`);

        const targetBlock = document.querySelector(
            `.categories-block[data-label="${label}"]`
        );
        if (targetBlock) targetBlock.classList.add("active");

        gsap.set(`.image-${label}`, { bottom: "-100%" });
        gsap.to(`.image-${label}`, {
            bottom: "0%",
            duration: 0.8,
            ease: "power4.inOut",
            overwrite: "auto",
        });
    };

    const handleMouseLeave = () => {
        const label = hoveredImage.current;
        if (!label) return;

        gsap.killTweensOf(`.image-${label}`);
        hoveredImage.current = null;

        gsap.to(`.image-${label}`, {
            bottom: "-100%",
            duration: 0.8,
            delay: 0.3,
            ease: "power3.inOut",
        });

        document.querySelectorAll(".categories-block").forEach((block) =>
            block.classList.remove("active")
        );
    };

    const handleMouseMove = (e) => {
        if (window.innerWidth > 768 && imagesContainer.current) {
            const rect = imagesContainer.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            gsap.to(".images-wrap", {
                x: mouseX,
                xPercent: -100,
                y: mouseY,
                yPercent: -50,
                ease: "power3.out",
            });
        }
    };
    return (
        <div className="skill-section">
            <div className="container">
                <h2>skills <span id="roundmove"></span></h2>
                <div className="wrap">
                    <div className="left-wrap">
                        <p>I craft interactive, modern websites using powerful tools. Animation, design, and
                            functionality come together in every line of code I write.</p>
                    </div>
                    <div
                        className="right-wrap"
                        onMouseMove={handleMouseMove}
                        ref={imagesContainer}
                    >
                        <div className="images">
                            {skillsList.map((skill) => (
                                <div className="images-wrap" key={skill.name}>
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className={`image image-${skill.name}`}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="categories-wrapper">
                            <div className="categories">
                                {skillsList.map((skill) => (
                                    <a
                                        key={skill.name}
                                        className="categories-block"
                                        data-label={skill.name}
                                        onMouseEnter={() => handleMouseEnter(skill.name)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="categories-block__text">
                                            <div className="categories-block__text_first-title">
                                                {skill.name.toUpperCase().split('').map((char, i) => (
                                                    <span key={i}>{char}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;