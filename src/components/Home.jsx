


import Services from "./services";
import Hero from "./Hero/Hero";
import Features from "./Features";
import CTA from "./CTA";

import Solution from "./Solution"; 
import Pricing from './pricing/Pricing';


export default function Home() {

    return (
        <>
            <Hero />
            <Services />
            <Pricing />
            <CTA />
            <Solution />
            <Features />
        </>
    )
}  