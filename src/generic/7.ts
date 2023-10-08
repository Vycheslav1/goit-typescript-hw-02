/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
type UserRolesStatuses = Record<UserRole, boolean>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserRolesStatuses= {
  [UserRole.admin]: false,
  [UserRole.editor]: false,
  [UserRole.guest]: false,
};

export {};