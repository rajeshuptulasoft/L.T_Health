import React from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingSupport } from "../components/FloatingSupport";

export const HomeICUSetup = () => {
  return (
    <>
      <FloatingSupport />
      <div className="page-wrapper">
        <SiteHeader />
        <section className="section" style={{ padding: "80px 0" }}>
          <div className="container">
            <h1>Home ICU Setup</h1>
            <p>This page is under development.</p>
          </div>
        </section>
        <SiteFooter />
      </div>
    </>
  );
};
