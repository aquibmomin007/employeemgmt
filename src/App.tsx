
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EmployeePage } from './components/pages/EmployeePage';
import { EmployeeOverviewPage } from './components/pages/EmployeeOverviewPage';

export const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path={`/`} exact component={EmployeePage} />
          <Route path={`/overview/:guid?`} exact component={EmployeeOverviewPage} />
        </Switch>
    </BrowserRouter>
  );
}
