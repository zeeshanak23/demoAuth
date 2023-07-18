

export default function withMethods(method,handler) {
    return async function(req,res){
        if (req.method && !method.includes(req.method)) {
            return res.status(405).end();
        }
        return handler(req,res)
    };
}