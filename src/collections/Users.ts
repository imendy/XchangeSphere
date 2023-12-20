// import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from 'payload/types'


export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}"><button>Verify Email</button></a>`
      },
    }
  },
  access: {
    read: () => true,
    create: () => true,
   
  },
//   auth: {
//     verify: {
//       generateEmailHTML: ({ token }) => {
//         return PrimaryActionEmailHtml({
//           actionLabel: "verify your account",
//           buttonText: "Verify Account",
//           href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
//         })
//       },
//     },
//   },
//   access: {
//     read: adminsAndUser,
//     create: () => true,
//     update: ({ req }) => req.user.role === 'admin',
//     delete: ({ req }) => req.user.role === 'admin',
//   },
//   admin: {
//     hidden: ({ user }) => user.role !== 'admin',
//     defaultColumns: ['id'],
//   },
  
    // {
    //   name: 'products',
    //   label: 'Products',
    //   admin: {
    //     condition: () => false,
    //   },
    //   type: 'relationship',
    //   relationTo: 'products',
    //   hasMany: true,
    // },
    // {
    //   name: 'product_files',
    //   label: 'Product files',
    //   admin: {
    //     condition: () => false,
    //   },
    //   type: 'relationship',
    //   relationTo: 'product_files',
    //   hasMany: true,
    // },
    fields: [
    {
      name: 'role',
       defaultValue: 'user',
     required: true,
   

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}