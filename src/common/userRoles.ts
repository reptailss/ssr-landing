export const USER_ROLES = {
    admin: 'admin',
    superAdmin: 'super-admin',
} as const

export const ALL_USER_ROLES = [
    USER_ROLES.admin,
    USER_ROLES.superAdmin,
] as const

export const ADMINS_USER_ROLES = [
    USER_ROLES.admin,
    USER_ROLES.superAdmin,
] as const