"use client";

import React, { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

// Country Codes List with India as Default
export const countryCodes = [
  { code: "+91", label: "India (+91)", flag: "🇮🇳" },
  { code: "+1", label: "USA / Canada (+1)", flag: "🇺🇸" },
  { code: "+44", label: "UK (+44)", flag: "🇬🇧" },
  { code: "+971", label: "UAE (+971)", flag: "🇦🇪" },
  { code: "+61", label: "Australia (+61)", flag: "🇦🇺" },
  { code: "+65", label: "Singapore (+65)", flag: "🇸🇬" },
  { code: "+49", label: "Germany (+49)", flag: "🇩🇪" },
];

// Requirement Categories
export const requirementCategories = [
  { id: "bouquet", label: "Forever Flower Bouquet", emoji: "🌻" },
  { id: "gajra", label: "Bridal / Festive Gajra", emoji: "🌸" },
  { id: "plushie", label: "Amigurumi Plush Toy", emoji: "🧸" },
  { id: "bag", label: "Crochet Bag / Wearable", emoji: "👜" },
  { id: "bulk", label: "Bulk / Wedding Gifting", emoji: "🎁" },
  { id: "custom", label: "Custom Bespoke Idea", emoji: "✨" },
];

// Typed Zod Schema
const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (minimum 2 characters)"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address (e.g. name@example.com)"),
  countryCode: z.string().min(1, "Select country code"),
  phone: z
    .string()
    .trim()
    .refine((val) => /^\d{8,12}$/.test(val.replace(/\s+/g, "")), {
      message: "Please enter a valid mobile number (10 digits for India)",
    }),
  needType: z.string().min(1, "Please select what you need"),
  description: z
    .string()
    .trim()
    .min(10, "Please describe your vision or question (at least 10 characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    needType: requirementCategories[0].label,
    description: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactFormValues;
        fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Success flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      needType: requirementCategories[0].label,
      description: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="neu-card rounded-3xl p-6 sm:p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Header info inside form */}
            <div className="border-b border-border-subtle pb-4 mb-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mt-1">
                Fill in your details below and our artisans will get back to you promptly.
              </p>
            </div>

            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm skeuo-input placeholder:text-stone-400 text-charcoal focus:outline-none ${
                      errors.fullName
                        ? "!border-red-400 !bg-red-50/30"
                        : ""
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5"
                >
                  Email Address <span className="text-terracotta">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="e.g. ananya@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm skeuo-input placeholder:text-stone-400 text-charcoal focus:outline-none ${
                      errors.email
                        ? "!border-red-400 !bg-red-50/30"
                        : ""
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone Number with Country Code (Default India +91) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5"
              >
                Mobile Number <span className="text-terracotta">*</span>
              </label>
              <div className="flex gap-2">
                {/* Country Code Select */}
                <div className="relative shrink-0 w-32 sm:w-36">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="w-full appearance-none pl-3 pr-8 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium skeuo-input text-charcoal cursor-pointer focus:outline-none"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.flag} {item.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                </div>

                {/* Number Input */}
                <div className="relative flex-1">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      handleChange("phone", e.target.value.replace(/[^0-9]/g, ""))
                    }
                    placeholder="10-digit mobile number"
                    maxLength={12}
                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm skeuo-input placeholder:text-stone-400 text-charcoal focus:outline-none ${
                      errors.phone
                        ? "!border-red-400 !bg-red-50/30"
                        : ""
                    }`}
                  />
                </div>
              </div>
              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Row 3: What You Want / Need */}
            <div>
              <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                What You Want / Need <span className="text-terracotta">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {requirementCategories.map((cat) => {
                  const isSelected = formData.needType === cat.label;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleChange("needType", cat.label)}
                      className={`px-3 py-2 sm:py-2.5 rounded-xl text-left text-xs font-medium border flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? "skeuo-pill-active border-terracotta/40 scale-[1.01]"
                          : "skeuo-pill border-stone-200/80 text-charcoal hover:border-terracotta/40"
                      }`}
                    >
                      <span className="text-sm shrink-0">{cat.emoji}</span>
                      <span className="truncate">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-1.5"
              >
                Description / Custom Vision <span className="text-terracotta">*</span>
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe what you have in mind: preferred flower colors, occasion (wedding, anniversary, birthday), delivery timeline, or any reference ideas..."
                className={`w-full p-3.5 rounded-xl text-xs sm:text-sm skeuo-input placeholder:text-stone-400 text-charcoal focus:outline-none resize-none ${
                  errors.description
                    ? "!border-red-400 !bg-red-50/30"
                    : ""
                }`}
              />
              <div className="flex items-center justify-between mt-1 text-[11px] text-text-muted">
                {errors.description ? (
                  <span className="text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.description}
                  </span>
                ) : (
                  <span>Minimum 10 characters</span>
                )}
                <span>{formData.description.length} characters</span>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold skeuo-btn-primary cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Your Message</span>
                  </>
                )}
              </button>

              {/* Instant Instagram DM Option */}
              <a
                href="https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold skeuo-btn-secondary cursor-pointer shrink-0"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Chat on Instagram</span>
              </a>
            </div>
          </motion.form>
        ) : (
          /* Celebratory Confirmation Screen with Direct Instagram Action */
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 neu-card">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-charcoal">
              Thank You, {formData.fullName}!
            </h3>

            <p className="text-sm text-text-muted mt-2 max-w-md mx-auto leading-relaxed">
              We have received your inquiry for <strong>{formData.needType}</strong>. Our artisans in Jaipur will review your details and respond via Instagram DM or Email within 2 hours.
            </p>

            {/* Direct Instagram DM Button */}
            <div className="mt-6 w-full max-w-md p-4 rounded-2xl neu-card text-left">
              <p className="text-xs font-bold text-charcoal mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                Want an instant response?
              </p>
              <p className="text-[11px] text-text-muted mb-3">
                Send a DM directly to our artisan workshop on Instagram:
              </p>
              <a
                href="https://www.instagram.com/crochasthan?stkn=NDViNnVmaXM4N3li"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold skeuo-btn-secondary cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Chat on Instagram (@crochasthan)</span>
              </a>
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-charcoal transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Send another message</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
