"use client";

import { useState, useEffect } from "react";
import { FaCoins } from "react-icons/fa";

interface PriceCardProps {
  metal: "Gold" | "Silver";
}

const PriceCard: React.FC<PriceCardProps> = ({ metal }) => {
  const [pricePerUnit, setPricePerUnit] = useState(0);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          metal === "Gold"
            ? "https://api.gold-api.com/price/XAU"
            : "https://api.gold-api.com/price/XAG",
        );
        const data = await response.json();

        // Convert ounces to grams
        const pricePerGram = data.price / 31.1034768;

        // Convert price to INR
        const pricePerGramInINR = pricePerGram * 84; // Assuming 1 USD = ₹84

        // Calculate price per unit (10g for Gold, 1kg for Silver)
        const pricePerUnit =
          metal === "Gold" ? pricePerGramInINR * 10 : pricePerGramInINR * 1000;

        setPricePerUnit(pricePerUnit);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    const interval = setInterval(fetchPrice, 1000); // Update price every 1 seconds
    fetchPrice(); // Fetch initial price

    return () => clearInterval(interval);
  }, [metal]);

  return (
    <div className="bg-white border-2 border-golden-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-golden-700">{metal} Price</h2>
        <FaCoins className="text-4xl text-golden-500" />
      </div>
      <p className="text-3xl font-semibold mb-2 text-golden-600">
        ₹{pricePerUnit.toFixed(2)}
      </p>
      <p className="text-sm text-golden-700 mb-4">
        Per {metal === "Gold" ? "10g" : "1kg"}
      </p>
      <p className="text-xs text-golden-600">Lucknow, Uttar Pradesh, India</p>
      <div className="absolute top-0 right-0 bg-golden-100 p-2 rounded-bl-lg">
        <p className="text-xs font-semibold text-golden-700">Live Rate</p>
      </div>
    </div>
  );
};

export default PriceCard;
