// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import { marketPlaces } from "../utils/newLists"
// Types
import type { ReactElement } from "react";

export default function MarketPlaces(): ReactElement {
    return (
        <Layout>
            <div className="bg-black py-20">
                <div className="container mx-auto mt-8">
                    <div className="flex justify-around -mt-40">
                        <div className="bg-gray-800 px-20 py-8 rounded text-center">
                            <span className="uppercase text-xl font-semibold">Buy & trade</span>
                            <h1 className="text-center mt-4">Loot Marketplaces</h1>
                            <p className="text-2xl">Find and buy Loot and other Loot items here</p>
                        </div>
                    </div>


                    {marketPlaces.map(({ name, description, project }, i) => {
                        return (
                            <CardRow key={i} name={name} description={description} project={project} />
                        );
                    })}
                </div>
            </div>
        </Layout>

    )
}