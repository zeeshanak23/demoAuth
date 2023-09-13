import withMethods from "@/lib/api-middlewares/with-method";
import prisma from "@/lib/prisma";
const deleteBtn = async (req, res) => {
  const id = await req.query;

  try {
    const deleteList = await prisma.personalDetail.delete({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ success: true, deleteList, message: "Delete Successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Item not deleted" });
  }
};

export default withMethods(["GET"], deleteBtn);
