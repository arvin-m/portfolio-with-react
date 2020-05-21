import React from 'react';
import '../Card/style.css';

function Card() {
    const projects = [
        {
            id: 1,
            title: "Hiker Guide",
            comment: "looking for trail around you or specific city ? this app is created for you !",
            img: "Assets/img/project-pic/hiking_1.png",
            repo_link: "https://github.com/arvin-m/theHikersGuide",
            live_link: "https://aagrosse.github.io/theHikersGuide/"

        },
        {
            id: 2,
            title: "Weather Dashboard",
            comment: "Get weather information of your city or specific city you're looking for .",
            img: "Assets/img/project-pic/weather_1.png",
            repo_link: "https://github.com/arvin-m/Weather-Dashboard",
            live_link: "https://arvin-m.github.io/Weather-Dashboard/"

        },
        {
            id: 3,
            title: "Calender Content",
            comment: " a daily calender to manage your todo list base on office hours.",
            img: "Assets/img/project-pic/calendar_1.png",
            repo_link: "https://github.com/arvin-m/Daily-Calendar",
            live_link: "https://arvin-m.github.io/Daily-Calendar/"

        },
        {
            id: 4,
            title: "JavaScript Quiz",
            comment: "A little javascript Code Quiz!",
            img: "Assets/img/project-pic/quiz_1.png",
            repo_link: "https://github.com/arvin-m/code-quiz",
            live_link: "https://arvin-m.github.io/code-quiz/"

        },
        {
            id: 5,
            title: "Template Engine",
            comment: " Node CLI application that generates an HTML webpage that displays summaries for each person!",
            img: "Assets/img/project-pic/template-engine_1.png",
            repo_link: "https://github.com/arvin-m/Template-Engine",
            live_link: "https://github.com/arvin-m/Template-Engine/blob/master/output/process.gif"

        },
        {
            id: 6,
            title: "Burger App",
            comment: "Eat-Da-Burger is a burger logger app with MySQL, Node, Express, Handlebars and a homemade ORM .",
            img: "Assets/img/project-pic/hamburger_1.png",
            repo_link: "https://github.com/arvin-m/burger",
            live_link: "https://arvin-burger-shack.herokuapp.com/"

        },
        {
            id: 7,
            title: "Stop and shop App",
            comment: "An online store application",
            img: "Assets/img/project-pic/shopping_1.png",
            repo_link: "https://github.com/arvin-m/Stop-And-Shop",
            live_link: "https://stop-and-shop-2020.herokuapp.com/"

        },
        {
            id: 8,
            title: "Workout Tracker",
            comment: " Aplication for tracking on your workout.Stay Fit !",
            img: "Assets/img/project-pic/activity_tracker_1.png",
            repo_link: "https://github.com/arvin-m/Workout_Tracker",
            live_link: "https://calm-hamlet-90119.herokuapp.com/"

        },
        {
            id: 9,
            title: "Employee Directory",
            comment: "Creating a random employee directory with REACT !",
            img: "Assets/img/project-pic/employee_directory_1.png",
            repo_link: "https://github.com/arvin-m/employee-directory",
            live_link: "https://arvin-m.github.io/employee-directory/"

        },
        {
            id: 10,
            title: "Google Search book ",
            comment: "Creating React-based Google Books Search app !",
            img: "Assets/img/project-pic/google-search-book.png",
            repo_link: "https://github.com/arvin-m/google-books-search",
            live_link: "https://google-book-search--react.herokuapp.com/"

        }
        
    ]






    return (
        <div className=" container">
            <div className="box rounded">
                <h2>Experience</h2>
            </div>
            <div className="card-deck">
                <div className="row">
                    {projects.map(project => {
                        return (
                            <div className="col-sm-12 col-md-3 col-lg-3 " key={project.id}>
                                <div className="card">
                                    <img src={project.img} className="card-img-top" style={{ height: "12rem" }} alt="./Assets/img/project-pic/undraw_shopping_.png" />
                                    <div className="card-body" style={{ height: "10rem" }}>
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.comment}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center">
                                        <a href={project.repo_link} target="_blank" className="card-link fab fa-github-alt "></a>
                                        <a href={project.live_link} target="_blank" className="card-link fab fa-chrome "></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


    )
}


export default Card;
