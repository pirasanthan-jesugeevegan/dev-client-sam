/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import sherrards from 'assets/images/logos/sherrards.png';
import cms from 'assets/images/logos/cms.png';
import druces from 'assets/images/logos/druces.png';

const data = [
  {
    id: 1,
    logo: sherrards,
    author: 'Sherrards Solicitors',
    quote: `“Sam is a very enthusiastic person and he is passionate about his work. I would no doubt to say that he is the best recruitment agent! He understands his client's need and makes every effort to bring the best for his client. He does in fact makes people's dream come true. I would give the best recommendation to anyone uses his services! ”`,
  },
  {
    id: 2,
    logo: cms,
    author: 'CMS Cameron McKenna Nabarro Olswang LLP',
    quote: `“Sam was very personable and worked efficiently to help me secure a new role in the legal profession. The employers he put me in touch with were all high quality and matched my specifications well. More importantly, Sam was honest and up-front about my prospects, and how the process would work. He didn't try to sell me positions that I hadn't expressed an interest in and at no stage did I feel pressured. This was something that I really appreciated, having had a rather different experience with certain other recruiters that I have spoken to.”`,
  },
  {
    id: 3,
    logo: druces,
    author: 'Druces LLP',
    quote: `“Sam is the most responsive and active agent I've had the pleasure of working with to date in my career. As a result of his efforts I have been offered a role that I'm extremely happy with. I strongly recommend Sam as an agent.”`,
  }
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                {/* <Text as="span" sx={styles.author}>
                  {item.author}
                </Text> */}
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
