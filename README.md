# Case Study 2: E-Commerce Product Listing Page
1. How would you fetch and display a list of products from an API in a React component?

Ans) To fetch and display products in a React component, use the useEffect hook to make an API request with fetch or axios when the component mounts. Store the fetched product data in a state variable (useState). Then, map over the data to generate product cards or list items and render them within the component. Include error handling to manage failed API requests, and display a loading state while the data is being fetched.

2. Describe how you would implement search and filter functionalities in the product listing page.

Ans) To implement search and filter functionality, maintain the search term and filter state using useState. Use a controlled input for the search bar, updating the search state on each input change. Filter the product list by comparing product properties (e.g., title, category) with the search term or selected filter options. Use useMemo for optimizing the filtered data rendering. This approach helps users quickly find specific products or view products by category.

3. How can you use React Router to navigate between different pages in the application?

Ans) To use React Router for navigation, install react-router-dom and wrap your application in the BrowserRouter component. Define routes using the Route component, specifying a path and the corresponding component to render. Use Link components for client-side navigation without page refresh. For dynamic pages (e.g., product details), pass route parameters using :id in the path and access them with useParams. This setup enables smooth navigation between different pages, like product listings and product details.

Styled-Components: Styled-Components allows you to write CSS directly in JavaSc

4. Explain how to use Styled-Components to style the product listing page.

Ans) Styled-Components allows you to write CSS directly in JavaScript. Install the styled-components library, then create styled components by calling the styled function followed by the desired HTML tag (e.g., const Button = styled.button). Define CSS properties within template literals. These components can be reused and accept props to apply dynamic styles. Using Styled-Components enhances modularity, ensures scoped styles, and removes class name conflicts, making it easy to style the product listing page in a React project.

5. What techniques would you use to optimize the loading time of the product images?

Ans) To optimize product image loading, implement lazy loading using the loading="lazy" attribute, which defers loading images until they are in the viewport. Use optimized image formats like WebP or AVIF to reduce file sizes without sacrificing quality. Utilize image compression tools or CDN services that serve responsive images based on the device. Also, leverage browser caching to avoid re-downloading the same images on subsequent visits, improving the page's load time and overall user experience.
