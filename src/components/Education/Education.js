import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>August(2019)-July(2023)</span>
                          </h2>
                          <p>
                            I am currently working as <b>Senior Full Stack Engineer</b> at JOHO TECHNOLOGY
                            <a target='_blank' href='https://www.joho.com/'>
                              <b>JOHO TECHNOLOGY</b>
                            </a>
                            <i>
                              (Worked on the development of a browser-based application using Ruby on Rails resulting in a 20% increase in user engagement. Improved
                              application performance by optimizing REST API calls and reducing load times resulting in a 15% increase in page speed. Collaborated with crossfunctional teams to ensure timely delivery of project milestones)
                            </i>
                            and boosting my professional skills.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Undergraduation at Information Science and Technology <span>2010-2014</span>
                          </h2>
                          <p>
                            I completed my undergraduation in CSE (Computer Science and Engineering)
                            from <a href='http://sliet.ac.in/'>Information Science and Technology</a> with overall 82.71%.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Internship</h2>
                          <p>
                            Completed one month Internship in React Js with Internity Foundation
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
