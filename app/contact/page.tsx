"use client";

import { useState } from "react";
import { ProductsNav } from "@/components/products-nav";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [platformType, setPlatformType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      domain: platformType,
      domainOther: platformType === "other"
        ? (form.elements.namedItem("domainOther") as HTMLInputElement)?.value
        : "",
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      info: (form.elements.namedItem("info") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again or email us directly.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        <ProductsNav />

        <div className="max-w-lg">
          <h1 className="text-3xl font-semibold text-text-primary mb-2 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed mb-10">
            Tell us about your project. We will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="border border-border-tertiary rounded-xl p-8 bg-background-secondary text-center">
              <p className="text-base font-semibold text-text-primary mb-1">Message received</p>
              <p className="text-sm text-text-secondary">We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Company Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Company Name <span className="text-brand">*</span>
                </label>
                <input
                  name="company"
                  type="text"
                  required
                  placeholder="Null Labs"
                  className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition"
                />
              </div>

              {/* Domain */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Domain <span className="text-brand">*</span>
                </label>
                <select
                  name="domain"
                  required
                  value={platformType}
                  onChange={(e) => setPlatformType(e.target.value)}
                  className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition appearance-none"
                >
                  <option value="" disabled className="text-text-secondary">
                    Select domain
                  </option>
                  <option value="ground">Ground — UGV</option>
                  <option value="maritime">Maritime — USV</option>
                  <option value="aerial">Aerial — UAS</option>
                  <option value="counter-uas">Counter UAS</option>
                  <option value="geospatial">Geospatial Intelligence</option>
                  <option value="space">Space</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Other domain description */}
              {platformType === "other" && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-primary">
                    Describe your domain <span className="text-brand">*</span>
                  </label>
                  <input
                    name="domainOther"
                    type="text"
                    required
                    placeholder="e.g. Underwater vehicle, space robotics..."
                    className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition"
                  />
                </div>
              )}

              {/* Role */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Your Role <span className="text-brand">*</span>
                </label>
                <select
                  name="role"
                  required
                  defaultValue=""
                  className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition appearance-none"
                >
                  <option value="" disabled className="text-text-secondary">
                    Select your role
                  </option>
                  <option value="engineer">Autonomy / Perception Engineer</option>
                  <option value="lead">Engineering Lead</option>
                  <option value="pm">Program Manager</option>
                  <option value="executive">Executive / Leadership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Email <span className="text-brand">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition"
                />
              </div>

              {/* Additional Information */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Additional Information{" "}
                  <span className="text-text-secondary font-normal">(Optional)</span>
                </label>
                <textarea
                  name="info"
                  rows={4}
                  placeholder="Tell us about your project, timeline, or any specific requirements..."
                  className="border border-border-tertiary rounded-lg px-4 py-2.5 text-sm text-text-primary bg-background-primary placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-1 bg-brand text-white text-sm font-medium rounded-lg px-6 py-3 hover:opacity-90 transition self-start disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
