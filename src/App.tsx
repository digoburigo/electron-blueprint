import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import { Button } from '@blueprintjs/core';
import AppToaster  from './toaster';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { Column, Table } from '@blueprintjs/table';

const Hello = () => {
  return (
    <div>
      <FormGroup
        helperText={'Helper text with details...'}
        label={'Label'}
        labelFor="text-input"
        labelInfo={'(required)'}
      >
        <InputGroup id="text-input" placeholder="Placeholder text" />
      </FormGroup>

      <Button
        intent="success"
        text="button content"
        onClick={() => AppToaster.show({ message: 'Toasted.' })}
      />

      <Table numRows={5}>
        <Column />
        <Column />
        <Column />
      </Table>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
