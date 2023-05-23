# next js project

# client side or server side.

by default next js server side use krta he or agr ap ne client side use krna he toh ap ko page k top pr "use client"; likhna ho gah . or lekin agar ap react k hooks use kr rahe he toh wo sirf client side pr render hote he toh ap ko "use client"; lazmi likhna ho gah.

# when we use server vs client component 

By default, Next.js uses server-side rendering. If you want to use client-side rendering, you need to add "use client" at the top of the page. However, if you are using React hooks, they are rendered only on the client-side, so you must include "use client" as well.

In Next.js, the decision to use server-side rendering (SSR) or client-side rendering (CSR) depends on your specific use case and requirements. Here are some factors to consider when deciding whether to use server-side rendering or client-side rendering for a component:

***Server-Side Rendering (SSR):**

1: Initial Page Load
2: Dynamic Content
3: Authentication and Authorization

***Client-Side Rendering (CSR):**

1:Interactive and Dynamic Updates
2: Client-Side Data Fetching
3: Code Splitting and Performance
