/*
 * File handles all texts shown within navigation bar to keep jsx component clean
 * and promote separation of concerns.
 */

export const navTextAdmin = [
    {
        "id": 1,
        "key": "page_properties",
        "name": "properties List",
        "selected": false,
        "link": "/admin-all-properties",
        "type": "link"
    },
    {
        "id": 2,
        "key": "page_users",
        "name": "Convert Users",
        "selected": false,
        "link": "/convert-user",
        "type": "link"
    },
    {
        "id": 3,
        "key": "page_tenants",
        "name": "Tenant List",
        "selected": false,
        "link": "/admin-tenant-list",
        "type": "link"
    },
    {
        "id": 4,
        "key": "invite_landlord",
        "name": "Invite Landlord",
        "selected": false,
        "link": "/admin-invite-landlord",
        "type": "link"
    }

];

export const navTextTenant = [
    {
        "id": 1,
        "key": "my_property",
        "name": "My property",
        "selected": false,
        "link": "/tenant-property",
        "type": "link"
    },
    {
        "id": 2,
        "key": "book_appointment",
        "name": "Book Appointment",
        "selected": false,
        "link": "/book-appointment",
        "type": "link"
    },
    {
        "id": 3,
        "key": "view_tenancy_appl",
        "name": "View Tenancy Application",
        "selected": false,
        "link": "/tenancy-appl-progress"
    },
    {
        "id": 4,
        "key": "video_upload",
        "name": "ID Upload",
        "selected": false,
        "link": "/tenant-upload-video"
    }
];

export const navTextLandlord = [
    {
        "id": 1,
        "key": "page_home",
        "name": "Dashboard",
        "selected": false,
        "link": "/landlord-home",
        "type": "link"
    },
    {
        "id": 2,
        "key": "page_properties",
        "name": "Properties",
        "selected": false,
        "link": "/properties",
        "type": "link"
    },
    {
        "id": 3,
        "key": "page_applications",
        "name": "My Calendar",
        "selected": false,
        "link": "/landlord-calender",
        "type": "link"
    }
];

export const navTextHome = [

    "/admin-home",
    "/landlord-home",
    "/tenant-home"
];
