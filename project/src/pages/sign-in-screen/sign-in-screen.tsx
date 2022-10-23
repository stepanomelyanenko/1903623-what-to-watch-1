import Logo from '../../components/logo/logo';
import {useAppDispatch} from '../../hooks';
import {useRef} from 'react';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';

function SignInScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);


  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //
  //   if (emailRef.current !== null && passwordRef.current !== null) {
  //     onSubmit({
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value,
  //     });
  //   }
  // };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLightVersion={false}/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          //onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"

              onClick={(evt) => {
                evt.preventDefault();

                if (emailRef.current !== null && passwordRef.current !== null) {
                  onSubmit({
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                  });
                }

                // navigate(AppRoute.Root);

              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isLightVersion />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
