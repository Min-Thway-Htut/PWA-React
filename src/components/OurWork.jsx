import React from "react";
import './OurWork.css';

const OurWork = () => {
    return (
        <div className='main-container'>
            <div className="title-part">
                <p id='first-title'>Crowd Monitoring</p>
                <p id='second-title'>Initial situation</p>
            </div>
            <div className="paragraph">
                <p>Public sports events as well as cultural or folk festivals attract large crowds in cities. Whether it's the Cannstatter Wasen in Stuttgart, the Hamburg harbor birthday or fan miles in the context of European or World Soccer Championships in Berlin. Sometimes, moreover, several such events are held in close proximity to each other, further increasing the number of people.</p>
                <p>The large number of people can lead to dangerous situations that can severely compromise the safety of visitors. If such areas have to be evacuated due to an acute hazard situation (e.g. terrorist attacks, severe weather), the streams of visitors can collide in an emergency.</p>          
                <p>This problem forms the basis for one of the research focuses in the Video Evaluation Systems department. Our goal is to provide the emergency services involved (e.g. police, fire department, private security companies) and event organizers with helpful information to support the security of events by means of video evaluation and situation display, as well as to create the data basis for advance simulations that help to prevent dangerous constellations already during planning.</p>
            </div>
            <div className="image">
                <img src='./img-one.png' alt='Example Image'/>
            </div>
            <div className="paragraph">
                <p>Input is a video stream from which image data is extracted. Analyses are then performed on this image material, which generate key figures that describe, among other things, the distribution of people and the movement behavior of the crowd.</p>
            </div>
            <div className="title-part">
                <p id='second-title'>Objective</p>
            </div>
            <div className="paragraph">
                <p>Fraunhofer IOSB is primarily concerned with events in public spaces. The aim is to use conventional and widespread sensor technology and image and video analysis, as well as artificial intelligence, to work on assistance systems of the future for BOS and event organizers. The focus is on the extraction of crowd metrics, such as overall crowd size, crowd distribution, the identification of bottlenecks and congestion, and the detection of anomalies in crowd movement patterns. Special attention is given to the detection of anomalies in crowd behavior, as this is crucial for the safety of the participants.</p>
                <p>In this context, the individual plays a subordinate role. The focus of procedural research is on the collective, i.e. the crowd, and the effects that can be observed through their behavior. The topic of data protection is also a constant companion, to which the department of video evaluation systems is increasingly attaching importance. Privacy-by-design is the motto, so that one of the goals is also to reduce the amount of data and to use as little personal data as possible, but also as much as necessary.</p>
            </div>
            <div className="image">
                <img src='./img-two.png' alt='Example Image'/>
            </div>
            <div className="paragraph">
                <p>The extracted key figures can, for example, reflect the distribution of people, as can be seen here as an example. For the further analyses, only the position information, represented by the red dots, is used.</p>
            </div>
            <div className="title-part">
                <p id='second-title'>Project partners</p>
            </div>
            <div className='project-partners'>
                <ul>
                    <li>- Polizeipräsidium Stuttgart</li>
                    <li>- accurate GmbH</li>
                    <li>- Deutsche Hochschule der Polizei</li>
                    <li>- Polizei Hamburg</li>
                    <li>- Polizei Berlin</li>
                    <li>- Polizeipräsidium Köln</li>
                </ul>
            </div>
        </div>
    )
}

export default OurWork;