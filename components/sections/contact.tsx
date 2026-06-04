"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  CheckCircle,
  User,
  Building,
  Briefcase,
  Wallet,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Background ───────────────────────────────────────────────────────────────

function ContactBg() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

// ── Floating Label Input Component ───────────────────────────────────────────

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  error?: string;
  icon?: React.ElementType;
}

function FloatingInput({ label, as = "input", options, error, icon: Icon, className, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!props.value);

  const handleBlur = (e: React.FocusEvent<any>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    props.onBlur?.(e);
  };

  const handleFocus = (e: React.FocusEvent<any>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    setHasValue(!!e.target.value);
    props.onChange?.(e);
  };

  const isFloating = isFocused || hasValue || as === "select";

  const baseClasses = cn(
    "peer w-full rounded-lg border bg-background/50 text-[13px] text-foreground outline-none transition-all duration-300",
    Icon ? "pl-10" : "pl-4",
    error
      ? "border-destructive/50 focus:border-destructive"
      : "border-border/50 focus:border-foreground/30 focus:bg-background",
    as === "textarea" ? "min-h-[100px] resize-none pt-6 pb-3" : "h-[52px] pt-5 pb-1.5",
    className
  );

  return (
    <div className="relative w-full">
      {Icon && (
        <div className="absolute left-3.5 top-[18px] text-muted-foreground/60 transition-colors peer-focus:text-foreground/70 z-10 pointer-events-none">
          <Icon className="h-4 w-4" />
        </div>
      )}

      {as === "select" ? (
        <select
          className={cn(baseClasses, "appearance-none")}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          className={baseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={baseClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      <label
        className={cn(
          "pointer-events-none absolute transition-all duration-300 z-10",
          Icon ? "left-10" : "left-4",
          isFloating
            ? "top-1.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/80"
            : "top-[17px] text-[13px] text-muted-foreground"
        )}
      >
        {label}
        {props.required && <span className="text-destructive"> *</span>}
      </label>

      {error && (
        <span className="absolute -bottom-4 left-1 text-[10px] text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

// ── Contact Section ──────────────────────────────────────────────────────────

export function ContactSection() {
  const { ref, isInView } = useInView(0.05);

  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    details: "",
    preferredContact: "Email",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.fullName) newErrors.fullName = "Required";
    if (!formState.phone) newErrors.phone = "Required";
    if (!formState.email) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = "Invalid email";
    if (!formState.service) newErrors.service = "Required";
    if (!formState.budget) newErrors.budget = "Required";
    if (!formState.details) newErrors.details = "Required";
    if (!formState.consent) newErrors.consent = "You must agree to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <ContactBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12"
        >
          {/* ── Left Side: Header & Info (40%) ────────────────────── */}
          <div className="flex flex-col lg:col-span-5">
            <motion.div variants={fadeUp} className="mb-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                Let's Build Something Great
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground lg:text-[40px]">
                Let's Discuss Your Next{" "}
                <span className="text-foreground/50">Digital Product</span>
              </h2>
              <p className="max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                Whether you're planning a custom software platform or digital
                growth strategy, our team is ready to help turn your vision into
                reality.
              </p>
            </motion.div>

            {/* Compact Contact Info Card */}
            <motion.div
              variants={fadeUp}
              className="mt-auto rounded-xl border border-border/50 bg-background/30 p-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-foreground/50" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </div>
                    <a
                      href="mailto:hello@nexynstudios.com"
                      className="mt-0.5 block text-[13px] font-medium text-foreground hover:text-foreground/70 transition-colors"
                    >
                      hello@nexynstudios.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-foreground/50" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </div>
                    <div className="mt-0.5 text-[13px] font-medium text-foreground">
                      +91 XXXXX XXXXX
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-foreground/50" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Location
                    </div>
                    <div className="mt-0.5 text-[13px] font-medium text-foreground">
                      Surat, Gujarat, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-foreground/50" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Business Hours
                    </div>
                    <div className="mt-0.5 text-[13px] font-medium text-foreground">
                      Mon-Sat, 9AM-7PM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Side: Form (60%) ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 p-6 sm:p-8 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full min-h-[460px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-foreground/5">
                      <CheckCircle className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                      Thank You For Reaching Out
                    </h3>
                    <p className="max-w-sm text-[13px] text-muted-foreground">
                      Our team will review your requirements and contact you shortly
                      to discuss the next steps.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormState({
                          fullName: "",
                          phone: "",
                          email: "",
                          company: "",
                          service: "",
                          budget: "",
                          timeline: "",
                          details: "",
                          preferredContact: "Email",
                          consent: false,
                        });
                      }}
                      className="mt-8 rounded-lg border border-border/50 px-5 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FloatingInput
                        icon={User}
                        label="Full Name"
                        required
                        value={formState.fullName}
                        onChange={(e) => {
                          setFormState({ ...formState, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        error={errors.fullName}
                      />
                      <FloatingInput
                        icon={Phone}
                        label="Phone Number"
                        required
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => {
                          setFormState({ ...formState, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        error={errors.phone}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FloatingInput
                        icon={Mail}
                        label="Email Address"
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        error={errors.email}
                      />
                      <FloatingInput
                        icon={Building}
                        label="Company Name"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                      />
                    </div>

                    <FloatingInput
                      icon={Briefcase}
                      label="Service Required"
                      as="select"
                      required
                      value={formState.service}
                      onChange={(e) => {
                        setFormState({ ...formState, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: "" });
                      }}
                      options={[
                        "Custom Software Development",
                        "Web Development",
                        "Mobile App Development",
                        "UI/UX Design",
                        "Digital Marketing",
                        "Cloud & DevOps Solutions",
                      ]}
                      error={errors.service}
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <FloatingInput
                        icon={Wallet}
                        label="Project Budget"
                        as="select"
                        required
                        value={formState.budget}
                        onChange={(e) => {
                          setFormState({ ...formState, budget: e.target.value });
                          if (errors.budget) setErrors({ ...errors, budget: "" });
                        }}
                        options={[
                          "Under ₹50K",
                          "₹50K - ₹1L",
                          "₹1L - ₹5L",
                          "₹5L - ₹10L",
                          "₹10L+",
                        ]}
                        error={errors.budget}
                      />
                      <FloatingInput
                        icon={Calendar}
                        label="Project Timeline"
                        as="select"
                        value={formState.timeline}
                        onChange={(e) =>
                          setFormState({ ...formState, timeline: e.target.value })
                        }
                        options={[
                          "Immediately",
                          "Within 1 Month",
                          "Within 3 Months",
                          "Flexible",
                        ]}
                      />
                    </div>

                    <FloatingInput
                      icon={MessageSquare}
                      label="Project Details"
                      as="textarea"
                      required
                      placeholder="Tell us about your project goals, business challenges and expected outcomes."
                      value={formState.details}
                      onChange={(e) => {
                        setFormState({ ...formState, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: "" });
                      }}
                      error={errors.details}
                      className="pt-6 placeholder:text-transparent focus:placeholder:text-muted-foreground/30"
                    />

                    <div className="pt-1 space-y-2.5">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-5">
                        {["WhatsApp", "Call", "Email"].map((method) => (
                          <label
                            key={method}
                            className="flex cursor-pointer items-center gap-2 group"
                          >
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method}
                              checked={formState.preferredContact === method}
                              onChange={(e) =>
                                setFormState({ ...formState, preferredContact: e.target.value })
                              }
                              className="h-3.5 w-3.5 accent-foreground transition-all group-hover:scale-110"
                            />
                            <span className="text-[13px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {method}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex cursor-pointer items-start gap-3 group">
                        <input
                          type="checkbox"
                          checked={formState.consent}
                          onChange={(e) => {
                            setFormState({ ...formState, consent: e.target.checked });
                            if (errors.consent) setErrors({ ...errors, consent: "" });
                          }}
                          className={cn(
                            "mt-0.5 h-3.5 w-3.5 shrink-0 rounded-sm border-border accent-foreground transition-all group-hover:scale-110",
                            errors.consent && "outline outline-1 outline-destructive"
                          )}
                        />
                        <span className="text-[12px] leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                          I agree to be contacted regarding my project inquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1 ml-6 text-[10px] text-destructive">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative mt-2 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-foreground px-6 text-[13px] font-semibold text-background transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Schedule Free Consultation
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
