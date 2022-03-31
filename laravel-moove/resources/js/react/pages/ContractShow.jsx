/* eslint-disable sort-imports */
import ContractView from "../components/landlord/contract/ContractView";
import ContractHeader from "../components/headers/ContractHeader";
import React, {Fragment} from "react";

import PropTypes from "prop-types";

const ContractShow = ({property, details, landlord, contract}) => <Fragment>
    <ContractHeader type="show" name={property.name} />
    <ContractView sections = {details} landlord = {landlord} property={property} contract = {contract} type="show" />
</Fragment>;
ContractShow.propTypes = {
    "property": PropTypes.shape({
        "created_at": PropTypes.string.isRequired,
        "id": PropTypes.number.isRequired,
        "user_id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "location": PropTypes.string.isRequired,
        "status": PropTypes.string.isRequired,
        "updated_at": PropTypes.string,
        "verified": PropTypes.number.isRequired
    }),

    "contract": PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "property_id": PropTypes.number.isRequired,
        "landlord_signed": PropTypes.number.isRequired,
        "tenant_signed": PropTypes.number.isRequired

    }),

    "details": PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "contract_id": PropTypes.number.isRequired,
        "header": PropTypes.string,
        "title": PropTypes.string,
        "value": PropTypes.string.isRequired,
        "accepted": PropTypes.number.isRequired

    })),

    "landlord": PropTypes.shape({
        "id": PropTypes.number.isRequired,
        "name": PropTypes.string.isRequired,
        "role": PropTypes.string.isRequired

    })
};
export default ContractShow;
