import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/layouts/homeLayout/HomeLayout";
import HomePage from "@/pages/HomePage";
import SchoolPage from "@/pages/SchoolPage";
import BusinessPage from "@/pages/BusinessPage";
import TrainingPage from "@/pages/TrainingPage";
import ContactPage from "@/pages/ContactPage";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/school",
                element: <SchoolPage />
            },
            {
                path: "/business",
                element: <BusinessPage />
            },
            {
                path: "/training",
                element: <TrainingPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    }
])