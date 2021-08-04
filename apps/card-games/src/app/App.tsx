import { Switch } from 'react-router-dom';
import { AppRoutes } from './routing/AppRoutes';

export function App() {
  return (
    <div className={'grid grid-rows-3 w-full'}>
      <header />
      <main>
        <Switch>
          <AppRoutes />
        </Switch>
      </main>
      <footer />
    </div>
  );
}
