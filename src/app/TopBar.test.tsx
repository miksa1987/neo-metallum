import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { TopBar } from './TopBar';

describe('TopBar', () => {
  afterEach(cleanup);

  const mockSetSidebarVisible = jest.fn();

  test('Snapshot passes', () => {
    const component = render(<TopBar setSidebarVisible={mockSetSidebarVisible} />);
    expect(component).toMatchSnapshot();
  });

  test('Button clicked calls right function', () => {
    const component = render(<TopBar setSidebarVisible={mockSetSidebarVisible} />);

    const button: any = component.container.querySelector('.sidebar-menu-button');
    fireEvent.click(button);

    expect(mockSetSidebarVisible.mock.calls.length).toBe(1);
  });
});