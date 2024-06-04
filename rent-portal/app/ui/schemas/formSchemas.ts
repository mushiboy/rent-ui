import {z} from 'zod'

//Sign-in Schema

export const loginSchema = z.object({
    email: z.string().email('Invalid Email Address'),
    password: z.string().min(8, "Password must be at least 8 characters")
})

export type loginType = z.infer<typeof loginSchema>

//Sign-up Schema

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First Name should be at least 1 character"),
  lastName: z.string().min(1, "Last Name should be at least 1 character"),
  email: z.string().email('Invalid Email Address'),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string(),
  mobileNo: z.string().regex(/^08[3-9]\d{7}$|^\+3538[3-9]\d{7}$/, "Mobile number must be a valid Irish mobile number") 
}).refine(data => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

export type signUpType = z.infer<typeof signUpSchema>


