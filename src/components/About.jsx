import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p>
      {title}
    </p>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubtext} >Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled Full-stack Software Engineer with experience in JavaScript, Python, SQL. I have a passion for creating beautiful, intuitive, and functional user interfaces. I'm a quick learner and a team player who is always looking to improve my skills and learn new technologies. 
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10' >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About
