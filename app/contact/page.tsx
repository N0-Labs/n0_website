"use client";

import { useState } from "react";
import Link from "next/link";

const platformTypes = [
  "UAS / Drone",
  "UGV / Ground Vehicle",
  "USV / Surface Vessel",
  "Counter-UAS",
  "Satellite / Overhead",
  "Other",
];

const roles = [
  "Engineer / Technical",
  "Product Manager",
  "Executive / Leadership",
  "Researcher / Academic",
  "Government / Defense",
  "Investor",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: "Null Labs",
    platformType: "",
    platformTypeOther: "",
    role: "",
    roleOther: "",
    email: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production this would POST to an API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, open mailto with form data
    const subject = encodeURIComponent(
      `Contact Request from ${formData.companyName}`
    );
    const platformDisplay = formData.platformType === "Other" ? `Other: ${formData.platformTypeOther}` : formData.platformType;
    const roleDisplay = formData.role === "Other" ? `Other: ${formData.roleOther}` : formData.role;
    const body = encodeURIComponent(
      `Company: ${formData.companyName}\nPlatform Type: ${platformDisplay}\nRole: ${roleDisplay}\nEmail: ${formData.email}\n\nAdditional Information:\n${formData.additionalInfo}`
    );
    window.location.href = `mailto:founders@n0labs.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-5">
        <div className="max-w-[500px] text-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-heading text-[clamp(32px,5vw,48px)] tracking-[0.04em] text-foreground mb-4">
            Thank You
          </h1>
          <p className="font-mono text-sm text-muted mb-8">
            Your email client should have opened with your information. If not,
            please email us directly at{" "}
            <a href="mailto:founders@n0labs.com" className="text-accent">
              founders@n0labs.com
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-block font-mono text-xs tracking-[0.12em] uppercase text-foreground/70 border border-line-strong px-7 py-3.5 rounded-lg transition-all duration-200 hover:text-foreground hover:border-accent/50"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-20 px-5 max-w-[600px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-muted hover:text-foreground transition-colors mb-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        <h1 className="font-heading text-[clamp(36px,6vw,56px)] leading-[0.92] tracking-[0.03em] text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="font-mono text-[clamp(13px,1.4vw,15px)] leading-[1.8] text-muted mb-12">
          Tell us about your project. We will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block font-mono text-xs tracking-[0.12em] uppercase text-foreground mb-2"
            >
              Company Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="Acme Robotics"
            />
          </div>

          {/* Platform Type */}
          <div>
            <label
              htmlFor="platformType"
              className="block font-mono text-xs tracking-[0.12em] uppercase text-foreground mb-2"
            >
              Type of Platform <span className="text-accent">*</span>
            </label>
            <select
              id="platformType"
              name="platformType"
              required
              value={formData.platformType}
              onChange={handleChange}
              className="w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "16px",
              }}
            >
              <option value="" disabled>
                Select platform type
              </option>
              {platformTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {formData.platformType === "Other" && (
              <input
                type="text"
                id="platformTypeOther"
                name="platformTypeOther"
                required
                value={formData.platformTypeOther}
                onChange={handleChange}
                className="mt-3 w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Please specify..."
              />
            )}
          </div>

          {/* Role */}
          <div>
            <label
              htmlFor="role"
              className="block font-mono text-xs tracking-[0.12em] uppercase text-foreground mb-2"
            >
              Your Role <span className="text-accent">*</span>
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "16px",
              }}
            >
              <option value="" disabled>
                Select your role
              </option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {formData.role === "Other" && (
              <input
                type="text"
                id="roleOther"
                name="roleOther"
                required
                value={formData.roleOther}
                onChange={handleChange}
                className="mt-3 w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Please specify your role..."
              />
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs tracking-[0.12em] uppercase text-foreground mb-2"
            >
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="you@company.com"
            />
          </div>

          {/* Additional Info */}
          <div>
            <label
              htmlFor="additionalInfo"
              className="block font-mono text-xs tracking-[0.12em] uppercase text-foreground mb-2"
            >
              Additional Information{" "}
              <span className="text-muted-2">(Optional)</span>
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="w-full bg-panel border border-line-strong rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              placeholder="Tell us about your project, timeline, or any specific requirements..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full font-mono text-xs font-bold tracking-[0.12em] uppercase text-background bg-accent px-7 py-4 rounded-lg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,232,150,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}
