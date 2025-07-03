const { z } =require("zod");

//creating an object schema

const signupSchema = z.object({
    username: z
    .string({ required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least 3 chars."})
    .max(255, {message: "Name not more than 255 chars"}),

     email: z
    .string({ required_error: "Email is required"})
    .trim()
    .min(3, {message: "Email must be at least 3 chars."})
    .max(255, {message: "Email not more than 255 chars"}),

     phone: z
    .string({ required_error: "phone is required"})
    .trim()
    .min(10, {message: "phone must be at least 10 chars."})
    .max(20, {message: "Name not more than 20 chars"}),

     password: z
    .string({ required_error: "password is required"})
    .trim()
    .min(4, {message: "password must be at least 4 chars."})
    .max(255, {message: "password not more than 255 chars"}),
});

module.exports = signupSchema;