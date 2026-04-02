# itc-website-assignment-anay

ITC Website - IIT BombayA React-based single-page application (SPA) representing the official website of the Institute Technical Council (ITC) at IIT Bombay. This project was built using React, TypeScript, and Vite, focusing on a clean, component-based architecture with a consistent dark-themed aesthetic.

Tech StackFramework: React 18+ (UI library) Language: TypeScript (Static typing) Build Tool: Vite (Development server and bundling) Routing: React Router DOM v6 (Client-side navigation) Styling: Bootstrap 5 (Navbar utilities) & Inline React CSS (Component-level control)

Key Technical Features
1. Tab-Driven Events HubThe Events section uses a centralized state-switcher logic to toggle between Past, Active, and Recurring events without page reloads.Stateful Control: Uses useState<number> to conditionally render sub-components.Data Pattern: Events are rendered via .map() from hardcoded object arrays, ensuring consistent card UI across all categories.
2. Persistent LayoutBy rendering the NavBar and Footer outside the <Routes> block in App.tsx, these elements remain visible and do not re-mount during navigation, providing a seamless SPA experience.
3. Styling & ThemeThe application uses a "CSS-in-JS" approach via inline styles for nearly all visual elements, allowing for rapid, component-specific adjustments against a global dark background defined in index.css.
