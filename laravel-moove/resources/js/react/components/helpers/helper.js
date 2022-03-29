// Reusable functions within app that can be used for functionality.

export function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

/*
 * Status IDs
 * 0 - Awaiting tenancy documents
 * 1 - Awaiting approval
 * 2 - Application Approved
 * 3 - Application Denied
 */

export function convertStatusId(id) {
    switch (id) {
    case 0:
        return "Awaiting tenancy documents";
    case 1:
        return "Awaiting approval";
    case 2:
        return "Application Approved";
    case 3:
        return "Application Denied";
    default:
        return "Error"
    }
}
    
export function descFromStatusId(statusName) {
    switch (statusName) {
    case 'Awaiting tenancy documents':
        return "Moove is waiting for this tenant to upload their tenant documents. Once they have done this, their application will be under review in the 'awaiting approval' status.";
    case 'Awaiting approval':
        return "This applicant has uploaded the required documents, sit back and relax while Moove quickly process the application";
    case 'Application Approved':
        return "Congratulations, this applicant has had their application submitted, reviewed and accepted and is ready for tenancy to begin.";
    case 'Application Denied':
        return "Unfortunately, this tenant requires changes to their submission as their application for tenancy has been declined.";
    default:
        return "Error"
    }
};
