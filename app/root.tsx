import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";

import i18nServer from "./modules/i18n.server";
import { useChangeLanguage } from "remix-i18next/react";

import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import "./tailwind.css";

import supabase from "./utils/supabaseClient";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/common/Sidebar";
import KeywordSearchFilter from "./components/common/KeywordSearchFilter";
import ProductTypeFilter from "./components/common/ProductTypeFilter";

import { SidebarMenu } from "./components/common/Sidebar";

config.autoAddCss = false;
export const handle = { i18n: ["translation"] };

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader() {
  const ENV = {
    SUPABASE_URL: process.env.SUPABASE_URL,
    PUBLIC_ANON_KEY: process.env.PUBLIC_ANON_KEY,
  };
  let locale = await i18nServer.getLocale(request); // get the locale

  const { data, error } = await supabase
    .from("category_entity_varchar")
    .select(
      `
      *,
      category_entity (
        entity_id,
        entity_type_id,
        parent_id,
        created_at,
        updated_at,
        is_active
      )
    `
    )
    .eq("category_entity.is_active", true);

  if (error) {
    throw new Response("Error fetching users", { status: 500 });
  }

  const realMainSubMenu: SidebarMenu[] = data
    .filter((item) => !item.category_entity.parent_id)
    .map((item) => {
      let mainItem = {
        key: String(item?.value_id ?? ""),
        name: String(item?.value ?? ""),
        subMenu: [],
      };
      return mainItem;
    });

  data
    .filter((item) => item.category_entity.parent_id)
    .forEach((item) => {
      realMainSubMenu
        .find(
          (mainItem) => mainItem.key === String(item.category_entity.parent_id)
        )
        ?.subMenu?.push({
          key: String(item?.value_id ?? ""),
          name: String(item?.value ?? ""),
        });
    });

  const sidebarMenu = [
    {
      key: "communications",
      name: "Communications",
      subMenu: [
        {
          key: "email_management",
          name: "Email Management",
        },
        {
          key: "instant_messaging",
          name: "Instant Messaging",
        },
        {
          key: "video_conferencing",
          name: "Video Conferencing",
        },
        {
          key: "voip_services",
          name: "VoIP Services",
        },
        {
          key: "collaboration_tools",
          name: "Collaboration Tools",
        },
      ],
    },
    {
      key: "continuity",
      name: "Continuity",
      subMenu: [
        {
          key: "disaster_recovery_planning",
          name: "Disaster Recovery Planning",
        },
        {
          key: "business_continuity_strategy",
          name: "Business Continuity Strategy",
        },
        {
          key: "data_backup_solutions",
          name: "Data Backup Solutions",
        },
        {
          key: "risk_assessment",
          name: "Risk Assessment",
        },
        {
          key: "incident_management",
          name: "Incident Management",
        },
      ],
    },
    {
      key: "finance",
      name: "Finance",
      subMenu: [
        {
          key: "budgeting_forecasting",
          name: "Budgeting and Forecasting",
        },
        {
          key: "expense_tracking",
          name: "Expense Tracking",
        },
        {
          key: "financial_reporting",
          name: "Financial Reporting",
        },
        {
          key: "payroll_management",
          name: "Payroll Management",
        },
        {
          key: "asset_management",
          name: "Asset Management",
        },
      ],
    },
    {
      key: "human_resources",
      name: "Human Resources",
      subMenu: [
        {
          key: "recruitment_onboarding",
          name: "Recruitment and Onboarding",
        },
        {
          key: "employee_training",
          name: "Employee Training",
        },
        {
          key: "performance_management",
          name: "Performance Management",
        },
        {
          key: "payroll_benefits",
          name: "Payroll and Benefits Administration",
        },
        {
          key: "employee_engagement",
          name: "Employee Engagement",
        },
      ],
    },
    {
      key: "infrastructure",
      name: "Infrastructure",
      subMenu: [
        {
          key: "server_management",
          name: "Server Management",
        },
        {
          key: "data_center_operations",
          name: "Data Center Operations",
        },
        {
          key: "cloud_infrastructure",
          name: "Cloud Infrastructure",
        },
        {
          key: "virtualization",
          name: "Virtualization",
        },
        {
          key: "storage_solutions",
          name: "Storage Solutions",
        },
      ],
    },
    {
      key: "integrations",
      name: "Integrations",
      subMenu: [
        {
          key: "api_management",
          name: "API Management",
        },
        {
          key: "data_synchronization",
          name: "Data Synchronization",
        },
        {
          key: "third_party_integration",
          name: "Third-party Software Integration",
        },
        {
          key: "workflow_automation",
          name: "Workflow Automation",
        },
        {
          key: "crm_integration",
          name: "CRM Integration",
        },
      ],
    },
    {
      key: "it_operations",
      name: "IT Operations",
      subMenu: [
        {
          key: "system_monitoring",
          name: "System Monitoring",
        },
        {
          key: "patch_management",
          name: "Patch Management",
        },
        {
          key: "it_support_helpdesk",
          name: "IT Support and Helpdesk",
        },
        {
          key: "incident_response",
          name: "Incident Response",
        },
        {
          key: "software_deployment",
          name: "Software Deployment",
        },
      ],
    },
    {
      key: "network",
      name: "Network",
      subMenu: [
        {
          key: "connectivity",
          name: "Connectivity",
        },
        {
          key: "network_monitoring",
          name: "Network Monitoring",
        },
      ],
    },
  ];

  const productTypeList = [
    {
      key: "gmm_arguments",
      name: "GMM Arguments",
    },
    {
      key: "distributeurs",
      name: "Distributeurs",
    },
    {
      key: "affiliate_marketplace",
      name: "Affiliate Marketplace",
    },
  ];

  return json({
    locale,
    sidebarMenu: realMainSubMenu,
    productTypeList,
    ENV,
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const matches = useMatches();
  const { sidebarMenu, productTypeList, ENV } = useLoaderData<typeof loader>();
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(true);

  const is404 = matches.some((match) => match.id === "routes/$");
  const loaderData = useRouteLoaderData<typeof loader>("root");

  return (
    <html lang={loaderData?.locale ?? "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {!is404 ? (
          <>
            <Header />
            <div className="mt-8 w-full max-w-primary-max-width mx-auto h-[80vh] rounded-lg flex justify-between gap-4 relative">
              <div className="w-fit mt-4 absolute left-4 z-20">
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-[2rem] h-[2rem] text-[#808588] hover:cursor-pointer"
                  onClick={() => setIsShowSidebar(!isShowSidebar)}
                />
              </div>
              <div
                className={clsx(
                  "w-[27rem] h-full overflow-y-auto scrollbar-container absolute md:relative pt-[3rem] bg-white border-r border-[#808588]",
                  isShowSidebar ? "block" : "hidden"
                )}
              >
                <Sidebar sidebarMenu={sidebarMenu} />
              </div>
              <div className="flex-1 p-4">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full max-w-[25rem] mx-auto">
                    <KeywordSearchFilter />
                  </div>
                  <div className="mt-8">
                    <ProductTypeFilter productTypeList={productTypeList} />
                  </div>
                  <div className="mt-4 w-full flex-grow overflow-y-auto scrollbar-container">
                    {children}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          children
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  useChangeLanguage(locale);

  return <Outlet />;
}
