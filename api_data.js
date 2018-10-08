define({ "api": [  {    "type": "post",    "url": "/admin/users/:id/approve",    "title": "Approve User",    "name": "Approve_User",    "group": "Admin",    "permission": [      {        "name": "Admin"      }    ],    "version": "0.0.0",    "filename": "routes/admin/users.js",    "groupTitle": "Admin"  },  {    "type": "delete",    "url": "/admin/:type/:id",    "title": "Delete user or business",    "name": "Delete_User_Business",    "group": "Admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "type",            "description": "<p>'users' or 'businesses'</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Id to be deleted</p>"          }        ]      }    },    "permission": [      {        "name": "Admin"      }    ],    "version": "0.0.0",    "filename": "routes/admin/users.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/businesses/all",    "title": "Get Business List",    "name": "Get_Businesses",    "group": "Admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Page to view. Starts with 1.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "size",            "description": "<p>Amount of records per page.</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "emailConfirmed",            "description": "<p>Get only activated/not activated users.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "pagination",            "description": "<p>Pagination Info</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Array of users</p>"          }        ]      }    },    "permission": [      {        "name": "Admin"      }    ],    "version": "0.0.0",    "filename": "routes/admin/users.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/users/all",    "title": "Get User List",    "name": "Get_Users",    "group": "Admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Page to view. Starts with 1.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "size",            "description": "<p>Amount of records per page.</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "emailConfirmed",            "description": "<p>Get only activated/not activated users.</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "confirmed",            "description": "<p>Get users, confirmed by admin.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "pagination",            "description": "<p>Pagination Info -&gt; page, size, total</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "data",            "description": "<p>Array of users</p>"          }        ]      }    },    "permission": [      {        "name": "Admin"      }    ],    "version": "0.0.0",    "filename": "routes/admin/users.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/auth/login",    "title": "Login as admin",    "name": "Login",    "group": "Admin",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": ""          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": ""          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "accessToken",            "description": ""          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "expiresIn",            "description": "<p>Access token expiration time in seconds</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "String",            "optional": false,            "field": "error",            "description": "<p>Error Message</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/admin/auth.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/auth/logout",    "title": "Logout as admin",    "name": "Logout",    "group": "Admin",    "version": "0.0.0",    "filename": "routes/admin/auth.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/auth/refresh",    "title": "Refresh admin token",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": "<p>token</p>"          }        ]      }    },    "name": "Refresh_Token",    "group": "Admin",    "version": "0.0.0",    "filename": "routes/admin/auth.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/admin/users/:id/reject",    "title": "Reject User",    "name": "Reject_User",    "group": "Admin",    "permission": [      {        "name": "Admin"      }    ],    "version": "0.0.0",    "filename": "routes/admin/users.js",    "groupTitle": "Admin"  },  {    "type": "post",    "url": "/auth/login",    "title": "Login",    "name": "Login",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User's password</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User's email</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "accessToken",            "description": ""          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "expiresIn",            "description": "<p>Access token expiration time in seconds</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/auth/refresh",    "title": "Renew Refresh Token",    "name": "Refresh",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": "<p>Valid refresh token</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "accessToken",            "description": ""          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "refreshToken",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "expiresIn",            "description": "<p>Access token expiration time in seconds</p>"          }        ]      }    },    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/auth/reset-password",    "title": "Reset Password",    "name": "Reset_Password",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email</p>"          }        ]      }    },    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/auth.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/contact",    "title": "Contact Us",    "name": "Contact_Us",    "group": "Contact",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "sender",            "description": "<p>E-mail</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "text",            "description": "<p>User Info</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Successful message</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "routes/contact.js",    "groupTitle": "Contact"  },  {    "type": "post",    "url": "/needs",    "title": "Create a need",    "name": "Create_Need",    "group": "Needs",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Need name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": ""          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "userId",            "description": ""          },          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "documents",            "description": "<p>Document Name List</p>"          },          {            "group": "Parameter",            "type": "String[]",            "optional": false,            "field": "categories",            "description": "<p>Categories Name List</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "location",            "description": ""          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "price",            "description": ""          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": ""          }        ]      }    },    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/needs.js",    "groupTitle": "Needs"  },  {    "type": "delete",    "url": "/needs/:needId",    "title": "Delete a need",    "name": "Delete_Need",    "group": "Needs",    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/needs.js",    "groupTitle": "Needs"  },  {    "type": "post",    "url": "/needs/business/:businessId",    "title": "Get Needs, available for business",    "name": "Get_Needs_For_Business",    "group": "Needs",    "parameter": {      "fields": {        "Pagination": [          {            "group": "Pagination",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Pagination page</p>"          },          {            "group": "Pagination",            "type": "Number",            "optional": false,            "field": "size",            "description": "<p>Pagination size</p>"          }        ],        "Filter": [          {            "group": "Filter",            "type": "String[]",            "optional": true,            "field": "documents",            "description": ""          },          {            "group": "Filter",            "type": "String[]",            "optional": true,            "field": "categories",            "description": ""          },          {            "group": "Filter",            "type": "String[]",            "optional": true,            "field": "location",            "description": ""          }        ]      }    },    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/needs.js",    "groupTitle": "Needs"  },  {    "type": "post",    "url": "/needs/user/:userId",    "title": "Get User Needs",    "name": "Get_User_Needs",    "group": "Needs",    "parameter": {      "fields": {        "Pagination": [          {            "group": "Pagination",            "type": "Number",            "optional": false,            "field": "page",            "description": "<p>Pagination page</p>"          },          {            "group": "Pagination",            "type": "Number",            "optional": false,            "field": "size",            "description": "<p>Pagination size</p>"          }        ]      }    },    "permission": [      {        "name": "Authorized user"      }    ],    "version": "0.0.0",    "filename": "routes/needs.js",    "groupTitle": "Needs"  }] });
