import React, {Fragment, useState} from "react";
import ContractHeader from "../components/headers/ContractHeader";

const ContractCreate = (props) => {

    const property = props.property;

    console.log('property: ',property);
    return (
    <Fragment>
        <ContractHeader 
        role="create" 
        name = {property.name} />
        </Fragment>)}

export default ContractCreate;
