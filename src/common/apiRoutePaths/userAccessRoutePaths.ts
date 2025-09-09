export const USER_ACCESS_ROUTE_PATHS = {
    save: '/api/user-access/save',
    deleteByOpenUserId: '/api/user-access/delete-by-open-id/:open_user_id',
    get: '/api/user-access/get',
    getByOpenUserId: '/api/user-access/get-by-open-id/:open_user_id',
    list: '/api/user-access/list',
} as const
