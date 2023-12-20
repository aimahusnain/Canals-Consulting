export default function manifest() {
  return {
    name: "Canals Consulting",
    short_name: "Canals",
    description:
      "Welcome to Canals Consulting, your strategic partner in business optimization and growth. At Canals, we blend expertise with innovation to deliver a suite of services tailored to elevate your business to new heights. From precise financial modeling and strategic business planning to mastering spreadsheet intricacies with Excel, Macros, and VBA, our comprehensive solutions are designed to empower your journey. Navigate the world of data seamlessly with our Google Sheets customization and Excel database cleaning services. Dive into insightful financial statement analysis and ensure your books are in pristine order with our proficiency in QuickBooks, Xero, and Wave bookkeeping. Whether you require efficient data entry or the support of a virtual assistant, Canals Consulting is your one-stop solution for streamlined business operations. Our commitment is to understand your unique challenges and deliver solutions that make a tangible impact. Join hands with us, and let's embark on a journey of success together. Discover the Canals Consulting advantage - where excellence meets innovation, and your business thrives.",
    start_url: "/",
    scope:"/",
    background_color: "#fff",
    theme_color: "#fff",
    display: "standalone",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
