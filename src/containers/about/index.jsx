import React from 'react';
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import {Animate} from 'react-simple-animate';
import {FaDev,FaDatabase} from 'react-icons/fa';
import {DiGithub,DiMongodb} from 'react-icons/di';
import './styles.scss';
const jobSummary="A self driven, honest, sincere and meticulous B.Tech graduating skilled at problem solving with a strong foundation in mathematics. Also Seasoned and independent MERN stack Developer with experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.Passionate to learn and ability to perform well in a team.";
const personalDetails=[
    {
        label:"Name",
        value:"Swasti Goyal",
    },
    {
        label:"Age",
        value:"20",
    },
    {
        label:"Address",
        value:"India",
    },
    {
        label:"Email",
        value:"swastigoyal2856@gmail.com",
    }
]
const About=()=>{
    return (
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About me"
            icon={<BsInfoCircleFill size={40}/>}
            />
            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform:'translateX(-900px)'
            }}
            end={{
                transform:'translatex(0px)'
            }}
            >
                <h3>Full stack developer</h3>
                <p>{jobSummary}</p>
                </Animate>
                <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform:'translateX(500px)'
            }}
            end={{
                transform:'translatex(0px)'
            }}
            >
                <h3 className="personalInformationHeaderText">
                    Personal Information
                </h3>
                <ul>
                    {personalDetails.map((item,i)=>(
                        <li key={i}>
                            <span className="title">
                                {item.label}
                            </span>
                            <span className='value'>
                                {item.value}
                            </span>
                        </li>
                    ))}
                </ul>
                </Animate>
                </div>
                <div className='about__content__servicesWrapper'>
                <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform:'translateX(600px)'
            }}
            end={{
                transform:'translatex(0px)'
            }}
            >
                    <div className='about__content__servicesWrapper__innerContent'>
                    <div><FaDev color="var(--yellow-theme-main-color)" size={50}/></div>
                    <div><DiMongodb color="var(--yellow-theme-main-color)" size={50}/></div>
                    <div><FaDatabase color="var(--yellow-theme-main-color)" size={50}/></div>
                    <div><DiGithub color="var(--yellow-theme-main-color)" size={50}/></div>
                    </div>
                    </Animate>
                    

                </div>
    
            </div>

        </section>
    )
}
export default About