import React from 'react';
import '../Skills/style.css';

function Skills() {
    const state=[
        {   id:1,
            class:"devicon-javascript-plain colored",
        },
        {   id:2,
            class:"devicon-jquery-plain colored",
        },
        {   id:3,
            class:"devicon-nodejs-plain colored",
        },
        {   id:4,
            class:"devicon-express-original colored",
        },
        {   id:5,
            class:"devicon-sequelize-plain colored",
        },
        {   id:6,
            class:"devicon-mysql-plain-wordmark colored",
        },
        {   id:7,
            class:"devicon-postgresql-plain colored",
        },
        {   id:8,
            class:"devicon-mongodb-plain-wordmark colored",
        },
        {   id:9,
            class:"devicon-heroku-original colored",
        },
        {   id:10,
            class:"devicon-react-original colored",
        },
        {   id:11,
            class:"devicon-html5-plain colored",
        },
        {   id:12,
            class:"devicon-css3-plain-wordmark colored",
        },
        {   id:13,
            class:"devicon-bootstrap-plain colored",
        },
        {   id:14,
            class:"devicon-git-plain colored",
        },
        {   id:15,
            class:"devicon-github-plain colored",
        },
        {   id:16,
            class:"devicon-gitlab-plain colored",
        },
        {   id:17,
            class:"devicon-visualstudio-plain colored",
        },
        {   id:18,
            class:"devicon-webpack-plain-wordmark colored",
        },
        {   id:19,
            class:"devicon-slack-plain-wordmark colored",
        }

    ]
   



    return (
       <div className="container">
           <div className="box rounded">
             <h1 > Skills </h1>
           </div>
            <div className="row">
                {state.map(element=>{
                    return(
                        <i className={element.class +" col-3"} key={element.id}></i>
                    )
                })}
                
            </div>
       </div>
        
               

    )
}


export default Skills;

