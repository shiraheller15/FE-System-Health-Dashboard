import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import Login  from './Login';

describe('Login component', () => {

    test('the page loading', () => {
        const component = render(<BrowserRouter><Login /></BrowserRouter>);
        const inputNode = component.getByText('Login');
        expect(inputNode).toBeInTheDocument();
    });
})

describe('Login component', () => {

    test('handle onclick', () => {
        const component = render(<BrowserRouter><Login /></BrowserRouter>);
        const buttonElement = component.getByText('Login');
        fireEvent.click(buttonElement);
        expect(global.window.location.pathname).toEqual('/');

    });
})