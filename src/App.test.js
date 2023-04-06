import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import PortfolioList from './Pages/Portfolio/PortfolioList'
import PortfolioItem from './Pages/Portfolio/PortfolioItem'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Pages/Nav'
import NavOptions from './Pages/Nav'
import { MemoryRouter } from 'react-router-dom'; //For BrowserRouter elements

import TestPage from './Pages/testpage'



//This is a way of testing elements on which the page contains a BrowserRouter element
test('Should render Contact', () => {
  render(<Contact />, {wrapper: MemoryRouter});
});

//This can also be done by wrapping the function in its own Router, like below
test('check contact exists', () => {
  render(<Router><Contact /></Router>);
  expect(true).toBeTruthy();
});

test("Contact render", () => {
  const actual = () => {
    render(<Router><Contact /></Router>);
  };
  expect(actual).not.toThrow();
});

test('Check for button on Contact Page', () => {
  render(<Router><Contact /></Router>);
  const buttonElement = screen.getByRole("button") 
  expect(buttonElement).toBeInTheDocument();
})


test('Check heading is present', ()=> {
  render(<Contact />, {wrapper: MemoryRouter});
  const headingElement = screen.getByRole('heading', { name: "Phone" })
  expect(headingElement).toBeInTheDocument();
})
test('Check heading is present', ()=> {
  render(<Contact />, {wrapper: MemoryRouter});
  const headingElements = screen.getAllByRole('heading')
  expect(headingElements.length).toBe(3);
})





test('Test Page', ()=> {
  render(<TestPage />);
  const linkElement = screen.getByRole("heading")
  expect(linkElement).toBeInTheDocument();
})