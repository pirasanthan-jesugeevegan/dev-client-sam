/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'CV & Interview Coaching',
    description: `Getting a new role is all about effectively selling yourself.. Their first impression of you will be what CV you have decided to put out there. With 10+ years experience my team will work with you to get the best version of you sent out to potential employers. I also conduct a free 1-1 session up to 30 minutes`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Executive Search',
    description: `I am trusted by my clients to deliver on staffing needs at all senioirty levels. Due to my relationships with my clients I have market information ahead of my competition and am able to brief my candidates on upcoming roles first, therefore giving them the best chance of gaining their perfect role.`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Team Moves',
    description: `Working strategically with clients on larger scale projects that require 5+ members of staff to be recruited at once. Potentially in a new area to the business or a location move E.G London office for a business HQ in Birmingham.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Services"
          description="Our services include but are not limited to the below. Please get in touch to discuss working with one another. "
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
