import React from 'react';

import { Container, Paragraph, SkillsContainer, Title } from './styles';

const Skills: React.FC = () => (
  <Container id="skills">
    <Title>Skills</Title>
    <SkillsContainer>
      <Paragraph>
        I’m initially focused in developing web apps with the{' '}
        <strong>Node</strong>, <strong>React</strong> (including{' '}
        <strong>Next.js</strong>), <strong>Docker</strong> and{' '}
        <strong>AWS</strong>. However, I see no problem with using a different
        tool that I’ve no contact with so far, let’s say <strong>Azure</strong>{' '}
        for cloud, for example. I'm familiarized with
        <strong>SQL</strong> and <strong>NoSQL</strong> databases, querying,
        functions, procedures, ORMs for easy connection between applications and
        databases and <strong>RESTful</strong> APIs.
      </Paragraph>

      <Paragraph>
        I use primarly <strong>Linux</strong> distros, since it has so much
        helpful features for developing and most of servers use it too.
        Therefore, I’m familiar with shell scripts and pretty much of the
        <strong> Linux</strong> peculiarities. Also, I use{' '}
        <strong>Python</strong> for some specific scripts that allow me to
        automate specific tasks that I want to do from time to time and
        eventually <strong>MATLAB</strong> for some math scripts, processment
        and graphics. I’m also interested in non-conventional projects that
        creates its own marketshare just after existing.
      </Paragraph>
    </SkillsContainer>
  </Container>
);

export default Skills;
