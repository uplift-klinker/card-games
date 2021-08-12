import { Switch } from 'react-router-dom';
import { AppRoutes } from './routing/AppRoutes';
import { Header } from './layout/Header';

export function App() {
  return (
    <>
      <Header />
      <main className={'h-full w-full'}>
        <Switch>
          <AppRoutes />
        </Switch>
      </main>
      <footer />
    </>
  );
}
