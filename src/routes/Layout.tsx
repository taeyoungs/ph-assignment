import { injectGlobal } from '@emotion/css';
import Header from 'components/Header';

import colors from 'colors';

injectGlobal`
  body {
    background-color: ${colors.gray100};
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <div>Outlet</div>
      </main>
    </div>
  );
}

export default Layout;
