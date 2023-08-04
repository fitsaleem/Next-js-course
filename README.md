# Next js course

**some dependnces which we need to install**

1: axios (for data fatching)

2: bcryptjs (is the libary to encrypt any thing like password)

3: jsonwebtocken (JSON Web Token, is an open standard used to share security 
information between two parties — a client and a server.)

4: nodemailer (used for sending email)

5: react-hot-toast (a library that aims to include toast notifications in your React applications easily and intuitively.)

6: mongoose (mongooose is a libarary help to talk to the database)


















# next js project.

# client side or server side.

by default next js server side use krta he or agr ap ne client side use krna he toh ap ko page k top pr "use client"; likhna ho gah . or lekin agar ap react k hooks use kr rahe he toh wo sirf client side pr render hote he toh ap ko "use client"; lazmi likhna ho gah.

**when we use server vs client component** 

By default, Next.js uses server-side rendering. If you want to use client-side rendering, you need to add "use client" at the top of the page. However, if you are using React hooks, they are rendered only on the client-side, so you must include "use client" as well.

In Next.js, the decision to use server-side rendering (SSR) or client-side rendering (CSR) depends on your specific use case and requirements. Here are some factors to consider when deciding whether to use server-side rendering or client-side rendering for a component:

***Server-Side Rendering (SSR):***

1: Initial Page Load
2: Dynamic Content
3: Authentication and Authorization
4: any fatching data
5: access backend resources


***Client-Side Rendering (CSR):***

1:Interactive and Dynamic Updates
2: Client-Side Data Fetching
3: Code Splitting and Performance


# routing in next js 

In Next.js, routing is handled through the next/router package, which provides client-side routing capabilities. Next.js uses a file-based routing system, where each page is represented by a separate file in the pages directory.

***Basic Routing:***

To create a new page, you can simply create a new file inside the pages directory. For example, if you create a file named about.js inside the pages directory, it will automatically be accessible at the /about route.

Linking between pages: Next.js provides the Link component to create links between pages. You can import it from next/link.

***Dynamic Routing:***

Next.js also supports dynamic routing, where parts of the URL can be dynamic parameters. To create a dynamic route, you can create a file using square brackets ([]) in the pages directory.

For example, if you create a file named [id].js inside the pages directory, it will match any route with a parameter in the URL, such as /users/123 or /products/abc.

With dynamic routing, you can access the dynamic parameter using useRouter from next/router. The value of the dynamic parameter is available in the query object of the router.

You can learn more about routing in Next.js in the official documentation: (Next.js Routing)[https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes].

Remember to install the next/router package if you haven't already by running npm install next/router or yarn add next/router.


# Data fetching in next js 

In Next.js, there are several ways to fetch data for your pages or components.  Here are some common methods for data fetching:

note: by default next js use static generation for data fatching 

***1: Static Generation (getStaticProps):***

Use getStaticProps to fetch data at build time.
This method allows you to pre-render pages with the fetched data and provides good performance.
Data is static and doesn't change on subsequent requests.

***2: Server-side Rendering (getServerSideProps):***

Use getServerSideProps to fetch data on each request.
This method allows you to fetch data dynamically at runtime.
Data can be personalized or change frequently.

***3: Incremental Static Generation (ISG)***

Incremental Static Generation (ISG) is a feature introduced in Next.js 9.5 that allows you to update static pages dynamically without rebuilding the entire site. It combines the benefits of Static Generation (SSG) and Server-Side Rendering (SSR) by allowing you to generate static pages at build time and then incrementally regenerate them in the background as new data becomes available.

With ISG, you can generate a static page with initial data during the build process using getStaticProps. Then, you can define a revalidation period using the revalidate option in getStaticProps to specify how frequently Next.js should check for updates and regenerate the page.


# route handlers 

In Next.js, route handlers are functions that handle the server-side logic for different routes. They are used to define how the server should respond to incoming HTTP requests to specific routes or API endpoints.

There are several ways to define route handlers in Next.js:

 *** 1: API Routes:***

Next.js provides a built-in mechanism called API Routes for creating serverless API endpoints.
You can create an API route by creating a file inside the pages/api directory. For example, if you create a file named hello.js inside pages/api, it will be accessible at the /api/hello route.

*** 2: Custom Server:***

Next.js allows you to create a custom server to handle server-side logic and define custom route handlers.
You can create a server.js file in your project's root directory and define your own server using the http or express module.

***3: Dynamic Routing:***

Next.js supports dynamic routing where you can define route parameters and handle them in your page or component.
Dynamic routes use the pages/[slug].js file naming convention, where [slug] represents a parameter in the URL.

For more details on API Routes, Custom Servers, and Dynamic Routing in Next.js, you can refer to the official documentation: (API Routes)[https://nextjs.org/docs/pages/building-your-application/routing/api-routes], (Custom Server)[https://nextjs.org/docs/pages/building-your-application/configuring/custom-server], (Dynamic Routes)[https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes].l