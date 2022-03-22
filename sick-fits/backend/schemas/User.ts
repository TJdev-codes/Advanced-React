import { relationship, password, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const User = list({
  // access:
  // UI
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // todo, add roles, cart and orders
  },
});
