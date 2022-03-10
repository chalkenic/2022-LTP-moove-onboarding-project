require('./bootstrap');

// React components
import TestComponent from './react/components/TestComponent';
import ReactRenderer from './react/ReactRenderer';
import React from 'react';
import NavBar from './react/components/NavBar';
import TenantList from './react/components/TenantList';


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
        name: "TenantList",
        component: <TenantList />,
    },
]

new ReactRenderer(components).renderAll()