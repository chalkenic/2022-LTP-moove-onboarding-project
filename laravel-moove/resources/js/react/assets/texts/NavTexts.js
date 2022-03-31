/*
 * File handles all texts shown within navigation bar to keep jsx component clean
 * and promote separation of concerns.
 */

export const navTextAdmin = [
    {
        "id": 2,
        "key": "page_properties",
        "name": "properties List",
        "selected": false,
        "link": "/admin-all-properties",
        "type": "link"
    },
    {
        "id": 5,
        "key": "page_users",
        "name": "Convert Users",
        "selected": false,
        "link": "/convert-user",
        "type": "link"
    },
    {
        "id": 6,
        "key": "page_tenants",
        "name": "Tenant List",
        "selected": false,
        "link": "/admin-tenant-list",
        "type": "link"
    }
];

export const navTextTenant = [
    {
        "id": 1,
        "key": "book_appointment",
        "name": "Book Appointment",
        "selected": false,
        "link": "/book-appointment",
        "type": "link"
    },
    {
        "id": 2,
        "key": "view_tenancy_appl",
        "name": "View Tenancy Application",
        "selected": false,
        "link": "/tenancy-appl-progress"
    },
    {
        "id": 3,
        "key": "video_upload",
        "name": "Video Upload",
        "selected": false,
        "link": "/tenant-upload-video"
    },
    {
        "id": 4,
        "key": "apply_tenancy",
        "name": "Apply for Tenancy",
        "selected": false,
        "link": "/apply-tenancy",
        "type": "link"
    },

    {
        "id": 5,
        "key": "my_property",
        "name": "My property",
        "selected": false,
        "link": "/tenant-property",
        "type": "link"
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
    },
    {
        "id": 4,
        "key": "page_messages",
        "name": "Messages(*)",
        "selected": false,
        "link": "/properties",
        "type": "link"
    }
];

export const navTextHome = [

    "/admin-home",
    "/landlord-home",
    "/tenant-home"
];
