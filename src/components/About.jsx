import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import Badge from './badge'
function About() {
  return (
    <section id='about-section'>
      <div className='about-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lacus nec curabitur sem vitae senectus odio enim pretium elementum.
          Lectus volutpat semper dictum interdum consequat. Ultrices pellentesque eu volutpat fusce. Quis accumsan arcu ultricies nulla lobortis egestas lorem lorem viverra.
          Ultrices pellentesque eu volutpat fusce. Quis accumsan arcu ultricies nulla lobortis egestas lorem lorem viverra.
        </p>
      </div>
      <div className='badges-container'>

        <Badge
          icon={<AiOutlineCalendar />}
          titolo={'25+'}
          testo={'Esperienza'}
        />
        <Badge
          icon={<AiOutlineCalendar />}
          titolo={'25+'}
          testo={'Esperienza'}
        />
        <Badge
          icon={<AiOutlineCalendar />}
          titolo={'25+'}
          testo={'Esperienza'}
        />

      </div>
    </section>
  )
}

export default About