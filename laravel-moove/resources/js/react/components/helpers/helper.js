// Reusable functions within app that can be used for functionality.

export function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}

            //Status IDs
            // 0 - Awaiting tenancy documents
            // 1 - Awaiting approval
            // 2 - Application Approved
            // 3 - Application Denied

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
    }
}
