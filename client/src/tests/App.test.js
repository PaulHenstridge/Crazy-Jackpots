import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = render(<App/>)
  })

  it('should initally have three users', () => {
    console.log(app)
    // const { container } = app;
    // expect(users.children.length).toBe(3)
    // console.log(container)
  })

})

