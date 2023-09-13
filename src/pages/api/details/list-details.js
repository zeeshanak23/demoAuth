import withMethods from "@/lib/api-middlewares/with-method";
import prisma from "@/lib/prisma"

const listDetails = async (req,res) => {
    try {
        const allDetails = await prisma.personalDetail.findMany({orderBy: {
            createdAt:"desc"
        }});
        return res.status(200).json({ success:true, allDetails, message: "Found list"})
    } catch (err) {
        return res.status(500).json({error:"list not found"})
    }
};

export default withMethods(["GET"],listDetails);