import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";

import ProductList from "~/components/ProductList";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Producs List" },
    { name: "description", content: "Welcome to our product store!" },
  ];
};

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);

  const resultData = [
    {
      id: 1,
      header_image: "/assets/images/8_8_new.jpg",
      title: "8×8",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "communications"
      ],
    },
    {
      id: 2,
      header_image: "/assets/images/acrois_new.png",
      title: "Acronis",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "communications",
        "continuity"
      ],
    },
    {
      id: 3,
      header_image: "/assets/images/addigy.jpg",
      title: "Addigy",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "continuity",
        "finance"
      ],
    },
    {
      id: 4,
      header_image: "/assets/images/storytics.jpg",
      title: "SwiftSol",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "continuity",
        "human_resources"
      ],
    },
    {
      id: 5,
      header_image: "/assets/images/acrois_new.png",
      title: "UrbanEase",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "human_resources",
        "infrastructure"
      ],
    },
    {
      id: 6,
      header_image: "/assets/images/apptega.png",
      title: "Veluxe",
      content: `Step up your game with the all-new Adidas! Designed for athletes and active lifestyles, 
      these shoes provide unmatched support, breathability, and traction. 
      With advanced cushioning technology and a lightweight feel, 
      Adidas is perfect for everything from high-intensity workouts to casual runs. 
      Elevate your performance and comfort with a shoe that moves with you!`,
      main_categories: [
        "human_resources",
        "infrastructure",
        "integrations"
      ],
    }
  ];

  return json({
    productData: resultData
  })
}

export default function Index() {
  const { productData } = useLoaderData<typeof loader>();
  return (
    <div className="w-full">
      <ProductList productList={productData} />
    </div>
  );
}
