"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer({ id, onBookDemo }) {
  return (
    <footer
      id={id}
      className="bg-slate-900 py-16 relative overflow-hidden"
      style={{ paddingBottom: "unset" }}
    >
      <div className="mx-auto relative z-10">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          style={{ width: "100%" }}
        >
          {/* Left Column */}
          <div
            className="space-y-6"
            style={{ paddingBottom: "76px", paddingLeft: "70px" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-2">
             <Link href="/">
 <img
                src="/Logos/Accuracore/accuraCore-logo.png"
                alt="AccuraCore Logo"
                className="object-contain"
                style={{ width: "100px" }}
              />
</Link>
            </div>

            {/* Description */}
            <p className="text-white text-md leading-relaxed max-w-md">
              Accuracore a complete, enterprise ready platform to manage your
              business from start to finish, absolutely free.
            </p>

            {/* Book Demo Button */}
            <Button
              className="text-white rounded-full text-sm flex items-center"
              style={{
                backgroundColor: "#0061A4",
                padding: "25px 15px",
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "/book-a-demo")}
            >
              Book Demo
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-2 h-3 ml-2"
              />
            </Button>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-[#04213f] to-[#072b4a] border-t-2 border-l-2 border-[#0061A4] rounded-tl-[30px] p-6">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                  CONTACT
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 cursor-pointer hover:text-[#0061A4]">
                    <img
                      src="/Icons/call-add.png"
                      alt="Call Icon"
                      className="w-4 h-4"
                    />
                    <span className="text-white text-sm">(877) 887-7279</span>
                  </div>
                  <div className="flex items-center space-x-3 cursor-pointer hover:text-[#0061A4]">
                    <img
                      src="/Icons/mail-at-sign-01.png"
                      alt="Mail Icon"
                      className="w-4 h-4"
                    />
                    <a
                      href="mailto:admin@accuracore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline"
                    >
                      admin@accuracore.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Parent Company (below Contact) */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                  PARENT COMPANY
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 cursor-pointer hover:text-[#0061A4]">
                    <a
                      href="https://www.sparxtech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline"
                    >
                      sparxtech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4 relative">
              <img
                src="/Icons/Spiral.png"
                alt="Spiral Background"
                className="absolute w-[350px] h-[295px] top-[-120px] right-[34%] z-20 pointer-events-none select-none"
              />

              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                FOLLOW US
              </h3>

              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/accura_core/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <img
                    src="/Icons/Instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/p/AccuraCore-61579000254667/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <img
                    src="/Icons/Facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </a>

                {/* WhatsApp (commented for now) */}
                {/*
    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
      <img
        src="/Icons/whatsapp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />
    </div>
    */}

                {/* Telegram */}
                {/* <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
      <img
        src="/Icons/telegram.svg"
        alt="Telegram"
        className="w-5 h-5"
      />
    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
