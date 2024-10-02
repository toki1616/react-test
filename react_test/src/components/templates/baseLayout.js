import Header from '../organisms/header';
import Menu from '../organisms/menu';
import Footer from '../organisms/footer';

import '../../styles/templates/baseLayout.styl';

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div className="base-layout">
      <Header />
      <Menu />
      {/* <ContentArea>{children}</ContentArea> */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;