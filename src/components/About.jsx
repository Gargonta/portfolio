import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from '../hoc'



const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Вступление</p>
        <h2 className={styles.sectionHeadText}>Про себя.</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Я опытный фронтенд разработчик и верстальщик с опытом работы в
          JavaScript, а также с такими фреймворками, как React и
          Three.js . Я быстро учусь и тесно сотрудничаю с клиентами для
          создания эффективных, масштабируемых и удобных в использовании решений, которые решают
          проблемы реального мира. Давайте работать вместе, чтобы воплотить ваши идеи в жизнь!

      </motion.p>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
            Работаю удалённо. Оперативно реагирую на поставленные задачи и своевременно их выполняю. Всегда на связи.
        </motion.p>
        <motion.ul
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
            <li>- Отличное знание CSS 3, HTML5, Java-script.</li>
            <li>- Владение AdobePhotoshop или Figma.</li>
            <li>- Знание адаптивной верстки.</li>
            <li>- Опыт работы с препроцессорами.</li>
            <li>- Опыт работы с 1С-Битрикс.</li>
            <li>- Способность решать не стандартные задачи.</li>
            <li>- Желание использовать и накапливать знания и опыт в верстке.</li>
            <li>- Стремление расти и развиваться как профи в команде.</li>
        </motion.ul>
      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
            Личные качества:
        </motion.p>
      <motion.ul
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
            <li>- Навыки работы с большими объемами информации;</li>
            <li>- Аналитический склад ума;</li>
            <li>- Структурное мышление;</li>
            <li>- Внимательность к деталям;</li>
            <li>- Высокий уровень развития технических способностей.</li>

      </motion.ul>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")