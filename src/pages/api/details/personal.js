import prisma from "@/lib/prisma"
import withMethods from "@/lib/api-middlewares/with-method";
import withValidation from "@/lib/api-middlewares/with-validation";
import * as z from "zod"

export const validationReqBody = z.object ({
    name:z.string(),
    phoneNumber:z.number(),
    age:z.number(),
    email:z.string(),
    about:z.string(),
});


    async function handler(req, res) {
    const {name, phoneNumber, age, email, about} = await req.body
    console.log(req.body)
    try {
    const isEmailExist = await prisma.personalDetail.findFirst({
        where: {
            email: email,
        },
        select: {
            email: true,
        }
    });

    if (isEmailExist) {
        return res.status(409).json({ success: false, error: "This Email is already exist"})
    }

    let details = {
        name:name,
        phoneNumber:Number(phoneNumber),
        age:Number(age),
        email:email,
        about:about
    };

    const newDetails = await prisma.personalDetail.create({
        data:details
    });
    return res.status(200).json({ success: true,message: "Successfull done"})



} catch (error) {
    console.log(error)
    return res.status(500).json({message: "Something went wrong"});

}
    
};
export default withMethods(["POST"],handler);

