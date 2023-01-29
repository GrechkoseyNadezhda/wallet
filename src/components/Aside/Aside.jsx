import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';
import css from './Aside.module.css';
export function Aside() {
  return (
    <div className={css.aside}>
      <div>
        <Navigation />
        <p>Total Balance</p>
      </div>
      <Currency />
    </div>
  );
}