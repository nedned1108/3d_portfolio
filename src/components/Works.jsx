import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, image, tags, source_code_link, liveLink }) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  >
    <Tilt
      options={{ max: 25, scale: 1, speed: 450 }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]' >

      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext} >My work</p>
        <h2 className={styles.sectionHeadText} >Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with a link to the live version and the source code. It reflects my passion for creating applications that are both functional and beautiful my ability to solve complex problems and work with different technologies.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7' >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
