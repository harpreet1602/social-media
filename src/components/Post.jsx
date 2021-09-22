import Createaccount from "./Createaccount";
import "./Post.css";
let Post = () => {
    return (
        <div className="fullcontainer">
        <div className="post">
            <div className="header">
                <div className="allpost">All Posts(32)</div>
                <div className="article">Article</div>
                <div>Event</div>
                <div>Education</div>
                <div>Job</div>
            </div>
            <div className="writepostbtn">
            <button type="button" className="writepost">Write a Post</button>
            </div>
            <div className="creategroupbtn"> 
            <button type="button" className="creategroup">
            <span class="material-icons">
            group_add
            </span>
                <div>Join Group</div>
                </button>
            </div>
            <div className="line"></div>
            <div className="line1"></div>
            
        </div>
            <div className="cards">
                <div className="art">
                <div className="artphoto"></div>
                <div className="arthead">
                <span class="material-icons">
                edit
                </span>
                <div className="artart">Article</div>
                </div>
                <div className="cont">
                <div className="artwrite">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                </div>
                <span class="material-icons">   
                more_horiz
                </span>
                </div>
                <div className="artcontent">
                    I've worked in UX for the better part of a decade. From now on, I plan to rei...
                </div>
                <div className="artcontainer">
                    <div className="artimage"></div>
                    <div className="artname">Sarthak Kamra</div>
                    <div className="artviews"><span class="material-icons">
                    visibility
                    </span>
                    <div className="artwri">1.4k views</div>
                  
                    </div>
                     <div className="artshare">
                     <span class="material-icons">
                    share
                    </span>
                     </div>
                </div>
                </div>


                <div className="art">
                <div className="artphoto1"></div>
                <div className="arthead">
                <span class="material-icons">
                school
                </span>
                <div className="artart">Education</div>
                </div>
                <div className="cont">
                <div className="artwrite">
                    Tax Benefits for Investment under National Pension Scheme launched by Government
                </div>
                <span class="material-icons">   
                more_horiz
                </span>
                </div>
                <div className="artcontent">
                    I've worked in UX for the better part of a decade. From now on, I plan to rei...
                </div>
                <div className="artcontainer">
                    <div className="artimage1"></div>
                    <div className="artname">Sarah West</div>
                    <div className="artviews"><span class="material-icons">
                    visibility
                    </span>
                    <div className="artwri">1.4k views</div>
                  
                    </div>
                     <div className="artshare">
                     <span class="material-icons">
                    share
                    </span>
                     </div>
                </div>

                </div>



                <div className="art1">
                <div className="artphoto2"></div>
                <div className="arthead">
                <span class="material-icons">
                groups
                </span>
                <div className="artart">Meetup</div>
                </div>
                <div className="cont">
                <div className="artwrite1">
                Finance & Investment Elite Social Mixer @Lujiazui
                </div>
                <span class="material-icons">   
                more_horiz
                </span>
                </div>
               <div className="daloc">
                   <div className="date">
                   <span class="material-icons">
                    today
                    </span>
                      <div> Sun, 22 Aug, 2021</div></div>
                   <div className="location">
                   <span class="material-icons">
                    place
                    </span>
                    <div>Ahmedabad, India</div>
                   </div>
               </div>
               <div className="web">
                <button className="webbtn">Visit Website</button>   
                </div>  
                <div className="artcontainer">
                    <div className="artimage2"></div>
                    <div className="artname">Ronal Jones</div>
                    <div className="artviews"><span class="material-icons">
                    visibility
                    </span>
                    <div className="artwri">1.4k views</div>
                  
                    </div>
                     <div className="artshare">
                     <span class="material-icons">
                    share
                    </span>
                     </div>
                </div>
                </div>




                
                <div className="art2">
                <div className="arthead">
                <span class="material-icons">
                work
                </span>
                <div className="artart">Job</div>
                </div>
                <div className="cont">
                <div className="artwrite1">
                Software Developer
                </div>
                <span class="material-icons">   
                more_horiz
                </span>
                </div>
               <div className="daloc1">
                   <div className="date1">
                   <span class="material-icons">
                    work_outline
                    </span>
                      <div> Innovaccer Analytics Private Ltd.</div></div>
                   <div className="location">
                   <span class="material-icons">
                    place
                    </span>
                    <div>Noida, India</div>
                   </div>
               </div>
               <div className="web">
                <button className="webbtn1">Apply on Timesjobs</button>   
                </div>  
                <div className="artcontainer">
                    <div className="artimage3"></div>
                    <div className="artname">Joseph Gray</div>
                    <div className="artviews"><span class="material-icons">
                    visibility
                    </span>
                    <div className="artwri">1.4k views</div>
                  
                    </div>
                     <div className="artshare">
                     <span class="material-icons">
                    share
                    </span>
                     </div>
                </div>
                </div>

                
            </div>
            <div className="wrap">
            <div className="side">
            <div className="sidecontent">
            <div className="loc">
                   <span class="material-icons">
                    place
                    </span>
                    <div>Noida, India</div>
            </div>

            <span class="material-icons">
            edit
            </span>
            </div>
            </div>
            <div className="line3"></div>
            <div className="loccontent">
            <span class="material-icons">
            error
            </span>
                <div className="contentloc">
                Your location will help us serve better and extend a personalised experience.
                </div>
            </div>
            </div>
        </div>
    );
}
export default Post;