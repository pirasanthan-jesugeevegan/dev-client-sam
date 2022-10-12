/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Text, Heading } from 'theme-ui';

const Service = ({ item }) => {
  return (
    <Box sx={styles.serviceItem}>
      <Box sx={styles.content}>
        <Image src={item?.icon} variant="avatar" />
        <Heading as="h3">{item?.title}</Heading>
        <Text as="p">{item?.description}</Text>
      </Box>
    </Box>
  );
};

export default Service;

const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'center'],
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%'],
    },
  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 3],
      lineHeight: [1.68],
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
