/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ member }) => {
  return (
    <Box>
      <Flex as="figure" sx={styles.avatar}>
        <Image
          src={member?.avatar}
          alt={member?.name}
          sx={{ borderRadius: '50%' }}
        />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        <Text as="p">
          <span sx={{ fontWeight: 'bold' }}>Phone: </span>
          {member?.phone}
        </Text>
        <Text as="p">
          {' '}
          <span sx={{ fontWeight: 'bold' }}>Email: </span> {member?.email}
        </Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'linkedin' && (
                <FaLinkedin size="18px" color="#55ACEE" />
              )}
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#161614" />
              )}
              {social?.name === 'facebook' && (
                <FaFacebook size="18px" color="#B2215A" />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    textAlignLast: 'center',
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',

    justifyContent: ['center', null, null, 'center'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
