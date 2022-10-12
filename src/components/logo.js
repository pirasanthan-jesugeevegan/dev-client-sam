/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import mainLogo from '../assets/images/image2vector-svg (1).png';
export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <img src={mainLogo} sx={styles.logo} alt="fireSpot" />
    </Link>
  );
}
const styles = {
  logo: {
    width: [260, null, null, null, null, 300],
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
