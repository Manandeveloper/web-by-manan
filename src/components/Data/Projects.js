
import NineAxisImg from '../../assets/images/nine-axis.png';
import GreenlyImg from '../../assets/images/greenly_main_img.png';
import configImg from '../../assets/images/3d-config.jpg';
import SMBImage from '../../assets/images/SMB.jpg';
// import VitalNeuroImg from '../../assets/images/Vital Neuro.png';
// import Take2Image from '../../assets/images/take2.jpg';
// import ModelInvestingImage from '../../assets/images/Mondel Investing.png';
// import OfeliaImage from '../../assets/images/ofelia.jpg';
// import BeneBagsImage from '../../assets/images/BeneBegs.png';
// import EdisonImage from '../../assets/images/edisun.jpg';
const projects = [
     //    {
     //         id: 'vitalneuro',
     //         title: 'Vital Neuro',
     //         mainImage: VitalNeuroImg,
     //         shortdescription : 'Website For A Headphone Company',
     //         description: 'For Vital Neuro, a premium headphone eCommerce site built on Shopify, I was responsible for implementing custom CSS and smooth front-end animations. My focus was on enhancing the shopping experience with clean visuals, interactive transitions, and responsive design.',
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'https://vitalneuro.com/',
     //    },
     {
          id: '3dconfig',
          title: '3D Configurator',
          mainImage: configImg,
          shortdescription: 'Interactive configurator for sportswear',
          description: 'The client needed an interactive configurator for sportswear, including t-shirts, shorts, football jerseys, and jackets. The goal was to let users fully customize their garments before placing an order.I built a 3D configurator where users can rotate and zoom models, change colors, upload logos, add predefined patches, and customize player name and number on the back. It also allows exporting the selected configuration as an image, making the whole process simple and user-friendly.',
          skills: ['React Fiber', 'ThreeJS', 'Model Viewer', 'WebGl'],
          url: '',
     },
     {
          id: 'nineaxis',
          title: '3D Viewer Website',
          mainImage: NineAxisImg,
          shortdescription: 'Model Viewer Website For 3D Artist',
          description: 'This project was built for a 3D artist who specializes in creating and optimizing 3D models. The goal was to design a website where multiple 3D models could be displayed interactively without affecting performance.I developed a WordPress site with integrated 3D viewers, making sure models load efficiently and run smoothly across devices. The focus was on keeping the experience fast, clean, and easy to explore.',
          skills: ['Wordpress', 'CSS3', 'Responsive Design', 'WebGl', 'Model Viewer'],
          url: '',
     },
     {
          id: 'greenly',
          title: 'Greenly',
          mainImage: GreenlyImg,
          shortdescription: 'Website For A SaaS product',
          description: 'Greenly is a SaaS product with a digital-first brand identity. The goal was to create a clean and modern website that reflects its enterprise-level positioning.I developed a simple, user-friendly WordPress site focused on clarity, structure, and a smooth browsing experience across devices',
          skills: ['Wordpress', 'CSS3', 'Responsive Design'],
          url: 'https://vitalneuro.com/',
     },
     {
          id: 'smb',
          title: 'Start My Business',
          mainImage: SMBImage,
          shortdescription: 'Helps You To Start Your Own Business',
          description: 'For SMB, a React-based platform that helps users launch their own websites, I was responsible for building the entire front-end using React. This was my first major project with React, and it taught me how to effectively structure components, manage state, and collaborate with backend developers. I worked closely with the team to ensure a smooth integration and a user-friendly interface that supports small businesses in going digital.',
          skills: ['React', 'CSS3'],
          url: 'https://www.startmybusiness.com/',
     },

     //    {
     //         id: 'take2',
     //         title: 'Take2',
     //         mainImage: Take2Image,
     //         shortdescription : 'Skincare Product Website',
     //         description: 'Take2 is a Shopify-based eCommerce website for a beauty care brand with a focus on elegant design and user experience. My role included writing all custom CSS and JavaScript needed to bring the design to life. I implemented interactive elements and animations that enhanced the visual appeal, while ensuring the site remained responsive and easy to navigate.',
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'http://take2.care/',
     //    },
     //    {
     //         id: 'modelinvesting',
     //         title: 'Model Investing',
     //         mainImage: ModelInvestingImage,
     //         shortdescription : 'Modern solution for portfolio management',
     //         description: "Model Investing is a WordPress WooCommerce site that offers strategic investment models for users' portfolios. I led the end-to-end development of the website, from layout design to performance optimization. My responsibilities included setting up WooCommerce, customizing themes, and ensuring a seamless user experience.",
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'https://modelinvesting.com/',
     //    },
     //    {
     //         id: 'ofelia',
     //         title: 'Ofelia',
     //         mainImage: OfeliaImage,
     //         shortdescription : 'A leader in the textile industry of India.',
     //         description: 'Ofelia is a textile company specializing in yarns, weaves, and knits. I developed the full website from scratch using HTML, CSS, and JavaScript. The site is clean, fast, and focused on showcasing the brand’s craftsmanship through a simple and effective layout.',
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'https://ofeliagroup.com/',
     //    },
     //    {
     //         id: 'benebags',
     //         title: 'Bene Bags',
     //         mainImage: BeneBagsImage,
     //         shortdescription : 'Italian luxury handbags brand',
     //         description: "Benebags is an Italian luxury brand offering handbags, belts, and accessories. Built on Shopify, I handled the complete front-end development, including all animations and UI interactions. The site delivers a smooth, elegant experience that reflects the brand's premium identity. ",
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'https://www.benehandbags.com/',
     //    },
     //    {
     //         id: 'edisun',
     //         title: 'Edisun Renewables',
     //         mainImage: EdisonImage,
     //         shortdescription : 'Build custom and complex solar systems',
     //         description: 'Edisun is a solar solutions company providing systems for homes, offices, and commercial rooftops. I designed and developed the full WordPress site, integrating custom layouts and product sections. The result is a clean, informative, and conversion-friendly platform.',
     //         skills: ['React', 'GSAP', 'SCSS'],
     //         url:'https://edisunrenewables.com/',
     //    },
];

export default projects;
