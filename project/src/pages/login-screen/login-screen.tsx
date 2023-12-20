import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';
import { FormEvent, useRef } from 'react';
import { login } from '../../store/thunk-actions';
import { LoginData } from '../../types/login-data';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

export default function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const isRenderNav = false;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formRef.current !== null) {
      const data = Object.fromEntries(new FormData(formRef.current)) as LoginData;
      dispatch(login(data));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" ref={formRef} onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
