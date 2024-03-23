import React, { useRef } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <>
      <Overlay />
      <Content />
    </>
  )
}
function Overlay(){
  return(
    <nav>
      <ul>
        <div id='menu-button'>
          <li><a href="#"><span class="material-symbols-outlined" >select_all</span></a></li>
          <div className="dropdown-content">
            <a href="https://will.limited">//home</a>
            <a href="https://projects.will.limited">//projects</a>
            <a href="https://about.will.limited">//personal</a>
          </div>
        </div>
        <li><a href="mailto:willdotlimited@gmail.com">//contact</a></li>
      </ul>
    </nav>
  )
}

function Content() {
  return(
    <>
    <div className="content">
      <div className="landing">
        <img src="landing.png" alt="me sitting at a wood table, in front of my computer with a notepad" />
      </div>
      <Project 
        name="ICESat-2 LiDAR"
        desc="My master's research project is focused on using LiDAR data from the ICESat-2 satellite to monitor forest cover change. Specifically, I'm looking at canopy height information over the Loblolly Pine region in the southeastern US. This has been an extremely exciting project so far, a continuous assessment of my programming skills. So far I've completed the data collection and cleaning steps with Python. Soon, I'll transition into the quantitative analysis portion of the project. This should be an excellent opportunity to broaden my data viz abilities, likely with Python packages like leaflet, folium, geopandas, etc."
      />
      <Project 
        name="Hawaii Disaster Relief"
        desc="For our final project, our intern group at Esri built a hypothetical disaster relief application for citizens and first responders of the Hawaiian mainland. This tied together multiple applications within the ArcGIS software suite. We first deployed an Enterprise environment to allow for full control of the public-facing and private infrastructure, and setup an Enterprise Site to house a live flood risk map across the state. On the front end citizens would submit a Survey123 form with details to customize the aid they were in need of. On the backend, Hawaiian responders would be tasked through ArcGIS Workforce to respond to citizens. This interaction between citizens and dispatchers was updated in realtime, and reflected in the Enterprise Site. Further details of our final project can be found in this "
        link="https://storymaps.arcgis.com/stories/078e0fd40bda4bfb9865863aaefec906"
        linkText="ArcGIS Story Map."

      />
      <Project 
        name="Spring Dead Spot Mapping"
        desc="
          During my time in the VT Turfgrass Pathology Lab I worked on a project for automated disease detection on golf course fairways. This project was an expansion of the lab's prior research, assessing the accuracy of drone imagery analysis in identifying spring dead spot in small regions. From there, Independence Golf Club was very generous to volunteer their Championship 18 course as a test site for applying these methods across an entire course. For this project I assisted with the drone flights, generated orthomosaics in Pix4D, and conducted geospatial analysis in ArcGIS Pro. Overall this project was such a privilege to work on, combining in situ data collection and in-lab data analysis. Drones, golf courses, and sunshine, what more could I have asked for? A research poster for some of this work is available"
        link="https://github.com/wponc/SDS-Disease-Map-Research/blob/main/Poncy_Final_ASA_Poster.pdf"
        linkText="here."
        src="./sds.png"
        alt="a golf course at midday, and a DJI Mavic flight controller"
        id="sds"
      />
      <Project 
        name="Mini sites"
        desc="Practice, practice, practice. In an effort to get more comfortable with web design, I've presented a number of academic and work projects using static sites rather than PowerPoint presentations. While focused more on form than function, this has been a great way to explore the possibilities of web graphics in conveying diverse ideas. To me, a website's landing page can grab the viewer's attention in a way that presentation slides might not (see Lusion.co). The landing pages for some of these mini sites are shown below."
        src="/pages.png"
        alt="Landing pages for presentations on ArcGIS software applications"
        id="pages"
      />
      <Project 
        name="Assorted Renders"
        desc="I'm also becoming more proficient with Blender, following tutorials and memorizing the shortcuts one by one. I'm particularly interested in how light plays off of surfaces to generate refraction, chromatic aberration, and distortion. Moving forward, I'd like to get more adept at 'worldbuilding', and create expansive scenes that are convincing but maintain a sense of surreality."
        src="./renders.png"
        alt="translucent skull with chromatic aberration"
        id="dmw"
      /> 
    </div>
    </>
  )
}

function Project(props) {
  return(
    <div className="Project">
      <div className="text">
        <h1>{props.name}</h1>
        <h2>{props.desc} <span><a href={props.link} className="externalLink" target="_blank">{props.linkText}</a></span></h2>
      </div>
      <div className="image">
        <img loading="lazy" src={props.src} alt={props.alt} className="imageGallery" id={props.id}/>
      </div>
    </div>
  )
}