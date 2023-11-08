import riyanImg1 from '../../assets/riyanKitchen/img1.png'
import riyanImg2 from '../../assets/riyanKitchen/img2.png'
import riyanImg3 from '../../assets/riyanKitchen/img3.png'
import resaleBdImg1 from '../../assets/resaleBD/img1.png'
import resaleBdImg2 from '../../assets/resaleBD/img2.png'
import resaleBdImg3 from '../../assets/resaleBD/img3.png'
import learnToDayImg1 from '../../assets/learnToDay/img1.png'
import learnToDayImg2 from '../../assets/learnToDay/img2.png'
import learnToDayImg3 from '../../assets/learnToDay/img3.png'
import educationMaster1 from '../../assets/educationMaster/educationMaster1.png'
import educationMaster2 from '../../assets/educationMaster/educationMaster2.png'
import educationMaster3 from '../../assets/educationMaster/educationMaster3.png'

export const projectsData = (
    [
        {
            title:"Education Master",
            subTitle: "A Learnig Management System (LMS)",
            images:[educationMaster1, educationMaster2, educationMaster3],
            gitHubLink:"https://github.com/Mostofa321/Education-Master",
            liveLink:"https://education-master-nkkgarpo6-mostofa321.vercel.app/",
            features:[
                "This is a single page application developed by using next js and typescript .",
                "On this single-page application added styles and responsive behavior by using tailwind",
                "Used material tailwind (component library) for building user interface",
            ],
            usedTechnologies: ["Next js", "React js", "TypeScript", "Tailwind CSS", "Material-tailwind", "React-icons etc.",],
        },
        {
            title:"Ryan's Kitchen",
            subTitle: "A Cloud Kitchen Servise Site",
            images:[riyanImg1, riyanImg2, riyanImg3],
            gitHubLink:"https://github.com/Mostofa321/Ryan-s-Kitchen",
            liveLink:"https://assignment-11-8bd74.web.app/",
            features:[
                "on this single-page application added responsive behavior by using react-bootstrap + bootstrap.",
                "Added email+password based authentication system and Google login system by Firebase",
                "Users can buy food and add reviews for foods and delete their reviews",
            ],
            usedTechnologies: ["React", "React-router", "Node Js", "Express Js", "MongoDB", "Javascript", "Bootstrap", "Firebase Auth"],
        },
        {
            title:"Resale BD",
            subTitle: "A Mobile Reselling Website",
            images:[resaleBdImg1, resaleBdImg2, resaleBdImg3],
            gitHubLink:"https://github.com/Mostofa321/ResaleBD",
            liveLink:"https://assignment-12-a2003.web.app/",
            features:[
                "In this project added Responsiveness by Tailwind CSS + Daisy Ui.",
                "Added signUp, login, and logout Authentication functionalities by Firebase And the user can create an account either as a seller or a Buyer",
                "Added Dashboard with conditional data for admin/seller/buyer.",
            ],
            usedTechnologies: ["React", "React-router", "React-query", "Node Js", "Express Js", "MongoDB", "Javascript", "Tailwind CSS", "Firebase Auth"],
        },
        {
            title:"Learn Today",
            subTitle: "A Learning platform Site",
            images:[learnToDayImg1, learnToDayImg2, learnToDayImg3],
            gitHubLink:"https://github.com/Mostofa321/Learn-Today",
            liveLink:"https://assignment-9-programming-hero.netlify.app/",
            features:[
                "On this single-page react application added responsive behavior by using bootstrap",
                "Added bar chart by using chart.js library",
                "Added four quiz categories and multiple quizzes under these categories by using third-party APIs",
            ],
            usedTechnologies: ["React", "React-router", "Javascript", "Chart.js,", "Bootstrap", ],
        },

    ]
)