import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { NewsletterSection } from '../components/NewsletterSection';

export const GeriaticIpd = () => {
    return (
        <>
          <div className="page-wrapper">
            <SiteHeader />
            <section className="section" style={{ padding: "80px 0" }}>
              <div className="container">
                <h1>Geriatic IPD</h1>
                <p>This page is under development.</p>
              </div>
            </section>
            <NewsletterSection
                title="Ready to Begin Your Journey to Wellness?"
                text="Whether you are a patient, partner, or future team member, we are here to support your next step."
            />
            <SiteFooter />
          </div>
        </>
      );
};