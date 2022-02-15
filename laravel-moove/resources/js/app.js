require('./bootstrap');

// React components
import TestComponent from './react/components/TestComponent';
import ReactRenderer from './react/ReactRenderer';
import React from 'react';

const components = [
    {
        name: "TestComponent",
        component: <TestComponent />,
    },
]

new ReactRenderer(components).renderAll()