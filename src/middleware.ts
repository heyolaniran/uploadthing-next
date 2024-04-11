import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware ({
    publicRoutes  : ['/']
})

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)" , // regex for excluding static files 
        
        "/(api|trpc)(.*)" // include any files in api or trpc 
    ]
} ; 

