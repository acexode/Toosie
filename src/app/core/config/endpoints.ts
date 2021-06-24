export const serverBaseUrl = 'https://pharmacy-ecommerce.herokuapp.com/api';

export const baseEndpoints = {
    auth: serverBaseUrl + '/users',
    inventory: serverBaseUrl + '/inventory',

  };
export const authEndpoints = {
    login: baseEndpoints.auth + '/login',
    signup: baseEndpoints.auth + '/register',
    updateAddress: baseEndpoints.auth + '/add/address',
    updateProfile: baseEndpoints.auth + '/update/profile',
    updateProfileImage: baseEndpoints.auth + '/update/profile/image',
};

export const roleEndpoints = {
    getRoles: baseEndpoints.auth + '/role/all',
    addRole: baseEndpoints.auth + '/add/role',
    asssignRole: baseEndpoints.auth + '/role/asign',
    removeUserRole: baseEndpoints.auth + '/users/role/remove',
    updateProfileImage: baseEndpoints.auth + '/update/profile/image',
};
export const prescriptionEndpoints = {
    newPrecription: baseEndpoints.auth + '/prescription/new',
    usersPrescription: baseEndpoints.auth + '/prescription/mine/all'
};
export const wishListEndpoints = {
    addWish: baseEndpoints.auth + '/wishlist/new',
    removeWish: baseEndpoints.auth + '/wishlist/remove',
    allWish: baseEndpoints.auth + '/wishlist/mine/all'
};
export const inventoryEndpoints = {
    allCategories: baseEndpoints.inventory + '/category/all',
    allTags: baseEndpoints.inventory + '/tags/all',
    brands: baseEndpoints.inventory + '/brands/all',
    inventoryByCategory: baseEndpoints.inventory + '/product/all/',
    searchInventory: baseEndpoints.inventory + '/product/search',
    saveOrder: baseEndpoints.inventory + '/order/save'
};
