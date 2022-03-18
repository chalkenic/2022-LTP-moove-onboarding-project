require('./bootstrap');

// React components
import ReactRenderer from './react/ReactRenderer';
import React from 'react';
import NavBar from './react/components/navBar/NavBar';
import NavBarHeader from './react/components/headers/NavBarHeader';
import ButtonNavCustom from './react/components/buttons/ButtonNav';
import AppNavBar from './react/components/navBar/AppNavBarCustom';
import TenancyForm from './react/components/forms/TenantCheckForm';
import CalendlyBooking from './react/components/forms/CalendlyComponent';
import Dashboard from './react/pages/Dashboard';
import LandlordProperties from './react/pages/LandlordProperties';
import Property from './react/components/landlord/Property';
import PropertyCard from '../js/react/cards/PropertyCard';
import TenantList from '../js/react/components/admin/TenantList';
import TenantApplication from '../js/react/components/admin/TenantApplication';

const components = [
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
    },
    {
        name: "TenancyForm",
        component: <TenancyForm />
    },
    {
        name:"CalendlyComponent",
        component:<CalendlyBooking/>
    },
    {
        name: "Dashboard",
        component: <Dashboard />
    },
    {
        name: "LandlordProperties",
        component: <LandlordProperties />
    },

    {
        name: "Property",
        component: <Property />
    },
    {
        name: "PropertyCard",
        component: <PropertyCard />
    },
    {
        name: "TenantList",
        component: <TenantList />
    },
    {
        name: "TenantApplication",
        component: <TenantApplication />
    },


]

new ReactRenderer(components).renderAll()