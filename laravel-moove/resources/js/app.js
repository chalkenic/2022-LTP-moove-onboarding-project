require('./bootstrap');

// React components
import TestComponent from './react/components/TestComponent';
import ReactRenderer from './react/ReactRenderer';
import React from 'react';
import NavBar from './react/components/navBar/NavBar';
import NavBarHeader from './react/components/headers/NavBarHeader';
import ButtonNavCustom from './react/components/buttons/ButtonNav';
import AppNavBar from './react/components/navBar/AppNavBarCustom';

const components = [
    {
        name: "TestComponent",
        component: <TestComponent />,
    },
    {
        name: "NavBar",
        component: <NavBar />
    },
    {
        name: 'NavBarHeader',
        component: <NavBarHeader />
    },
    {
        name: "ButtonNavCustom",
        component: <ButtonNavCustom />
    },
    {
        name: "AppNavBar",
        component: <AppNavBar />
    }


]

new ReactRenderer(components).renderAll()