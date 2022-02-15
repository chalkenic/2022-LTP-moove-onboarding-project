require('./bootstrap');

// React components
import TestComponent from './react/components/TestComponent';
import ReactRenderer from './react/ReactRenderer';
import React from 'react';
import NavBar from './react/components/NavBar';

const components = [
    {
        name: "TestComponent",
        component: <TestComponent />,
    },
    {
        name: "NavBar",
        component: <NavBar />
    }
]

new ReactRenderer(components).renderAll()