const NavItem = () => {
  let MENU = [
    {
      navItem: "Dashboard",
      icon: "mdi-apps",
      dropDown: [{ dropDown__link: "Dashboard", link: "/dashboard" }],
    },
    {
      navItem: "Blogs",
      icon: "mdi-lan",
      dropDown: [
        { dropDown__link: "Create New", link: "/create-new" },
        { dropDown__link: "All Post", link: "/all-post/1" },
      ],
    },
    {
      navItem: "Project",
      icon: "mdi-view-carousel",
      dropDown: [
        { dropDown__link: "Create New Project", link: "/create-project" },
        { dropDown__link: "All Project", link: "/all-project/1" },
      ],
    },
    {
      navItem: "Users",
      icon: "mdi-account-settings",
      dropDown: [{ dropDown__link: "All User", link: "/all-user" }],
    },
    {
      navItem: "Massage",
      icon: "mdi-email",
      dropDown: [{ dropDown__link: "All Massage", link: "/massage/1" }],
    },
    {
      navItem: "Comments",
      icon: "mdi-message-reply",
      dropDown: [{ dropDown__link: "All Comments", link: "/comment/1" }],
    },
  ];
  let PAGES = [
    {
      navItem: "Authentication",
      icon: "mdi-lock",
      dropDown: [
        { dropDown__link: "Sign In" },
        { dropDown__link: "Sign Up" },
        { dropDown__link: "Password Reset" },
        { dropDown__link: "Password Create" },
        { dropDown__link: "Lock Screen" },
        { dropDown__link: "Logout" },
        { dropDown__link: "Success Message" },
        { dropDown__link: "Two Step Verification" },
        { dropDown__link: "Errors" },
      ],
    },
    {
      navItem: "Pages",
      icon: "mdi-arrange-bring-forward",
      dropDown: [
        { dropDown__link: "Starter" },
        { dropDown__link: "Profile" },
        { dropDown__link: "Team" },
        { dropDown__link: "Timeline" },
        { dropDown__link: "FAQs" },
        { dropDown__link: "Pricing" },
        { dropDown__link: "Gallery" },
        { dropDown__link: "Maintenance" },
        { dropDown__link: "Coming Soon" },
        { dropDown__link: "Sitemap" },
        { dropDown__link: "Search Results" },
      ],
    },
    {
      navItem: "Landing",
      icon: "mdi-cube",
      dropDown: [
        { dropDown__link: "One Page" },
        { dropDown__link: "NFT Landing" },
      ],
    },
  ];
  let COMPONENTS = [
    {
      navItem: "Base UI",
      icon: "mdi-widgets",
      dropDown: [
        { dropDown__link: "Alerts" },
        { dropDown__link: "Badges" },
        { dropDown__link: "Buttons" },
        { dropDown__link: "Colors" },
        { dropDown__link: "Cards" },
        { dropDown__link: "Carousel" },
        { dropDown__link: "Dropdowns" },
        { dropDown__link: "Grid" },
        { dropDown__link: "Tabs" },
        { dropDown__link: "Accordion & Collapse" },
        { dropDown__link: "Modals" },
        { dropDown__link: "Offcanvas" },
        { dropDown__link: "Placeholders" },
        { dropDown__link: "Progress" },
        { dropDown__link: "Notifications" },
        { dropDown__link: "Media object" },
        { dropDown__link: "Embed Video" },
        { dropDown__link: "Typography" },
        { dropDown__link: "Lists" },
        { dropDown__link: "General" },
        { dropDown__link: "Ribbons" },
        { dropDown__link: "Utilities" },
      ],
    },
    {
      navItem: "Advance UI",
      icon: "mdi-terrain",
      dropDown: [
        { dropDown__link: "Sweet Alerts" },
        { dropDown__link: "Nestable List" },
        { dropDown__link: "Scrollbar" },
        { dropDown__link: "Animation" },
        { dropDown__link: "Tour" },
        { dropDown__link: "Swiper Slider" },
        { dropDown__link: "Ratings" },
        { dropDown__link: "Highlight" },
        { dropDown__link: "ScrollSpy" },
      ],
    },
    {
      navItem: "Widgets",
      icon: "mdi-chart-histogram",
      dropDown: [{ dropDown__link: "Widgets" }],
    },
    {
      navItem: "Forms",
      icon: "mdi-format-color-fill",
      dropDown: [
        { dropDown__link: "Basic Elements" },
        { dropDown__link: "Form Select" },
        { dropDown__link: "Checkboxs & Radios" },
        { dropDown__link: "Input Masks" },
        { dropDown__link: "Range Slider" },
        { dropDown__link: "Validation" },
        { dropDown__link: "Wizard" },
        { dropDown__link: "File Uploads" },
        { dropDown__link: "Form Layouts" },
        { dropDown__link: "Select2" },
      ],
    },
    {
      navItem: "Tables",
      icon: "mdi-table",
      dropDown: [
        { dropDown__link: "Basic Tables" },
        { dropDown__link: "Grid Js" },
        { dropDown__link: "List Js" },
        { dropDown__link: "Datatables" },
      ],
    },
    {
      navItem: "Charts",
      icon: "mdi-chart-areaspline",
      dropDown: [
        { dropDown__link: "Apexcharts" },
        { dropDown__link: "Chartjs" },
        { dropDown__link: "Echarts" },
      ],
    },
    {
      navItem: "Icons",
      icon: "mdi-shape-plus",
      dropDown: [
        { dropDown__link: "Remix" },
        { dropDown__link: "Boxicons" },
        { dropDown__link: "Material Design" },
        { dropDown__link: "Line Awesome" },
        { dropDown__link: "Feather" },
      ],
    },
    {
      navItem: "Maps",
      icon: "mdi-shape-plus",
      dropDown: [
        { dropDown__link: "Google" },
        { dropDown__link: "Vector" },
        { dropDown__link: "Leaflet" },
      ],
    },
    {
      navItem: "Multi Lavel",
      icon: "mdi-scale-balance",
      dropDown: [
        { dropDown__link: "Level 1.1" },
        { dropDown__link: "Level 1.2" },
        { dropDown__link: "Level 1.3" },
      ],
    },
  ];
  return { MENU, PAGES, COMPONENTS };
};

export default NavItem;
