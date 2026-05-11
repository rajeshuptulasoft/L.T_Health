import React, { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FloatingSupport } from "../components/FloatingSupport";
import { NewsletterSection } from "../components/NewsletterSection";
import { BannerProgressAndCount } from "../components/BannerProgressAndCount";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Home = () => {
    const servicesSwiperRef = useRef(null);
    const testimonialSwiperRef = useRef(null);
    const [activeBenefitTab, setActiveBenefitTab] = useState("angioplasty");

    useEffect(() => {
        const servicesSliderEl = document.querySelector(".lt-services-slider");
        if (!servicesSliderEl) return;

        // Prevent double-init on hot reload / re-render
        if (servicesSliderEl.swiper) return;

        servicesSwiperRef.current = new Swiper(servicesSliderEl, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".lt-services-next",
                prevEl: ".lt-services-prev"
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 }
            }
        });

        const testimonialSliderEl = document.querySelector(".testimonial-one__carousel");
        if (testimonialSliderEl && !testimonialSliderEl.swiper) {
            testimonialSwiperRef.current = new Swiper(testimonialSliderEl, {
                modules: [Pagination, Autoplay],
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                speed: 500,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".testimonial-one__pagination",
                    clickable: true
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                    1320: { slidesPerView: 3 }
                }
            });
        }

        return () => {
            servicesSwiperRef.current?.destroy(true, true);
            servicesSwiperRef.current = null;
            testimonialSwiperRef.current?.destroy(true, true);
            testimonialSwiperRef.current = null;
        };
    }, []);

    return (
        <>
  <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --mediplace-base: #05bdec;\n            --mediplace-base-rgb: 5, 189, 236;\n            --mediplace-black: #16a392;\n            --mediplace-black-rgb: 103, 148, 53;\n        }\n\n        .thm-btn {\n            background: linear-gradient(135deg, #05bdec 0%, #16a392 100%);\n            border: 0;\n            border-radius: 10px;\n            box-shadow: 0 10px 24px rgba(5, 189, 236, 0.25);\n            transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;\n        }\n\n        .thm-btn:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 14px 26px rgba(103, 148, 53, 0.28);\n            filter: saturate(1.05);\n        }\n\n        .main-menu .main-menu__list>li>a,\n        .stricky-header .main-menu__list>li>a,\n        .main-menu .main-menu__list>li:hover>a,\n        .main-menu .main-menu__list>li.current>a,\n        .stricky-header .main-menu__list>li:hover>a,\n        .stricky-header .main-menu__list>li.current>a {\n            color: #000000 !important;\n        }\n\n        .main-menu .main-menu__list>li.services-dropdown>a {\n            font-weight: 700;\n            color: var(--mediplace-black);\n        }\n\n        .main-menu .main-menu__list>li.services-dropdown>ul {\n            width: 560px;\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 6px;\n            padding: 14px;\n            border-radius: 14px;\n            border: 1px solid rgba(5, 189, 236, 0.22);\n            box-shadow: 0 16px 36px rgba(5, 189, 236, 0.15);\n        }\n\n        .main-menu .main-menu__list>li.services-dropdown>ul>li {\n            margin: 0;\n        }\n\n        .main-menu .main-menu__list>li.services-dropdown>ul>li>a {\n            border-radius: 10px;\n            min-height: 42px;\n            display: flex;\n            align-items: center;\n            padding: 10px 12px;\n            font-weight: 600;\n            line-height: 1.35;\n            color: #1f2b36;\n            transition: all 0.25s ease;\n        }\n\n        .main-menu .main-menu__list>li.services-dropdown>ul>li>a:hover {\n            background: linear-gradient(135deg, rgba(5, 189, 236, 0.14), rgba(103, 148, 53, 0.14));\n            color: var(--mediplace-black);\n            transform: translateX(2px);\n        }\n\n        .about-three {\n            background: linear-gradient(135deg, rgba(5, 189, 236, 0.1) 0%, rgba(103, 148, 53, 0.12) 100%);\n            border-top: 1px solid rgba(5, 189, 236, 0.2);\n            border-bottom: 1px solid rgba(103, 148, 53, 0.2);\n        }\n\n        .about-three .section-title__tagline,\n        .about-three__content h4,\n        .about-three__points li {\n            color: #1a2b36;\n        }\n\n        .about-three__experience-box {\n            background: linear-gradient(135deg, #05bdec 0%, #679435 100%);\n            box-shadow: 0 12px 28px rgba(5, 189, 236, 0.25);\n        }\n\n        .services-three {\n            background: linear-gradient(180deg, rgba(5, 189, 236, 0.08) 0%, rgba(255, 255, 255, 1) 100%);\n        }\n\n        .services-three__single-inner,\n        .process-two__single,\n        .benefits-one__tab-buttons-single,\n        .blog-three__single {\n            border-radius: 14px;\n            border: 1px solid rgba(5, 189, 236, 0.2);\n            box-shadow: 0 10px 24px rgba(5, 189, 236, 0.09);\n            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n        }\n\n        .services-three__single-inner:hover,\n        .process-two__single:hover,\n        .benefits-one__tab-buttons-single:hover,\n        .blog-three__single:hover {\n            transform: translateY(-5px);\n            border-color: rgba(103, 148, 53, 0.45);\n            box-shadow: 0 16px 34px rgba(103, 148, 53, 0.16);\n        }\n\n        .services-three__icon span,\n        .process-two__count,\n        .benefits-one .tab-buttons .tab-btn.active-btn .benefits-one__tab-buttons-single,\n        .blog-three__date {\n            background: linear-gradient(135deg, #05bdec 0%, #679435 100%);\n            color: #ffffff;\n        }\n\n        .section-title__title span,\n        .services-three__title a:hover,\n        .benefits-one__content-right-title,\n        .blog-three__title a:hover {\n            color: #679435 !important;\n        }\n\n        .discount-one {\n            background: linear-gradient(130deg, rgba(5, 189, 236, 0.85) 0%, rgba(103, 148, 53, 0.9) 100%);\n        }\n\n        .site-footer-three {\n            background: linear-gradient(180deg, #0f1e2c 0%, #162d3d 55%, #1f3f2f 100%);\n        }\n\n        .site-footer-three a:hover,\n        .site-footer-three__newsletter-btn {\n            color: #05bdec !important;\n        }\n\n        @media (max-width: 1199px) {\n            .main-menu .main-menu__list>li.services-dropdown>ul {\n                width: 100%;\n                display: block;\n                padding: 0;\n                border: 0;\n                box-shadow: none;\n            }\n        }\n\n        .lt-section {\n            padding: 110px 0;\n            background: #f8fafb;\n        }\n\n        .lt-section.alt1 {\n            background: #ffffff;\n        }\n\n        .lt-section.alt1 {\n            background: #f9f2d5;\n        }\n\n        .lt-section.lt-why-section {\n            background: #fff3d9;\n        }\n\n        .lt-tag {\n            display: inline-block;\n            padding: 6px 14px;\n            border-radius: 999px;\n            background: #eaf8f6;\n            color: #149a8a;\n            font-size: 12px;\n            font-weight: 700;\n            letter-spacing: 0.04em;\n            text-transform: uppercase;\n            margin-bottom: 16px;\n        }\n\n        .lt-title {\n            font-size: 54px;\n            line-height: 1.08;\n            color: #0f2f4f;\n            margin: 0 0 14px;\n            font-weight: 700;\n        }\n\n        .lt-subtext {\n            color: #6d7e8e;\n            font-size: 17px;\n            line-height: 1.8;\n            max-width: 760px;\n            margin: 0 auto;\n        }\n\n        .lt-card {\n            background: #fff;\n            border: 1px solid #edf2f6;\n            border-radius: 20px;\n            box-shadow: 0 8px 28px rgba(10, 39, 71, 0.06);\n            transition: transform .25s ease, box-shadow .25s ease;\n        }\n\n        .lt-card:hover {\n            transform: translateY(-6px);\n            box-shadow: 0 16px 34px rgba(10, 39, 71, 0.1);\n        }\n\n        .lt-why-grid .lt-card {\n            text-align: center;\n            padding: 34px 24px 30px;\n            height: 100%;\n        }\n\n        .lt-icon {\n            width: 58px;\n            height: 58px;\n            margin: 0 auto 20px;\n            border-radius: 50%;\n            display: grid;\n            place-items: center;\n            color: #17b09b;\n            background: #eaf8f6;\n            font-size: 20px;\n        }\n\n        .lt-why-grid h4 {\n            font-size: 28px;\n            color: #123555;\n            margin: 0 0 12px;\n        }\n\n        .lt-why-grid p {\n            margin: 0;\n            color: #6d7e8e;\n            font-size: 16px;\n            line-height: 1.75;\n        }\n\n        .lt-services-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: end;\n            gap: 20px;\n            margin-bottom: 36px;\n        }\n\n        .lt-nav {\n            display: flex;\n            gap: 12px;\n        }\n\n        .lt-nav .nav-btn {\n            width: 44px;\n            height: 44px;\n            border-radius: 50%;\n            border: 1px solid #d8e3ec;\n            background: #fff;\n            color: #2f4c67;\n            display: grid;\n            place-items: center;\n        }\n\n        .lt-nav .nav-btn.active {\n            color: #fff;\n            border-color: #16a392;\n            background: #16a392;\n        }\n\n        .lt-service-card {\n            overflow: hidden;\n            height: 100%;\n        }\n\n        .lt-services-slider {\n            padding: 8px 4px 18px;\n        }\n\n        .lt-services-slider .swiper-slide {\n            height: auto;\n        }\n\n        .lt-services-slider .lt-card {\n            height: 100%;\n        }\n\n        .lt-thumb {\n            height: 230px;\n            background: linear-gradient(145deg, #d8eff3 0%, #c8e4e9 100%);\n            border-bottom: 1px solid #ebf1f5;\n        }\n\n        .lt-thumb img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            object-position: center center;\n            display: block;\n        }\n\n        .lt-service-content,\n        .lt-blog-content {\n            padding: 26px 24px 24px;\n        }\n\n        .lt-eyebrow {\n            margin: 0 0 10px;\n            color: #16a392;\n            font-size: 12px;\n            font-weight: 700;\n            text-transform: uppercase;\n            letter-spacing: .12em;\n        }\n\n        .lt-service-card h4,\n        .lt-blog-card h4 {\n            margin: 0 0 10px;\n            font-size: 34px;\n            line-height: 1.2;\n            color: #123555;\n        }\n\n        .lt-service-card p,\n        .lt-blog-card p,\n        .lt-who-content p {\n            margin: 0;\n            color: #6d7e8e;\n            font-size: 16px;\n            line-height: 1.8;\n        }\n\n        .lt-link {\n            display: inline-flex;\n            align-items: center;\n            gap: 8px;\n            margin-top: 14px;\n            color: #16a392;\n            font-size: 13px;\n            font-weight: 800;\n            letter-spacing: .08em;\n            text-transform: uppercase;\n        }\n\n        .lt-benefits-slider {\n            padding: 8px 4px 18px;\n        }\n\n        .lt-benefits-slider .swiper-slide {\n            height: auto;\n        }\n\n        .lt-benefits-slider .lt-card {\n            height: 100%;\n        }\n\n        .lt-benefits-points {\n            list-style: none;\n            padding: 0;\n            margin: 14px 0 0;\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n\n        .lt-benefits-points li {\n            display: flex;\n            align-items: flex-start;\n            gap: 10px;\n            color: #6d7e8e;\n            font-size: 14px;\n            line-height: 1.6;\n        }\n\n        .lt-benefits-points li i {\n            color: #16a392;\n            margin-top: 4px;\n            flex: 0 0 auto;\n        }\n\n        /* Benefits redesign: restore original layout, hide temporary slider */\n        section.benefits-one .section-title,\n        section.benefits-one .benefits-one__inner {\n            display: block;\n        }\n\n        section.benefits-one .lt-benefits-replacement {\n            display: none;\n        }\n\n        section.benefits-one {\n            background: #ffffff;\n        }\n\n        section.benefits-one .section-title__tagline {\n            color: #16a392;\n            font-weight: 700;\n            letter-spacing: .04em;\n        }\n\n        section.benefits-one .section-title__title,\n        section.benefits-one .benefits-one__content-right-title {\n            color: #123555;\n        }\n\n        section.benefits-one .benefits-one__tab-buttons-single {\n            border-radius: 18px;\n            border: 1px solid #edf2f6;\n            box-shadow: 0 8px 28px rgba(10, 39, 71, 0.06);\n            color: #123555;\n        }\n\n        section.benefits-one .tab-buttons .tab-btn.active-btn .benefits-one__tab-buttons-single {\n            background: #fff7ea;\n            border-color: rgba(22, 163, 146, 0.25);\n            box-shadow: 0 14px 32px rgba(22, 163, 146, 0.12);\n        }\n\n        .lt-benefit-tab-icon {\n            width: 52px;\n            height: 52px;\n            border-radius: 50%;\n            display: inline-grid;\n            place-items: center;\n            background: #eaf8f6;\n            color: #16a392;\n            font-size: 20px;\n        }\n\n        section.benefits-one .tab-buttons .tab-btn.active-btn .lt-benefit-tab-icon {\n            background: #16a392;\n            color: #ffffff;\n        }\n\n        section.benefits-one .benefits-one__tab-buttons-single span {\n            font-size: 16px;\n            font-weight: 700;\n            color: #123555;\n        }\n\n        section.benefits-one .benefits-one__content-right-text,\n        section.benefits-one .benefits-one__points li .text p {\n            color: #6d7e8e;\n        }\n\n        section.benefits-one .benefits-one__points li .icon span {\n            color: #16a392;\n        }\n\n        section.benefits-one .benefits-one__content-img img,\n        section.benefits-one .benefits-one__content-small-img img {\n            object-fit: cover;\n        }\n\n        .lt-gap-section {\n            background: linear-gradient(180deg, #f7fbfc 0%, #ffffff 100%);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .lt-gap-section::before {\n            content: \"\";\n            position: absolute;\n            top: -120px;\n            right: -120px;\n            width: 320px;\n            height: 320px;\n            border-radius: 50%;\n            background: radial-gradient(circle, rgba(22, 163, 146, 0.14) 0%, rgba(22, 163, 146, 0) 70%);\n            pointer-events: none;\n        }\n\n        .lt-gap-layout {\n            display: grid;\n            grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);\n            gap: 28px;\n            align-items: start;\n            position: relative;\n            z-index: 1;\n        }\n\n        .lt-gap-cards {\n            display: grid;\n            grid-template-columns: repeat(3, minmax(0, 1fr));\n            gap: 20px;\n        }\n\n        .lt-gap-card {\n            overflow: hidden;\n            cursor: pointer;\n            border-radius: 22px;\n            border: 1px solid #e8eef3;\n            transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;\n        }\n\n        .lt-gap-card.is-active {\n            border-color: rgba(22, 163, 146, 0.3);\n            box-shadow: 0 16px 34px rgba(22, 163, 146, 0.12);\n            transform: translateY(-4px);\n        }\n\n        .lt-gap-card:hover {\n            transform: translateY(-4px);\n        }\n\n        .lt-gap-card .lt-thumb {\n            height: 240px;\n            border-bottom: 0;\n        }\n\n        .lt-gap-card .lt-service-content {\n            padding: 20px 20px 22px;\n        }\n\n        .lt-gap-card h4 {\n            font-size: 22px;\n            margin: 0 0 8px;\n            color: #123555;\n        }\n\n        .lt-gap-card p {\n            color: #6d7e8e;\n            margin: 0;\n            font-size: 15px;\n            line-height: 1.7;\n        }\n\n        .lt-gap-detail {\n            padding: 28px;\n            border-radius: 28px;\n            border: 1px solid #e8eef3;\n            box-shadow: 0 18px 40px rgba(10, 39, 71, 0.08);\n            background: #ffffff;\n            position: sticky;\n            top: 24px;\n        }\n\n        .lt-gap-detail-media {\n            border-radius: 22px;\n            overflow: hidden;\n            background: #eef5f7;\n            margin-bottom: 24px;\n        }\n\n        .lt-gap-detail-media img {\n            width: 100%;\n            height: 360px;\n            object-fit: cover;\n            display: block;\n        }\n\n        .lt-gap-detail h3 {\n            color: #123555;\n            font-size: 40px;\n            line-height: 1.15;\n            margin: 0 0 14px;\n        }\n\n        .lt-gap-detail p {\n            color: #6d7e8e;\n            font-size: 16px;\n            line-height: 1.85;\n            margin: 0;\n        }\n\n        .lt-gap-points {\n            list-style: none;\n            padding: 0;\n            margin: 18px 0 0;\n            display: grid;\n            gap: 10px;\n        }\n\n        .lt-gap-points li {\n            display: flex;\n            gap: 10px;\n            align-items: flex-start;\n            color: #6d7e8e;\n            font-size: 15px;\n            line-height: 1.65;\n        }\n\n        .lt-gap-points i {\n            color: #16a392;\n            margin-top: 4px;\n        }\n\n        .lt-gap-topline {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            gap: 20px;\n            margin-bottom: 16px;\n        }\n\n        .lt-gap-badge {\n            display: inline-flex;\n            align-items: center;\n            gap: 10px;\n            padding: 10px 14px;\n            background: #f2fbf8;\n            border: 1px solid rgba(22, 163, 146, 0.16);\n            border-radius: 999px;\n            color: #16a392;\n            font-size: 13px;\n            font-weight: 700;\n            letter-spacing: .04em;\n        }\n\n        .lt-gap-badge i {\n            font-size: 14px;\n        }\n\n        .lt-gap-stat {\n            min-width: 110px;\n            text-align: right;\n        }\n\n        .lt-gap-stat strong {\n            display: block;\n            color: #123555;\n            font-size: 32px;\n            line-height: 1;\n            margin-bottom: 6px;\n        }\n\n        .lt-gap-stat span {\n            color: #7f91a0;\n            font-size: 13px;\n            letter-spacing: .04em;\n        }\n\n        .lt-gap-detail.is-switching {\n            opacity: .82;\n            transform: translateY(2px);\n        }\n\n        .lt-blog-head {\n            display: flex;\n            justify-content: space-between;\n            gap: 24px;\n            align-items: center;\n            margin-bottom: 34px;\n        }\n\n        .lt-ghost-btn {\n            border: 1px solid #87c5ba;\n            color: #16a392;\n            background: #fff;\n            border-radius: 999px;\n            padding: 10px 20px;\n            font-size: 12px;\n            font-weight: 700;\n            letter-spacing: .08em;\n            text-transform: uppercase;\n        }\n\n        .lt-blog-meta {\n            margin: 0 0 12px;\n            color: #8da0b0;\n            font-size: 13px;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        .lt-who-wrap {\n            display: grid;\n            gap: 36px;\n            grid-template-columns: 1fr 1fr;\n            align-items: center;\n        }\n\n        .lt-who-media {\n            background: linear-gradient(145deg, #d8eff3 0%, #c4dfe8 100%);\n            border-radius: 24px;\n            min-height: 390px;\n            position: relative;\n            overflow: hidden;\n            border: 1px solid #e8f0f3;\n        }\n\n        .lt-who-media img {\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            max-width: 240px;\n            width: 48%;\n            opacity: .95;\n            filter: drop-shadow(0 18px 24px rgba(8, 36, 62, .18));\n        }\n\n        .lt-who-media video {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            display: block;\n        }\n\n        .lt-who-content .lt-subtext {\n            margin: 0;\n            max-width: 100%;\n        }\n\n        .lt-testimonial-slider {\n            margin-top: 42px;\n            padding-bottom: 36px;\n        }\n\n        .lt-testimonial-slider .swiper-slide {\n            height: auto;\n        }\n\n        .lt-testimonial-card {\n            background: #d3ffd1;\n            border: 1px solid #e3e7ed;\n            border-radius: 20px;\n            padding: 24px 33px 20px;\n            min-height: 219px;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            box-shadow: none;\n        }\n\n        .lt-quote-icon {\n            color: #c7ced8;\n            font-size: 26px;\n            line-height: 1;\n            margin-bottom: 14px;\n        }\n\n        .lt-quote {\n            color: #1e2e3c;\n            font-size: 15px;\n            line-height: 1.55;\n            margin: 0;\n            font-weight: 600;\n            max-width: 95%;\n        }\n\n        .lt-testimonial-author {\n            margin-top: 24px;\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n\n        .lt-testimonial-author img {\n            width: 45px;\n            height: 45px;\n            border-radius: 50%;\n            object-fit: cover;\n            margin-left: 102px;\n        }\n\n        .lt-author {\n            margin: 0;\n            color: #263645;\n            font-size: 13px;\n            font-weight: 700;\n            line-height: 1.2;\n        }\n\n        .lt-role {\n            margin: 2px 0 0;\n            color: #9aa7b5;\n            letter-spacing: 0;\n            text-transform: none;\n            font-size: 12px;\n            font-weight: 600;\n            line-height: 1.2;\n        }\n\n        .lt-testimonial-pagination {\n            display: flex;\n            justify-content: center;\n            margin-top: 18px;\n        }\n\n        .lt-testimonial-pagination .swiper-pagination-bullet {\n            width: 22px;\n            height: 3px;\n            border-radius: 8px;\n            background: #d6dde6;\n            opacity: 1;\n            margin: 0 4px !important;\n        }\n\n        .lt-testimonial-pagination .swiper-pagination-bullet-active {\n            background: #1f2e3c;\n        }\n\n        @media (max-width: 991px) {\n            .lt-title {\n                font-size: 40px;\n            }\n\n            .lt-services-header,\n            .lt-blog-head {\n                flex-direction: column;\n                align-items: flex-start;\n            }\n\n            .lt-who-wrap {\n                grid-template-columns: 1fr;\n            }\n\n            .lt-gap-layout,\n            .lt-gap-cards {\n                grid-template-columns: 1fr;\n            }\n\n            .lt-gap-card .lt-thumb {\n                height: 240px;\n            }\n\n            .lt-gap-detail {\n                position: static;\n            }\n\n            .lt-gap-topline {\n                flex-direction: column;\n                align-items: flex-start;\n            }\n\n            .lt-gap-stat {\n                text-align: left;\n            }\n        }\n\n        .chat-icon {\n            position: fixed;\n            right: 31px;\n            bottom: 3%;\n            z-index: 99999999;\n        }\n\n        .chat-icon .chat-toggler {\n            cursor: pointer;\n            width: 55px;\n            height: 55px;\n            border: 0;\n            border-radius: 50%;\n            background: #05bdec;\n            color: #ffffff;\n            font-size: 24px;\n            box-shadow: 0 6px 9px rgb(0 0 0 / 5%), 0 4px 5px rgb(0 0 0 / 5%);\n        }\n\n        #whatsappbtn {\n            cursor: pointer;\n            position: fixed;\n            bottom: 3%;\n            left: 31px;\n            z-index: 99999999;\n            padding-top: 8px;\n            background: #4fcc5d;\n            border-radius: 50%;\n            width: 55px;\n            height: 55px;\n            text-align: center;\n            box-shadow: 0 6px 9px rgb(0 0 0 / 5%), 0 4px 5px rgb(0 0 0 / 5%);\n        }\n\n        #whatsappbtn img {\n            width: 38px;\n            height: 38px;\n            object-fit: contain;\n        }\n\n        #lt-chatbot {\n            position: fixed;\n            left: 31px;\n            bottom: 95px;\n            z-index: 99999998;\n            font-family: \"Manrope\", sans-serif;\n        }\n\n        .lt-chatbot-toggle {\n            width: 55px;\n            height: 55px;\n            border-radius: 50%;\n            border: 0;\n            background: #ff6b35;\n            color: #fff;\n            font-size: 22px;\n            cursor: pointer;\n            box-shadow: 0 6px 9px rgb(0 0 0 / 8%), 0 4px 5px rgb(0 0 0 / 6%);\n        }\n\n        .lt-chatbot-panel {\n            width: 320px;\n            height: 430px;\n            margin-bottom: 12px;\n            background: #fff;\n            border: 1px solid #dce8ef;\n            border-radius: 16px;\n            box-shadow: 0 18px 40px rgba(10, 39, 71, 0.18);\n            display: none;\n            flex-direction: column;\n            overflow: hidden;\n        }\n\n        .lt-chatbot-panel.is-open {\n            display: flex;\n        }\n\n        .lt-chatbot-header {\n            background: linear-gradient(135deg, #ff7f50 0%, #ff6b35 100%);\n            color: #fff;\n            padding: 12px 14px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n        .lt-chatbot-header h4 {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n        }\n\n        .lt-chatbot-close {\n            border: 0;\n            background: transparent;\n            color: #fff;\n            font-size: 18px;\n            cursor: pointer;\n        }\n\n        .lt-chatbot-messages {\n            flex: 1;\n            overflow-y: auto;\n            padding: 12px;\n            background: #f5f8fb;\n        }\n\n        .lt-chatbot-msg {\n            max-width: 84%;\n            padding: 10px 12px;\n            border-radius: 12px;\n            margin-bottom: 10px;\n            font-size: 14px;\n            line-height: 1.5;\n        }\n\n        .lt-chatbot-msg.bot {\n            background: #fff;\n            border: 1px solid #dce8ef;\n            color: #1f2b36;\n        }\n\n        .lt-chatbot-msg.user {\n            margin-left: auto;\n            background: #ff6b35;\n            color: #fff;\n        }\n\n        .lt-chatbot-form {\n            display: flex;\n            gap: 8px;\n            padding: 10px;\n            border-top: 1px solid #e4edf3;\n            background: #fff;\n        }\n\n        .lt-chatbot-input {\n            flex: 1;\n            border: 1px solid #d6e3ec;\n            border-radius: 10px;\n            padding: 9px 10px;\n            font-size: 14px;\n        }\n\n        .lt-chatbot-send {\n            border: 0;\n            border-radius: 10px;\n            background: #ff6b35;\n            color: #fff;\n            padding: 0 14px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n        }\n    " }} />
  <style>{`
      /* Services slider layout fix (card width + consistent stretching) */
      .lt-services-slider .swiper-wrapper{ align-items: stretch; }
      .lt-services-slider .swiper-slide{ display:flex; height:auto; }
      .lt-services-slider .lt-service-card{ width:100%; }
      .benefits-one .tab-buttons .tab-btn{ cursor:pointer; }

      /* Appointment select should look like other input boxes */
      .appointment-three__input .select-box{ position:relative; }
      .appointment-three__input .select-box select.wide{
        width:100%;
        height:60px;
        border-radius:7px;
        background-color:#fff;
        border:1px solid rgba(0,0,0,.1);
        color:var(--mediplace-gray);
        font-size:16px;
        font-family:var(--mediplace-font);
        font-weight:400;
        outline:none;
        padding:0 46px 0 25px;
        appearance:none;
        -webkit-appearance:none;
        -moz-appearance:none;
        cursor:pointer;
      }
      .appointment-three__input .select-box::before{
        content:"\\f107";
        font-family:"Font Awesome 5 Pro","Font Awesome 5 Free";
        font-weight:900;
        color:var(--mediplace-gray);
        font-size:16px;
        position:absolute;
        right:20px;
        top:50%;
        transform:translateY(-50%);
        pointer-events:none;
      }

      /* Testimonial section slider + exact card styling */
      .testimonial-one__carousel{ overflow: hidden; }
      .testimonial-one__carousel .swiper-wrapper{ align-items: stretch; }
      .testimonial-one__carousel .swiper-slide{ height: auto; }
      .testimonial-one__carousel .item{ height: 100%; }
      .testimonial-one__carousel .testimonial-one__single{ margin-left: 30px; height: calc(100% - 2px); }
      .testimonial-one__pagination{ margin-top: 56px; text-align: center; line-height: 0; }
      .testimonial-one__pagination .swiper-pagination-bullet{
        width: 10px; height: 10px; margin: 0 11px !important; background: #16a392; opacity: 1; position: relative;
      }
      .testimonial-one__pagination .swiper-pagination-bullet-active{ background: #05bdec; }
      .testimonial-one__pagination .swiper-pagination-bullet-active::before{
        content: ""; position: absolute; inset: -7px; border: 1px solid #05bdec; border-radius: 50%;
      }
      @media (max-width: 767px){
        .testimonial-one__carousel .testimonial-one__single{ margin-left: 0; }
      }
    `}</style>
  <div className="custom-cursor__cursor" />
  <div className="custom-cursor__cursor-two" />
  <div className="chat-icon"><button type="button" className="chat-toggler"><i className="fa fa-comment" /></button></div>
  <a id="whatsappbtn" href="https://api.whatsapp.com/send?phone=919090050151" target="_blank">
    <img src="/assets/images/icon/whatsapp.png" alt="WhatsApp" />
  </a>
  <div id="lt-chatbot">
    <div className="lt-chatbot-panel" id="ltChatPanel">
      <div className="lt-chatbot-header">
        <h4>L.T Care Assistant</h4>
        <button type="button" className="lt-chatbot-close" id="ltChatClose"><i className="fas fa-times" /></button>
      </div>
      <div className="lt-chatbot-messages" id="ltChatMessages">
        <div className="lt-chatbot-msg bot">Hi! Welcome to L.T Way to Healthcare. Ask me about services,
          appointments, contact, or operating hours.</div>
      </div>
      <form className="lt-chatbot-form" id="ltChatForm">
        <input className="lt-chatbot-input" id="ltChatInput" type="text" placeholder="Type your message..." autoComplete="off" />
        <button className="lt-chatbot-send" type="submit">Send</button>
      </form>
    </div>
    <button type="button" className="lt-chatbot-toggle" id="ltChatToggle"><i className="fas fa-comments" /></button>
  </div>
  {/*Chat Popup*/}
  <div id="chat-popup" className="chat-popup">
    <div className="popup-inner">
      <div className="close-chat"><i className="fa fa-times" /></div>
      <div className="chat-form">
        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
        <form action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Text" required defaultValue={""} />
          </div>
          <div className="form-group message-btn">
            <button type="submit" className="thm-btn">
              <span className="fas fa-arrow-right" />
              Submit Now
            </button>
          </div>
          <div className="result" />
        </form>
      </div>
    </div>
  </div>
  {/* Start sidebar widget content */}
  <div className="xs-sidebar-group info-group info-sidebar">
    <div className="xs-overlay xs-bg-black" />
    <div className="xs-sidebar-widget">
      <div className="sidebar-widget-container">
        <div className="widget-heading">
          <a href="#" className="close-side-widget">X</a>
        </div>
        <div className="sidebar-textwidget">
          <div className="sidebar-info-contents">
            <div className="content-inner">
              <div className="logo">
                <a href="index.html"><img src="/assets/images/resources/ltwaytohealth.webp" alt="" /></a>
              </div>
              <div className="content-box">
                <h4>About Us</h4>
                <div className="inner-text">
                  <p>Receive Comprehensive Health Care at L.T Way to Healthcare, Bhubaneswar.
                  </p>
                </div>
              </div>
              <div className="form-inner">
                <h4>Get a free quote</h4>
                <form action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/assets/inc/sendemail.php" method="POST" className="contact-form-validated">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Message..." required defaultValue={""} />
                  </div>
                  <div className="form-group message-btn">
                    <button className="thm-btn" data-text="Submit Now +" type="submit" data-loading-text="Please wait...">
                      <span className="fas fa-arrow-right" />
                      Submit Now
                    </button>
                  </div>
                  <div className="result" />
                </form>
              </div>
              <div className="sidebar-contact-info">
                <h4>Contact Info</h4>
                <ul className="list-unstyled">
                  <li>
                    <span className="icon-pin" /> Plot No 353/2324, Squre, Kolathia, Khandagiri,
                    Bhubaneswar, Odisha 751019, India
                  </li>
                  <li>
                    <span className="icon-phone-call" />
                    <a href="tel:+919090050151">+91 9090050151</a>
                  </li>
                  <li>
                    <span className="icon-email" />
                    <a href="mailto:Info@waytohealthcare.com">Info@waytohealthcare.com</a>
                  </li>
                </ul>
              </div>
              <div className="thm-social-link1">
                <ul className="social-box list-unstyled">
                  <li>
                    <a href="#"><i className="icon-facebook-app-symbol" aria-hidden="true" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon-twitter" aria-hidden="true" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon-linkedin" aria-hidden="true" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="icon-instagram" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End sidebar widget content */}
  <FloatingSupport />
      <div className="page-wrapper">
    <SiteHeader />
    {/*Banner Two Start*/}
    <section className="banner-two">
      <div className="banner-two__bg" style={{backgroundImage: 'url(assets/images/shapes/banner-one-shape-bg.jpg)'}}>
      </div>
      <div className="shape2 float-bob-y">
        <span className="icon-heart" />
      </div>
      <div className="shape3 float-bob-x3">
        <span className="icon-brain" />
      </div>
      <div className="shape4 float-bob-y">
        <span className="icon-medicine" />
      </div>
      <div className="container">
        <div className="banner-two__inner">
          <div className="banner-two__content">
            <h2>Medical Is a Field <br /> That Encompasses <br /> The <span>Study Life</span></h2>
            <p>At Mediplace we believe healthcare should be accessible, compassionate, and
              personalized. <br /> Our team of experienced doctors, nurses, and specialists.</p>
            {/* <div class="banner-two__content-btn">
                      <a href="appointment.html" class="thm-btn">
                          <span class="fas fa-arrow-right"></span>
                          Appointment
                      </a>
                      <a href="contact.html" class="thm-btn">
                          <span class="fas fa-arrow-right"></span>
                          Contact Us
                      </a>
                  </div> */}
          </div>
          <div className="banner-two__img-box">
            <div className="banner-two__progress float-bob-y">
              <BannerProgressAndCount showCount={false} />
              <div className="banner-two__progress-content">
                <div className="text-box">
                  <p>Successfully <br /> diagnosis</p>
                </div>
                <div className="btn-box">
                  <a href="about-v-3.html"><i className="fa fa-arrow-right" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="shape1 rotate-me" />
            <div className="banner-two__img">
              <img src="/assets/images/resources/banner-v2-img1.jpg" alt="" />
            </div>
            <div className="banner-two__patient-recovers float-bob-x3">
              <ul className="banner-two__patient-recovers-list">
                <li>
                  <div className="banner-two__patient-recovers-img">
                    <img src="/assets/images/resources/banner-v2-img2.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="banner-two__patient-recovers-img">
                    <img src="/assets/images/resources/banner-v2-img3.jpg" alt="" />
                  </div>
                </li>
                <li>
                  <div className="banner-two__patient-recovers-img">
                    <img src="/assets/images/resources/banner-v2-img4.jpg" alt="" />
                  </div>
                </li>
              </ul>
              <BannerProgressAndCount showProgress={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Banner Two End*/}
    {/* Start Appointment Three */}
    <section className="appointment-three">
      <div className="appointment-three__gradient-bg" />
      <div className="container">
        <div className="appointment-three__inner">
          <div className="row">
            <div className="col-xl-6">
              <div className="appointment-three__content">
                <div className="section-title text-left sec-title-animation animation-style1">
                  <div className="section-title__tagline-box">
                    <span className="icon-tooth" />
                    <p className="section-title__tagline">Appointment</p>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Book An <span>Appointment</span>
                  </h2>
                </div>
                <div className="appointment-three__content-text">
                  <p>
                    Initial Examination
                    Your dentist or hygienist will examine your teeth, gums, and mouth for signs of
                    decay, gum disease, or other issues.
                  </p>
                </div>
                <div className="appointment-three__content-list">
                  <ul className="list-unstyled">
                    <li>
                      <div className="icon">
                        <i className="icon-phone-call" />
                      </div>
                      <div className="text">
                        <p>Hot Line Number</p>
                        <h4><a href="tel:+919090050151"> (+91) 9090050151</a></h4>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon-email" />
                      </div>
                      <div className="text">
                        <p>Email</p>
                        <h4>
                          <a href="mailto:Info@waytohealthcare.com">Info@waytohealthcare.com</a>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="appointment-three__form">
                <form id="appointment-three__form" className="contact-form-validated" action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/assets/inc/sendemail.php" method="POST" noValidate="novalidate">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <input type="text" name="name" placeholder="Your Name" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <input type="text" placeholder="Phone No" name="phone" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <input type="email" name="email" placeholder="Your Email" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <div className="select-box clearfix">
                          <select className="wide">
                            <option data-display="Select Services">
                              Select Services
                            </option>
                            <option value={1}>Miror Surgery</option>
                            <option value={2}>Dental Implan</option>
                            <option value={3}>Teeth Cleaning</option>
                            <option value={4}>Tooth Extraction</option>
                            <option value={5}>Dental Fillings</option>
                            <option value={6}>Endodontics</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <input type="text" placeholder="MM/DD/YYYY" name="date" id="datepicker" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="appointment-three__input">
                        <div className="select-box clearfix">
                          <input type="text" name="time" placeholder="0:00 am/pm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="appointment-three__btn">
                    <button type="submit" className="thm-btn">
                      <span className="fas fa-arrow-right" />
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Appointment One */}
    <section className="lt-section">
      <div className="container">
        <div className="lt-who-wrap">
          <div className="lt-who-media">
            <video autoPlay muted loop playsInline controls>
              <source src="/assets/images/video/Family-Health-Support.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lt-who-content">
            <span className="lt-tag">Who We Are</span>
            <h2 className="lt-title">Crafting Healthier Lives at L.T Way to Healthcare!</h2>
            <p className="lt-subtext">We connect consultations, rehabilitation, home-based support, and
              emergency pathways in one dependable care network.</p>
            <p className="mt-3">Our mission is to make quality care more accessible for patients and families
              who need responsive support after discharge, during rehabilitation, or while managing
              ongoing conditions.</p>
            <p className="mt-3">From OPD guidance to IPD coordination and home healthcare, we focus on practical
              continuity of care so every recovery journey feels supported from start to finish.</p>
            <a href="#" className="thm-btn mt-4"><span className="fas fa-arrow-right" /> Discover More</a>
          </div>
        </div>
      </div>
    </section>
    {/* Why Choose Us */}
    <section className="lt-section lt-why-section">
      <div className="container text-center">
        <span className="lt-tag">Why Choose Us</span>
        <h2 className="lt-title">We are dedicated to delivering<br />top-notch holistic healthcare</h2>
        <p className="lt-subtext">This section carries the trust-building rhythm of the source template while using
          your brand message and services.</p>
        <div className="row lt-why-grid mt-5">
          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="lt-card">
              {/* <div class="lt-icon"><i class="fas fa-briefcase-medical"></i></div> */}
              <div className="lt-icon"><img src="/assets/images/icon/healthcare.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
              <h4>Comprehensive Care</h4>
              <p>From consultation to recovery, we support patients across OPD, IPD, home care, and rehab.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="lt-card">
              <div className="lt-icon"><img src="/assets/images/icon/nurse.png" alt="Expert Healthcare" style={{height: 50, width: 50}} /></div>
              <h4>Expert Healthcare</h4>
              <p>Verified doctors, trained nursing teams, and practical coordination support every case.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="lt-card">
              <div className="lt-icon"><img src="/assets/images/icon/holistic-health.png" alt="Holistic Wellness" style={{height: 50, width: 50}} /></div>
              <h4>Holistic Wellness</h4>
              <p>Our model combines treatment access, rehab continuity, and family-friendly care planning.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 mb-4">
            <div className="lt-card">
              <div className="lt-icon"><img src="/assets/images/icon/handshake.png" alt="Holistic Wellness" style={{height: 50, width: 50}} /></div>
              <h4>Community Trust</h4>
              <p>We focus on responsive communication, transparent support, and long-term patient
                relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Why Choose Us */}
    {/* Our Services */}
    <section className="lt-section">
      <div className="container">
        <div className="lt-services-header">
          <div>
            <span className="lt-tag">Our Services</span>
            <h3 className="lt-title">Nourish Your Health Journey<br />with our Cutting-Edge Clinic Solutions</h3>
            <p className="lt-subtext">A service mix inspired by the home template, adapted for the
              WayToHealthcare care network.</p>
          </div>
          <div className="lt-nav">
            <button className="nav-btn lt-services-prev" type="button"><i className="fas fa-arrow-left" /></button>
            <button className="nav-btn active lt-services-next" type="button"><i className="fas fa-arrow-right" /></button>
          </div>
        </div>
        <div className="swiper lt-services-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="lt-card lt-service-card">
                <div className="lt-thumb"><img src="/assets/images/lt/Critical-Care.webp" alt="Emergency Critical Care" /></div>
                <div className="lt-service-content">
                  <p className="lt-eyebrow">Home Healthcare Services</p>
                  <h4>Emergency Critical Care</h4>
                  <p>Rapid response nursing, ICU coordination, and monitored support for high-risk
                    recovery at home or partner facilities.</p>
                  <a href="#" className="lt-link">Learn More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="lt-card lt-service-card">
                <div className="lt-thumb"><img src="/assets/images/lt/AIRPORT-CHHAK-BBSR.webp" alt="Home Nursing" /></div>
                <div className="lt-service-content">
                  <p className="lt-eyebrow">Home Healthcare Services</p>
                  <h4>Home Nursing</h4>
                  <p>Our team of compassionate and skilled nurses is dedicated to providing
                    personalized care in the comfort of your home, ensuring that your health needs
                    are met with professional support and attention, every step of the way.</p>
                  <a href="#" className="lt-link">Learn More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="lt-card lt-service-card">
                <div className="lt-thumb"><img src="/assets/images/lt/Physiotherapy.webp" alt="Physiotherapy" /></div>
                <div className="lt-service-content">
                  <p className="lt-eyebrow">Home Healthcare Services</p>
                  <h4>Physiotherapy</h4>
                  <p>Whether you're recovering from an injury, managing a chronic condition, or aiming
                    to enhance your physical performance, our dedicated team is here to support you
                    with personalized care and expert guidance every step of the way.</p>
                  <a href="#" className="lt-link">Learn More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="lt-card lt-service-card">
                <div className="lt-thumb"><img src="/assets/images/lt/Ortho.webp" alt="Elder Care Attendant" />
                </div>
                <div className="lt-service-content">
                  <p className="lt-eyebrow">Support Care Services</p>
                  <h4>Ortho Consultation</h4>
                  <p>We understand the significant impact orthopedic conditions can have on your
                    mobility, independence, and overall quality of life, which is why our
                    specialized team is dedicated to providing the care and support you need.</p>
                  <a href="#" className="lt-link">Learn More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="lt-card lt-service-card">
                <div className="lt-thumb"><img src="/assets/images/lt/Post_Operation.webp" alt="Home ICU Setup" /></div>
                <div className="lt-service-content">
                  <p className="lt-eyebrow">Advanced Home Support</p>
                  <h4>Post Surgery Care</h4>
                  <p>Post-surgery care is crucial for a smooth recovery and optimal results. Our
                    dedicated team provides personalized support, guidance, and resources to help
                    you regain your strength and return to your daily activities with confidence.
                  </p>
                  <a href="#" className="lt-link">Learn More <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Our Services */}
    {/*Process Two Start */}
    <section className="process-two">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="icon-pharmacy" />
            <p className="section-title__tagline">Our Process</p>
          </div>
          <h2 className="section-title__title title-animation">Simple Steps to <span>Quality Care</span> </h2>
        </div>
        <ul className="row">
          {/*Process Two Single Start */}
          <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
            <div className="process-two__single">
              <div className="process-two__img-box">
                <div className="process-two__img">
                  <img src="/assets/images/resources/process-two-1-1.jpg" alt="" />
                </div>
                <div className="process-two__count" />
              </div>
              <div className="process-two__content">
                <h3 className="process-two__title">Treatment Procedure</h3>
                <p className="process-two__text">Our dental care process is designed
                  to ensure comfort, efficiency, &amp;
                  the best outcomes ..</p>
              </div>
            </div>
          </li>
          {/*Process Two Single End */}
          {/*Process Two Single Start */}
          <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="200ms">
            <div className="process-two__single">
              <div className="process-two__img-box">
                <div className="process-two__img">
                  <img src="/assets/images/resources/process-two-1-2.jpg" alt="" />
                </div>
                <div className="process-two__count" />
              </div>
              <div className="process-two__content">
                <h3 className="process-two__title">Patient Registration</h3>
                <p className="process-two__text">Our dental care process is designed
                  to ensure comfort, efficiency, &amp;
                  the best outcomes ..</p>
              </div>
            </div>
          </li>
          {/*Process Two Single End */}
          {/*Process Two Single Start */}
          <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="process-two__single">
              <div className="process-two__img-box">
                <div className="process-two__img">
                  <img src="/assets/images/resources/process-two-1-3.jpg" alt="" />
                </div>
                <div className="process-two__count" />
              </div>
              <div className="process-two__content">
                <h3 className="process-two__title">Doctor Consultation</h3>
                <p className="process-two__text">Our dental care process is designed
                  to ensure comfort, efficiency, &amp;
                  the best outcomes ..</p>
              </div>
            </div>
          </li>
          {/*Process Two Single End */}
          {/*Process Two Single Start */}
          <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay="400ms">
            <div className="process-two__single">
              <div className="process-two__img-box">
                <div className="process-two__img">
                  <img src="/assets/images/resources/process-two-1-4.jpg" alt="" />
                </div>
                <div className="process-two__count" />
              </div>
              <div className="process-two__content">
                <h3 className="process-two__title">Initial Assessment</h3>
                <p className="process-two__text">Our dental care process is designed
                  to ensure comfort, efficiency, &amp;
                  the best outcomes ..</p>
              </div>
            </div>
          </li>
          {/*Process Two Single End */}
        </ul>
      </div>
    </section>
    {/*Process Two End */}
    {/*Appointment Two Start*/}
    <section className="appointment-two">
      <div className="appointment-two__shape-1">
        <img src="/assets/images/shapes/appointment-two-shape-1.png" alt="" />
      </div>
      <div className="appointment-two__shape-2">
        <img src="/assets/images/shapes/appointment-two-shape-2.png" alt="" />
      </div>
      <div className="appointment-two__shape-3" />
      <div className="appointment-two__shape-4" />
      <div className="appointment-two__shape-5" />
      <div className="appointment-two__shape-6" />
      <div className="container">
        <div className="appointment-two__inner">
          <div className="row">
            <div className="col-xl-6" />
            <div className="col-xl-6">
              <div className="appointment-two__form-box">
                <h3 className="appointment-two__title">Book Appointment</h3>
                <form className="contact-form-validated appointment-two__form" action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/assets/inc/sendemail.php" method="post" noValidate="novalidate">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="appointment-two__input-title">Full Name *</h4>
                      <div className="appointment-two__input-box">
                        <input type="text" name="name" placeholder="Jordan Walk" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="appointment-two__input-title">Your Email *</h4>
                      <div className="appointment-two__input-box">
                        <input type="email" name="email" placeholder="jordan@domain.com" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="appointment-two__input-title">Subjects *</h4>
                      <div className="appointment-two__input-box">
                        <input type="text" name="subject" placeholder="Write your subject" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <h4 className="appointment-two__input-title">Contact Number *</h4>
                      <div className="appointment-two__input-box">
                        <input type="text" name="phone" placeholder="Your Phone" required aria-required="true" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <h4 className="appointment-two__input-title">Message *</h4>
                      <div className="appointment-two__input-box text-message-box">
                        <textarea name="message" placeholder="Type your message" defaultValue={""} />
                      </div>
                      <div className="appointment-two__btn-box">
                        <button type="submit" className="thm-btn">
                          <span className="fas fa-arrow-right" />
                          SEND Message
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="result" />
                </form>
              </div>
            </div>
          </div>
          <div className="appointment-two__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
            <img src="/assets/images/resources/appointment-two-img-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/*Appointment Two One*/}
    {/*Benefits One start*/}
    <section className="lt-section alt benefits-one">
      <div className="container">
        <div className="lt-benefits-replacement">
          <div className="lt-services-header">
            <div>
              <span className="lt-tag">Benefits You Can Trust</span>
              <h2 className="lt-title">Clinics offer a clean &amp; safe <br /><span>healing Environment</span></h2>
              <p className="lt-subtext">A coordinated, patient-first support flow with modern diagnostics and
                responsive care specialists.</p>
            </div>
            <div className="lt-nav">
              <button className="nav-btn lt-benefits-prev" type="button"><i className="fas fa-arrow-left" /></button>
              <button className="nav-btn active lt-benefits-next" type="button"><i className="fas fa-arrow-right" /></button>
            </div>
          </div>
          <div className="swiper lt-benefits-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="lt-card lt-service-card">
                  <div className="lt-thumb"><img src="/assets/images/lt/Post_Operation.webp" alt="Angioplasty" /></div>
                  <div className="lt-service-content">
                    <p className="lt-eyebrow">Specialist Consultations</p>
                    <h4>Angioplasty</h4>
                    <p>Support that keeps your care journey coordinated and comfortable.</p>
                    <ul className="lt-benefits-points">
                      <li><i className="fas fa-check" /><span>Modern diagnostic and lab
                          facilities.</span></li>
                      <li><i className="fas fa-check" /><span>Quick and easy appointment
                          booking.</span></li>
                      <li><i className="fas fa-check" /><span>Clean and safe environment.</span>
                      </li>
                      <li><i className="fas fa-check" /><span>Personalized treatment plans.</span>
                      </li>
                    </ul>
                    <a href="medicine-and-health.html" className="lt-link">View All More <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="lt-card lt-service-card">
                  <div className="lt-thumb"><img src="/assets/images/lt/Ortho.webp" alt="Dermatology" />
                  </div>
                  <div className="lt-service-content">
                    <p className="lt-eyebrow">Specialist Consultations</p>
                    <h4>Dermatology</h4>
                    <p>Clear guidance and coordinated follow-up for skin-related concerns.</p>
                    <ul className="lt-benefits-points">
                      <li><i className="fas fa-check" /><span>Modern diagnostic and lab
                          facilities.</span></li>
                      <li><i className="fas fa-check" /><span>Quick and easy appointment
                          booking.</span></li>
                      <li><i className="fas fa-check" /><span>Clean and safe environment.</span>
                      </li>
                      <li><i className="fas fa-check" /><span>Friendly and helpful staff.</span>
                      </li>
                    </ul>
                    <a href="medicine-and-health.html" className="lt-link">View All More <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="lt-card lt-service-card">
                  <div className="lt-thumb"><img src="/assets/images/lt/healthcare.png" alt="Women’s Health" /></div>
                  <div className="lt-service-content">
                    <p className="lt-eyebrow">Specialist Consultations</p>
                    <h4>Women’s Health</h4>
                    <p>Family-friendly healthcare coordination focused on your comfort.</p>
                    <ul className="lt-benefits-points">
                      <li><i className="fas fa-check" /><span>Modern diagnostic and lab
                          facilities.</span></li>
                      <li><i className="fas fa-check" /><span>Quick and easy appointment
                          booking.</span></li>
                      <li><i className="fas fa-check" /><span>Clean and safe environment.</span>
                      </li>
                      <li><i className="fas fa-check" /><span>Personalized treatment plans.</span>
                      </li>
                    </ul>
                    <a href="medicine-and-health.html" className="lt-link">View All More <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="lt-card lt-service-card">
                  <div className="lt-thumb"><img src="/assets/images/lt/Physiotherapy.webp" alt="Physiotherapy" /></div>
                  <div className="lt-service-content">
                    <p className="lt-eyebrow">Specialist Consultations</p>
                    <h4>Physiotherapy</h4>
                    <p>Rehab continuity with responsive support from specialists.</p>
                    <ul className="lt-benefits-points">
                      <li><i className="fas fa-check" /><span>Modern diagnostic and lab
                          facilities.</span></li>
                      <li><i className="fas fa-check" /><span>Quick and easy appointment
                          booking.</span></li>
                      <li><i className="fas fa-check" /><span>Friendly and helpful staff.</span>
                      </li>
                      <li><i className="fas fa-check" /><span>Personalized treatment plans.</span>
                      </li>
                    </ul>
                    <a href="medicine-and-health.html" className="lt-link">View All More <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="lt-card lt-service-card">
                  <div className="lt-thumb"><img src="/assets/images/lt/Critical-Care.webp" alt="Cardiology" /></div>
                  <div className="lt-service-content">
                    <p className="lt-eyebrow">Specialist Consultations</p>
                    <h4>Cardiology</h4>
                    <p>Coordinated consultations that help you plan next steps with confidence.</p>
                    <ul className="lt-benefits-points">
                      <li><i className="fas fa-check" /><span>Modern diagnostic and lab
                          facilities.</span></li>
                      <li><i className="fas fa-check" /><span>Quick and easy appointment
                          booking.</span></li>
                      <li><i className="fas fa-check" /><span>Clean and safe environment.</span>
                      </li>
                      <li><i className="fas fa-check" /><span>Personalized treatment plans.</span>
                      </li>
                    </ul>
                    <a href="medicine-and-health.html" className="lt-link">View All More <i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-title text-left sec-title-animation animation-style2">
          <div className="section-title__tagline-box">
            <span className="icon-pharmacy" />
            <p className="section-title__tagline">Benefits You Can Trust</p>
          </div>
          <h2 className="section-title__title title-animation">Clinics offer a clean &amp; safe <br /> friendly
            <span>healing
              Environment</span>
          </h2>
        </div>
        <div className="benefits-one__inner">
          <div className="benefits-one__main-tab-box tabs-box">
            <div className="benefits-one__tab-buttons-box">
              <ul className="tab-buttons list-unstyled">
                <li
                  data-tab="#angioplasty"
                  className={`tab-btn ${activeBenefitTab === "angioplasty" ? "active-btn" : ""}`}
                  onClick={() => setActiveBenefitTab("angioplasty")}
                  onMouseEnter={() => setActiveBenefitTab("angioplasty")}
                >
                  <div className="benefits-one__tab-buttons-single">
                    <div className="lt-icon"><img src="/assets/images/icon/angioplasty.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
                    <span>Angioplasty</span>
                  </div>
                </li>
                <li
                  data-tab="#dermatology"
                  className={`tab-btn ${activeBenefitTab === "dermatology" ? "active-btn" : ""}`}
                  onClick={() => setActiveBenefitTab("dermatology")}
                  onMouseEnter={() => setActiveBenefitTab("dermatology")}
                >
                  <div className="benefits-one__tab-buttons-single">
                    <div className="lt-icon"><img src="/assets/images/icon/dermatology.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
                    <span>Dermatology</span>
                  </div>
                </li>
                <li
                  data-tab="#w-health"
                  className={`tab-btn ${activeBenefitTab === "w-health" ? "active-btn" : ""}`}
                  onClick={() => setActiveBenefitTab("w-health")}
                  onMouseEnter={() => setActiveBenefitTab("w-health")}
                >
                  <div className="benefits-one__tab-buttons-single">
                    <div className="lt-icon"><img src="/assets/images/icon/prenatal-care.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
                    <span>Women’s Health</span>
                  </div>
                </li>
                <li
                  data-tab="#physiotherapy"
                  className={`tab-btn ${activeBenefitTab === "physiotherapy" ? "active-btn" : ""}`}
                  onClick={() => setActiveBenefitTab("physiotherapy")}
                  onMouseEnter={() => setActiveBenefitTab("physiotherapy")}
                >
                  <div className="benefits-one__tab-buttons-single">
                    <div className="lt-icon"><img src="/assets/images/icon/physical-therapy.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
                    <span>Physiotherapy</span>
                  </div>
                </li>
                <li
                  data-tab="#cardiology"
                  className={`tab-btn ${activeBenefitTab === "cardiology" ? "active-btn" : ""}`}
                  onClick={() => setActiveBenefitTab("cardiology")}
                  onMouseEnter={() => setActiveBenefitTab("cardiology")}
                >
                  <div className="benefits-one__tab-buttons-single">
                    <div className="lt-icon"><img src="/assets/images/icon/healthcare.png" alt="Comprehensive Care" style={{height: 50, width: 50}} /></div>
                    <span>Cardiology</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tabs-content">
              <div className={`tab ${activeBenefitTab === "angioplasty" ? "active-tab" : ""}`} id="angioplasty">
                <div className="benefits-one__content-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-left">
                        <div className="benefits-one__content-img-box">
                          <div className="benefits-one__content-img">
                            <img src="/assets/images/lt/Angioplasty.png" alt="Angioplasty support" />
                          </div>
                          <div className="benefits-one__content-small-img">
                            <img src="/assets/images/resources/benefit-one-small-img-1-1.jpg" alt="Cardiology icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-right">
                        <h4 className="benefits-one__content-right-title">Advanced Cardiac Support
                        </h4>
                        <div className="benefits-one__content-right-outer">
                          <p className="benefits-one__content-right-text">We are
                            committed to delivering high-quality, compassionate
                            healthcare through a team of experienced doctors and
                            staff. Our facility is equipped with modern
                            technology to ensure accurate diagnosis &amp; effective
                            treatment. Whether it's a routine check-up or
                            emergency care, we provide reliable and personalized
                            service that patients can trust.</p>
                          <div className="benefits-one__points-box">
                            <ul className="benefits-one__points">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Modern diagnostic and lab facilities.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Quick and easy appointment booking.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>24/7 emergency medical services.</p>
                                </div>
                              </li>
                            </ul>
                            <ul className="benefits-one__points benefits-one__points--two">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Clean and safe environment.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Friendly and helpful staff.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Personalized treatment plans.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="benefits-one__btn">
                            <a href="medicine-and-health.html" className="thm-btn">
                              <span className="fas fa-arrow-right" />
                              View All More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${activeBenefitTab === "dermatology" ? "active-tab" : ""}`} id="dermatology">
                <div className="benefits-one__content-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-left">
                        <div className="benefits-one__content-img-box">
                          <div className="benefits-one__content-img">
                            <img src="/assets/images/lt/Dermatology.png" alt="Dermatology support" />
                          </div>
                          <div className="benefits-one__content-small-img">
                            <img src="/assets/images/resources/benefit-one-small-img-1-1.jpg" alt="Cardiology icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-right">
                        <h4 className="benefits-one__content-right-title">Comfortable Skin Care
                          Access
                        </h4>
                        <div className="benefits-one__content-right-outer">
                          <p className="benefits-one__content-right-text">We are
                            committed to delivering high-quality, compassionate
                            healthcare through a team of experienced doctors and
                            staff. Our facility is equipped with modern
                            technology to ensure accurate diagnosis &amp; effective
                            treatment. Whether it's a routine check-up or
                            emergency care, we provide reliable and personalized
                            service that patients can trust.</p>
                          <div className="benefits-one__points-box">
                            <ul className="benefits-one__points">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Modern diagnostic and lab facilities.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Quick and easy appointment booking.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>24/7 emergency medical services.</p>
                                </div>
                              </li>
                            </ul>
                            <ul className="benefits-one__points benefits-one__points--two">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Clean and safe environment.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Friendly and helpful staff.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Personalized treatment plans.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="benefits-one__btn">
                            <a href="medicine-and-health.html" className="thm-btn">
                              <span className="fas fa-arrow-right" />
                              View All More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${activeBenefitTab === "w-health" ? "active-tab" : ""}`} id="w-health">
                <div className="benefits-one__content-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-left">
                        <div className="benefits-one__content-img-box">
                          <div className="benefits-one__content-img">
                            <img src="/assets/images/lt/AIRPORT-CHHAK-BBSR.webp" alt="Women's health support" />
                          </div>
                          <div className="benefits-one__content-small-img">
                            <img src="/assets/images/resources/benefit-one-small-img-1-1.jpg" alt="Cardiology icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-right">
                        <h4 className="benefits-one__content-right-title">Holistic Women’s Support
                        </h4>
                        <div className="benefits-one__content-right-outer">
                          <p className="benefits-one__content-right-text">We are
                            committed to delivering high-quality, compassionate
                            healthcare through a team of experienced doctors and
                            staff. Our facility is equipped with modern
                            technology to ensure accurate diagnosis &amp; effective
                            treatment. Whether it's a routine check-up or
                            emergency care, we provide reliable and personalized
                            service that patients can trust.</p>
                          <div className="benefits-one__points-box">
                            <ul className="benefits-one__points">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Modern diagnostic and lab facilities.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Quick and easy appointment booking.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>24/7 emergency medical services.</p>
                                </div>
                              </li>
                            </ul>
                            <ul className="benefits-one__points benefits-one__points--two">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Clean and safe environment.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Friendly and helpful staff.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Personalized treatment plans.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="benefits-one__btn">
                            <a href="medicine-and-health.html" className="thm-btn">
                              <span className="fas fa-arrow-right" />
                              View All More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${activeBenefitTab === "physiotherapy" ? "active-tab" : ""}`} id="physiotherapy">
                <div className="benefits-one__content-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-left">
                        <div className="benefits-one__content-img-box">
                          <div className="benefits-one__content-img">
                            <img src="/assets/images/lt/Physiotherapy.png" alt="Physiotherapy support" />
                          </div>
                          <div className="benefits-one__content-small-img">
                            <img src="/assets/images/resources/benefit-one-small-img-1-1.jpg" alt="Cardiology icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-right">
                        <h4 className="benefits-one__content-right-title">Guided Rehab Recovery
                        </h4>
                        <div className="benefits-one__content-right-outer">
                          <p className="benefits-one__content-right-text">We are
                            committed to delivering high-quality, compassionate
                            healthcare through a team of experienced doctors and
                            staff. Our facility is equipped with modern
                            technology to ensure accurate diagnosis &amp; effective
                            treatment. Whether it's a routine check-up or
                            emergency care, we provide reliable and personalized
                            service that patients can trust.</p>
                          <div className="benefits-one__points-box">
                            <ul className="benefits-one__points">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Modern diagnostic and lab facilities.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Quick and easy appointment booking.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>24/7 emergency medical services.</p>
                                </div>
                              </li>
                            </ul>
                            <ul className="benefits-one__points benefits-one__points--two">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Clean and safe environment.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Friendly and helpful staff.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Personalized treatment plans.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="benefits-one__btn">
                            <a href="medicine-and-health.html" className="thm-btn">
                              <span className="fas fa-arrow-right" />
                              View All More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab ${activeBenefitTab === "cardiology" ? "active-tab" : ""}`} id="cardiology">
                <div className="benefits-one__content-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-left">
                        <div className="benefits-one__content-img-box">
                          <div className="benefits-one__content-img">
                            <img src="/assets/images/lt/Cardiology.png" alt="Cardiology consultation" />
                          </div>
                          <div className="benefits-one__content-small-img">
                            <img src="/assets/images/resources/benefit-one-small-img-1-1.jpg" alt="Cardiology icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="benefits-one__content-right">
                        <h4 className="benefits-one__content-right-title">Responsive Heart Care
                        </h4>
                        <div className="benefits-one__content-right-outer">
                          <p className="benefits-one__content-right-text">We are
                            committed to delivering high-quality, compassionate
                            healthcare through a team of experienced doctors and
                            staff. Our facility is equipped with modern
                            technology to ensure accurate diagnosis &amp; effective
                            treatment. Whether it's a routine check-up or
                            emergency care, we provide reliable and personalized
                            service that patients can trust.</p>
                          <div className="benefits-one__points-box">
                            <ul className="benefits-one__points">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Modern diagnostic and lab facilities.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Quick and easy appointment booking.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>24/7 emergency medical services.</p>
                                </div>
                              </li>
                            </ul>
                            <ul className="benefits-one__points benefits-one__points--two">
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Clean and safe environment.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Friendly and helpful staff.</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="fas fa-check" />
                                </div>
                                <div className="text">
                                  <p>Personalized treatment plans.</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="benefits-one__btn">
                            <a href="medicine-and-health.html" className="thm-btn">
                              <span className="fas fa-arrow-right" />
                              View All More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Benefits One End*/}
    <section className="lt-section lt-gap-section">
      <div className="container">
        <div className="lt-services-header">
          <div>
            <span className="lt-tag">Healthcare Access</span>
            <h2 className="lt-title">Bridging India’s Healthcare Gap</h2>
            <p className="lt-subtext">Explore the key gaps in access, geography, and infrastructure through an
              interactive section tailored for your home page.</p>
          </div>
        </div>
        <div className="lt-gap-layout">
          <div className="lt-gap-cards">
            <div className="lt-card lt-gap-card is-active" data-gap-title="Healthcare Barriers" data-gap-image="assets/images/lt/Barriers.webp" data-gap-text="Patients across India still face delays caused by distance, cost, specialist shortages, and limited coordinated follow-up after treatment." data-gap-points="Delayed consultation access|Long referral chains|Limited continuity after discharge" data-gap-badge="Core Access Gap" data-gap-stat={1} data-gap-stat-label="National view">
              <div className="lt-thumb">
                <img src="/assets/images/lt/Barriers.webp" alt="Healthcare barriers" />
              </div>
              <div className="lt-service-content">
                <p className="lt-eyebrow">Access Challenge</p>
                <h4>Barriers</h4>
                <p>Understand the structural issues that slow timely treatment and recovery continuity.
                </p>
              </div>
            </div>
            <div className="lt-card lt-gap-card" data-gap-title="Rural Care Reach" data-gap-image="assets/images/lt/Rural.webp" data-gap-text="Rural families often need dependable first-contact support, transport-aware coordination, and follow-up services that continue after the hospital visit." data-gap-points="Fewer nearby specialists|Travel-heavy care journeys|Need for stronger local support" data-gap-badge="Regional Reality" data-gap-stat={2} data-gap-stat-label="Outside metros">
              <div className="lt-thumb">
                <img src="/assets/images/lt/Rural.webp" alt="Rural healthcare" />
              </div>
              <div className="lt-service-content">
                <p className="lt-eyebrow">Geographic Gap</p>
                <h4>Rural</h4>
                <p>Highlighting how distance, travel, and limited coverage change the patient journey.
                </p>
              </div>
            </div>
            <div className="lt-card lt-gap-card" data-gap-title="Urban System Pressure" data-gap-image="assets/images/lt/Urban.webp" data-gap-text="Cities may have more providers, but overloaded systems, fragmented communication, and rising demand can still prevent smooth, affordable care coordination." data-gap-points="Overcrowded facilities|Fragmented patient communication|Higher need for guided coordination" data-gap-badge="System Pressure" data-gap-stat={3} data-gap-stat-label="High-demand zones">
              <div className="lt-thumb">
                <img src="/assets/images/lt/Urban.webp" alt="Urban healthcare" />
              </div>
              <div className="lt-service-content">
                <p className="lt-eyebrow">System Pressure</p>
                <h4>Urban</h4>
                <p>Showing how density, waiting time, and fragmented systems still create healthcare
                  gaps.</p>
              </div>
            </div>
          </div>
          <div className="lt-card lt-gap-detail" id="lt-gap-detail-card">
            <div className="lt-gap-detail-media">
              <img id="lt-gap-detail-image" src="/assets/images/lt/Barriers.webp" alt="Healthcare barriers detail" />
            </div>
            <div className="lt-gap-topline">
              <div className="lt-gap-badge" id="lt-gap-detail-badge"><i className="fas fa-wave-square" /><span>Core Access Gap</span></div>
              <div className="lt-gap-stat">
                <strong id="lt-gap-detail-stat">01</strong>
                <span id="lt-gap-detail-stat-label">National view</span>
              </div>
            </div>
            <p className="lt-eyebrow">Interactive Overview</p>
            <h3 id="lt-gap-detail-title">Healthcare Barriers</h3>
            <p id="lt-gap-detail-text">Patients across India still face delays caused by distance, cost,
              specialist shortages, and limited coordinated follow-up after treatment.</p>
            <ul className="lt-gap-points" id="lt-gap-detail-points">
              <li><i className="fas fa-check" /><span>Delayed consultation access</span></li>
              <li><i className="fas fa-check" /><span>Long referral chains</span></li>
              <li><i className="fas fa-check" /><span>Limited continuity after discharge</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <section class="lt-section alt">
      <div class="container text-center">
          <span class="lt-tag">Testimonials</span>
          <h2 class="lt-title">Families trust us for responsive,<br>practical healthcare coordination</h2>
          <p class="lt-subtext">A simplified testimonial slider that preserves the carousel feel used throughout
              the original template.</p>
          <div class="swiper lt-testimonial-slider">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <div class="lt-testimonial-card text-left">
                          <div>
                              <div class="lt-quote-icon"><i class="fas fa-quote-left"></i></div>
                              <p class="lt-quote">Impressed by the professionalism and attention to detail.</p>
                          </div>
                          <div class="lt-testimonial-author">
                              <img src="/assets/images/resources/banner-v2-img2.jpg" alt="Amit">
                              <div>
                                  <h4 class="lt-author">Amit P.</h4>
                                  <p class="lt-role">@amitp</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="lt-testimonial-card text-left">
                          <div>
                              <div class="lt-quote-icon"><i class="fas fa-quote-left"></i></div>
                              <p class="lt-quote">A seamless experience from start to finish. Highly recommend!</p>
                          </div>
                          <div class="lt-testimonial-author">
                              <img src="/assets/images/resources/banner-v2-img3.jpg" alt="Sneha">
                              <div>
                                  <h4 class="lt-author">Sneha R.</h4>
                                  <p class="lt-role">@snehar</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="lt-testimonial-card text-left">
                          <div>
                              <div class="lt-quote-icon"><i class="fas fa-quote-left"></i></div>
                              <p class="lt-quote">Reliable and trustworthy. Made my life so much easier!</p>
                          </div>
                          <div class="lt-testimonial-author">
                              <img src="/assets/images/resources/banner-v2-img4.jpg" alt="Rohan">
                              <div>
                                  <h4 class="lt-author">Rohan D.</h4>
                                  <p class="lt-role">@rohand</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="lt-testimonial-pagination"></div>
          </div>
      </div>
  </section> */}
    {/* Testimonial One Start */}
    <section className="testimonial-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="icon-tooth" />
            <p className="section-title__tagline">Testimonials</p>
          </div>
          <h2 className="section-title__title title-animation">Families trust us for responsive,<br />practical
            healthcare coordination</h2>
        </div>
        <div className="testimonial-one__carousel swiper">
          <div className="swiper-wrapper">
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img1.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Thomas
                      Alison</a></h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img2.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Thomas
                      Ocen</a></h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img3.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Adam Milne</a>
                  </h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img4.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Henry Nicol</a>
                  </h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img5.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Devon
                      Thomas</a></h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img6.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Jennifer
                      Lew</a></h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img7.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Roksana Axe</a>
                  </h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img8.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Nence Brown</a>
                  </h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          {/* Testimonial Two Single Start */}
          <div className="item swiper-slide">
            <div className="testimonial-one__single">
              <div className="testimonial-one__single-inner">
                <div className="testimonial-one__star">
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <p className="testimonial-one__text">Absolutely fantastic experience! The team exceeded our
                  expectations and delivered a solution that perfectly met our needs. Their attention
                  to
                  detail and commitment to quality is unmatched.</p>
              </div>
              <div className="testimonial-one__client-info">
                <div className="testimonial-one__client-img">
                  <img src="/assets/images/testimonial/testimonial-v1-img9.jpg" alt="" />
                </div>
                <div className="testimonial-one__client-content">
                  <h4 className="testimonial-one__client-name"><a href="testimonials.html">Micle Bough</a>
                  </h4>
                  <p className="testimonial-one__sub-title">UI/UX Designer</p>
                </div>
              </div>
              <div className="testimonial-one__quote">
                <span className="fa fa-quote-right" />
              </div>
            </div>
          </div>
          {/* Testimonial Two Single End */}
          </div>
        </div>
        <div className="testimonial-one__pagination" />
      </div>
    </section>
    {/* Testimonial Two End */}
    <section className="lt-section alt1">
      <div className="container">
        <div className="lt-blog-head">
          <div>
            <span className="lt-tag">Latest Blog</span>
            <h2 className="lt-title">Fresh healthcare insights,<br />recovery tips, and patient-first updates</h2>
          </div>
          <a href="#" className="lt-ghost-btn">View All Posts</a>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="lt-card lt-blog-card">
              <div className="lt-thumb" />
              <div className="lt-blog-content">
                <p className="lt-blog-meta"><i className="far fa-calendar-alt" /> April 16, 2026</p>
                <h4>Trusted by Patients and Families for Reliable Home Healthcare</h4>
                <p>How coordinated nursing, rehab, and follow-up support create a safer recovery journey
                  outside the hospital.</p>
                <a href="#" className="lt-link">Read More <i className="fas fa-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="lt-card lt-blog-card">
              <div className="lt-thumb" />
              <div className="lt-blog-content">
                <p className="lt-blog-meta"><i className="far fa-calendar-alt" /> April 22, 2026</p>
                <h4>Understanding Emergency Blood Support and Coordinated Critical Care</h4>
                <p>A practical look at what families should expect from emergency support, referral
                  pathways, and rapid response planning.</p>
                <a href="#" className="lt-link">Read More <i className="fas fa-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 mb-4">
            <div className="lt-card lt-blog-card">
              <div className="lt-thumb" />
              <div className="lt-blog-content">
                <p className="lt-blog-meta"><i className="far fa-calendar-alt" /> April 28, 2026</p>
                <h4>Facing Health Barriers in India with Reach, Rehab, and Responsive Care</h4>
                <p>Why accessible consultations, rehabilitation services, and home visits are central to
                  bridging the healthcare gap.</p>
                <a href="#" className="lt-link">Read More <i className="fas fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Newsletter One Start*/}
    <NewsletterSection
      title="Stay with Us!"
      text={
        <>
          Why just buy medicine when you can earn too? Get instant
          <br />
          cashback with every prescription!
        </>
      }
    />
    {/*Newsletter One End*/}
    {/*Site Footer Three Start*/}
    <SiteFooter />
    {/*Site Footer Three End*/}
  </div>{/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image"><img src="/assets/images/resources/ltwaytohealth.webp" width={150} alt="" /></a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:Info@waytohealthcare.com">Info@waytohealthcare.com</a>
        </li>
        <li>
          <i className="fas fa-phone" />
          <a href="tel:(+91) 9090050151">(+91) 9090050151</a>
        </li>
      </ul>{/* /.mobile-nav__contact */}
      <div className="mobile-nav__top">
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-facebook-square" />
          <a href="#" className="fab fa-pinterest-p" />
          <a href="#" className="fab fa-instagram" />
        </div>{/* /.mobile-nav__social */}
      </div>{/* /.mobile-nav__top */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  {/* Search Popup */}
  <div className="search-popup">
    <div className="color-layer" />
    <button className="close-search"><span className="far fa-times fa-fw" /></button>
    <form method="post" action="https://scriptfusions.mnsithub.com/html/mediplace/main-html/blog.html">
      <div className="form-group">
        <input type="search" name="search-field" defaultValue placeholder="Search Here" required />
        <button type="submit"><i className="fas fa-search" /></button>
      </div>
    </form>
  </div>
  {/* End Search Popup */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
    <span className="scroll-to-top__text"> Go Back Top</span>
  </a>

        </>
    )
}
