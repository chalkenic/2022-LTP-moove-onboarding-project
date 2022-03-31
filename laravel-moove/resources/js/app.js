require("./bootstrap");

// React componentsimport ReactRenderer from './react/ReactRenderer';
import ReactRenderer from "./react/ReactRenderer";
import React from "react";
import NavBar from "./react/components/navBar/NavBar";
import NavBarHeader from "./react/components/headers/NavBarHeader";
import ContractHeader from "./react/components/headers/ContractHeader";
import ButtonNavCustom from "./react/components/buttons/ButtonNav";
import AppNavBar from "./react/components/navBar/AppNavBarCustom";
import TenancyForm from "./react/components/forms/TenantCheckForm";
import CalendlyBooking from "./react/components/forms/CalendlyBooking";
import Dashboard from "./react/pages/Dashboard";
import SigningComponent from './react/components/forms/SigningComponent';
import LandlordProperties from "./react/pages/LandlordProperties";
import TenantList from "../js/react/components/admin/TenantList";
import InviteLandlordComponent from '../js/react/components/admin/InviteLandlord';
import ContractCreate from "./react/pages/ContractCreate";
import ContractShow from "./react/pages/ContractShow";
import Property from "./react/components/landlord/property/Property";
import PropertyCard from "../js/react/cards/PropertyCard";
import PropertyRow from "./react/components/tables/PropertyRow";
import TenantApplication from "../js/react/components/admin/TenantApplication";
import TenancyApplicationProgress from "../js/react/components/tenant/TenancyApplicationProgress";
import AdminProperties from "./react/pages/AdminProperties";
import ViewCalender from './react/components/landlord/ViewCalender';
import ContractCard from "./react/cards/ContractCard";
import ContractCreation from "./react/components/landlord/contract/ContractCreation";
import LandlordContractView from "./react/components/landlord/contract/LandlordContractView";
import ContractTitle from "./react/components/landlord/contract/ContractTitle";
import TenantProperty from "./react/pages/TenantProperty";
import RedButtonCustom from "./react/components/buttons/RedButtonCustom";
import GreenButtonCustom from "./react/components/buttons/GreenButtonCustom";
import BlueButtonCustom from "./react/components/buttons/BlueButtonCustom";
import TenantContractView from "./react/components/tenant/TenantContractView";
import YellowButtonCustom from "./react/components/buttons/YellowButtonCustom";

const components = [
    {
        name: "NavBar",
        component: <NavBar />,
    },
    {
        name: "NavBarHeader",
        component: <NavBarHeader />,
    },
    {
        name: "ContractHeader",
        component: <ContractHeader />,
    },
    {
        name: "ButtonNavCustom",
        component: <ButtonNavCustom />,
    },

    {
        name: "GreenButtonCustom",
        component: <GreenButtonCustom />,
    },
    {
        name: "RedButtonCustom",
        component: <RedButtonCustom />,
    },

    {
        name: "BlueButtonCustom",
        component: <BlueButtonCustom />,
    },
    {
        name: "YellowButtonCustom",
        component: <YellowButtonCustom />,
    },
    {
        name: "AppNavBar",
        component: <AppNavBar />,
    },
    {
        name: "TenancyForm",
        component: <TenancyForm />,
    },
    {
        name: "CalendlyBooking", 
        component: <CalendlyBooking />,
    },
    {
        name: "Dashboard",
        component: <Dashboard />,
    },
    {
        name: "LandlordProperties",
        component: <LandlordProperties />,
    },
    { name: "AdminProperties", component: <AdminProperties /> },
    {
        name: "Property",
        component: <Property />,
    },
    {
        name: "PropertyCard",
        component: <PropertyCard />,
    },
    {
        name: "TenancyApplicationProgress",
        component: <TenancyApplicationProgress />,
    },
    { name: "PropertyRow", component: <PropertyRow /> },
    {
        name: "TenantList",
        component: <TenantList />,
    },
    {
        name: "TenantProperty",
        component: <TenantProperty />,
    },
        {
        name: "TenantContractView",
        component: <TenantContractView />,
    },
    {
        name: "TenantApplication",
        component: <TenantApplication />,
    },
    { name: "ContractCreation", component: <ContractCreation /> },
    { name: "LandlordContractView", component: <LandlordContractView /> },
    { name: "ContractCreate", component: <ContractCreate /> },
    { name: "ContractShow", component: <ContractShow /> },
    { name: "ContractCard", component: <ContractCard /> },
    { name: "ContractTitle", component: <ContractTitle /> },

    {
        name: "SigningComponent",
        component: <SigningComponent />,
    },
    {
        name: "ViewCalender",
        component: <ViewCalender />
    },
    {
        name:"InviteLandlordComponent",
        component:<InviteLandlordComponent/>,
    },

];

new ReactRenderer(components).renderAll();
