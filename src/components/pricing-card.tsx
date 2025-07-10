"use client";

import Link from "next/link";
import React from "react";
import { trackPricingInteraction } from "@/lib/analytics";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  buttonColor: string; // e.g. 'from-[#EC7210] to-[#F0C244]'
  icon?: React.ReactNode;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  buttonLink,
  buttonColor,
  icon,
}) => {
  const handleButtonClick = () => {
    trackPricingInteraction(title, "get_started");
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300`}>
      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${buttonColor}`}></div>
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center gap-3 justify-center mb-2">
            {icon}
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          </div>
          <div className="text-4xl font-bold mb-2" style={{ color: (buttonColor.includes('F0C244') ? '#F0C244' : buttonColor.includes('F7931A') ? '#F7931A' : '#EC7210') }}>{price}</div>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li className="flex items-start gap-3" key={idx}>
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={buttonLink}
          className={`w-full bg-gradient-to-r ${buttonColor} text-white font-bold py-3 px-6 rounded-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300 text-center block`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}; 