/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/big-ben-1495347-1266202.png';
import icon5 from 'assets/images/icons/new-32-101657.png';
import icon6 from 'assets/images/icons/burj-al-arab-1423075-1203733.png';
import icon7 from 'assets/images/icons/gate-6407183-5359668.png';
import icon8 from 'assets/images/icons/opera-house-1407513-1188571.png';
import icon9 from 'assets/images/icons/eiffel-tower-3724353-3110853.png';

const data = [
  {
    id: 4,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'London - HQ',
    description: `1 Poultry, London EC2R 8EJ, United Kingdom`,
  }
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="other-services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact Us"
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
    backgroundColor: rgba('#FFF5ED', 0.5),
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
    justifyContent: 'center',
    // gridTemplateColumns: [
    //   'repeat(1, 285px)',
    //   'repeat(1, 325px)',
    //   'repeat(1, 285px)',
    //   'repeat(1, 1fr)',
    // ],
  },
};
