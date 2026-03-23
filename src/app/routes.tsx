import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Onboarding } from "./pages/Onboarding";
import { ComingSoon } from "./pages/ComingSoon";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Security } from "./pages/Security";
import { MobileHome } from "./pages/mobile/MobileHome";
import { MobileFeatures } from "./pages/mobile/MobileFeatures";
import { MobilePricing } from "./pages/mobile/MobilePricing";
import { MobileDemo } from "./pages/mobile/MobileDemo";
import { MobileAbout } from "./pages/mobile/MobileAbout";
import { MobileMore } from "./pages/mobile/MobileMore";
import { MobileContact } from "./pages/mobile/MobileContact";
import { ScrollToTop } from "./components/ScrollToTop";

// Wrapper component that includes ScrollToTop
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

// Simple error boundary component
function ErrorBoundary() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Oops!</h1>
        <p className="text-gray-600 mb-4">Something went wrong.</p>
        <a href="/" className="text-orange-500 hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}

// Not found component
function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page not found.</p>
        <a href="/" className="text-orange-500 hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/about",
    Component: () => (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/pricing",
    Component: () => (
      <Layout>
        <Pricing />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/onboarding",
    Component: () => (
      <Layout>
        <Onboarding />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog",
    Component: () => (
      <Layout>
        <ComingSoon title="Blog Coming Soon" description="We're working hard on our blog. Check back soon for insights, updates, and stories from the Handsfree team." />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/careers",
    Component: () => (
      <Layout>
        <ComingSoon title="Careers Coming Soon" description="We're building something special and looking for talented people to join us. Career opportunities will be posted here soon." />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/privacy",
    Component: () => (
      <Layout>
        <Privacy />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/terms",
    Component: () => (
      <Layout>
        <Terms />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/security",
    Component: () => (
      <Layout>
        <Security />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile",
    Component: () => (
      <Layout>
        <MobileHome />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/features",
    Component: () => (
      <Layout>
        <MobileFeatures />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/pricing",
    Component: () => (
      <Layout>
        <MobilePricing />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/demo",
    Component: () => (
      <Layout>
        <MobileDemo />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/about",
    Component: () => (
      <Layout>
        <MobileAbout />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/more",
    Component: () => (
      <Layout>
        <MobileMore />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/mobile/contact",
    Component: () => (
      <Layout>
        <MobileContact />
      </Layout>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);