import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Animate} from 'react-simple-animate';
import './styles.scss';
const Home=()=>{

    const navigate=useNavigate();

    /*con*/
    const handleNavigateToContactMePage=()=>{
        navigate("/about");
    };
    return (
        <div>
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Swasti goyal
                    <br/>
                    MERN Stack developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform:'translateY(550px)'
            }}
            end={{
                transform:'translatex(0px)'
            }}
            >
            <div className="home__contact-me">
                <button onClick={handleNavigateToContactMePage}>About me</button>

            </div>

            </Animate>
            
        </section>
        </div>
    )

}
export default Home;