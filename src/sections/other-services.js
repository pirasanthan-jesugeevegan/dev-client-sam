/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 4,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'London - HQ',
    description: `1 Poultry, London EC2R 8EJ, United Kingdom`,
  },
  {
    id: 5,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'New York',
    description: `450 Lexington Ave, New York, NY 10017, United States`,
  },
  {
    id: 6,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Dubai',
    description: `One Central 8th and 9th Floor - Dubai - United Arab Emirates`,
  },
  {
    id: 7,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Hong Kong',
    description: `G/F, 5-13, New St, Sai Ying Pun, Hong Kong`,
  },
  {
    id: 8,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Sydney',
    description: `5 Martin Place,Sydney, NSW 2000`,
  },
  {
    id: 9,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Paris',
    description: `33 Rue La Fayette, 75009 Paris, France`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="other-services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact Us"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    justifyItems: 'center',
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
