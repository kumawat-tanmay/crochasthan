"use client";

import React, { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Palette, Sparkles, Phone, User, MessageSquare } from "lucide-react";

// Typed Zod Validation Schema as required by AGENTS.md
const customOrderSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name (at least 2 characters)"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  category: z.string().min(1, "Please select an item type"),
  colorTheme: z.string().min(1, "Please select a color palette"),
  budget: z.string().optional(),
  description: z.string().trim().min(10, "Please describe your custom vision in at least 10 characters"),
});

type CustomOrderFormValues = z.infer<typeof customOrderSchema>;

const craftCategories = [
  "Everlasting Bouquet",
  "Festive Hair Gajra",
  "Amigurumi Plush Toy",
  "Crochet Bag / Tote",
  "Baby Heirloom Set",
  "Home Decor / Other",
];

const colorPalettes = [
  "Rajasthani Terracotta & Warm Ecru",
  "Pastel Petals (Lilac, Rose, Cream)",
  "Royal Saffron & Marigold Gold",
  "Earthy Olive & Sage Green",
  "Custom Surprise Combination",
];

export function CustomOrderForm() {
  const [formData, setFormData] = useState<CustomOrderFormValues>({
    fullName: "",
    phone: "",
    category: craftCategories[0],
    colorTheme: colorPalettes[0],
    budget: "₹1,000 – ₹2,500",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomOrderFormValues, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof CustomOrderFormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using Zod
    const result = customOrderSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof CustomOrderFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof CustomOrderFormValues;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // Prepare WhatsApp dispatch link with detailed pre-composed order specification
    const text = `🧶 *NEW BESPOKE CROCHASTHAN COMMISSION ORDER* 🧶\n\n` +
      `*Customer:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Craft Category:* ${formData.category}\n` +
      `*Color Palette:* ${formData.colorTheme}\n` +
      `*Target Budget:* ${formData.budget || "Flexible"}\n\n` +
      `*Custom Vision & Requirements:*\n${formData.description}\n\n` +
      `_Looking forward to discussing artisan availability and timelines!_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919587428751&text=${encodeURIComponent(text)}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-md text-center"
          >
            <div className="w-14 h-14 rounded-full bg-sage-olive/15 text-sage-olive flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal">
              Commission Brief Created!
            </h3>
            <p className="mt-2 text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              We have pre-filled your custom requirements directly in WhatsApp. Our master artisan coordinator will confirm yarn availability, draft a digital swatch preview, and provide exact timelines.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-canvas-warm text-charcoal hover:bg-terracotta hover:text-white transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-white border border-border-subtle/80 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Your Full Name <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl text-sm bg-canvas-warm/50 border transition-all duration-200 outline-none focus:bg-white ${
                      errors.fullName
                        ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                        : "border-border-subtle focus:border-terracotta focus:ring-2 focus:ring-terracotta/10"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  WhatsApp Number (10 Digits) <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, ""))}
                    placeholder="e.g. 9876543210"
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl text-sm bg-canvas-warm/50 border transition-all duration-200 outline-none focus:bg-white ${
                      errors.phone
                        ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                        : "border-border-subtle focus:border-terracotta focus:ring-2 focus:ring-terracotta/10"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Craft Category */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Creation Type
                </label>
                <div className="relative">
                  <Sparkles className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl text-sm bg-canvas-warm/50 border border-border-subtle focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all cursor-pointer"
                  >
                    {craftCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Color Theme */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Color Palette
                </label>
                <div className="relative">
                  <Palette className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={formData.colorTheme}
                    onChange={(e) => handleChange("colorTheme", e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl text-sm bg-canvas-warm/50 border border-border-subtle focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all cursor-pointer"
                  >
                    {colorPalettes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-2">
                  Describe Your Vision & Occasion <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Tell us about the recipient, preferred flower types, plushie sizing, wedding dates, or any special personal details..."
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl text-sm bg-canvas-warm/50 border transition-all duration-200 outline-none focus:bg-white resize-none ${
                      errors.description
                        ? "border-red-400 focus:border-red-500 ring-2 ring-red-100"
                        : "border-border-subtle focus:border-terracotta focus:ring-2 focus:ring-terracotta/10"
                    }`}
                  />
                </div>
                {errors.description && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-border-subtle/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-text-muted text-center sm:text-left">
                Direct WhatsApp consultation • No advance payment until design approval
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-terracotta text-canvas-ecru hover:bg-terracotta-hover active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer shrink-0"
              >
                <span>Send Custom Commission</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
