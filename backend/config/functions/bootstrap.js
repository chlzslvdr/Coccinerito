'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
    const authenticated = await strapi.query('role', 'users-permissions').findOne({ type: 'authenticated' });
    const unauthenticated = await strapi.query('role', 'users-permissions').findOne({ type: 'public' });

    const setPermissions = (permission) => {

        const isFindAction = permission.action === "findone" || permission.action === "find"
        const isApplicationType = permission.type === 'application'

        if (isApplicationType && isFindAction){ 
            let newPermission = permission;
            newPermission.enabled = true; 

            strapi.query('permission', 'users-permissions').update( { id: newPermission.id }, newPermission ); 
        }
    }

    authenticated.permissions.forEach(setPermissions);
    unauthenticated.permissions.forEach(setPermissions);

    return;
}; 

