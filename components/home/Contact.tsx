"use client";

import { CONTACT } from "@/lib/data";
import { useGroupHover } from "@/lib/useGroupHover";

export function Contact() {
  const contactIcons = useGroupHover(CONTACT.details.length);

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3">
            {CONTACT.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            {CONTACT.title}
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            {CONTACT.description}
          </p>
          <div className="space-y-6">
            {CONTACT.details.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
                onMouseEnter={contactIcons.onEnter}
                onMouseLeave={contactIcons.onLeave}
              >
                <div className="w-12 h-12 bg-kucho-50 rounded-lg flex items-center justify-center text-kucho-500 flex-shrink-0">
                  <item.icon size={20} ref={contactIcons.setRef(i)} />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-kucho-600 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">{CONTACT.formHeading}</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            {CONTACT.fields.map((field) => (
              <div key={field} className="mb-4">
                <label className="text-sm font-medium text-white mb-1 block">
                  {field}
                </label>
                <input
                  type={
                    field === "Email"
                      ? "email"
                      : field === "Phone Number"
                        ? "tel"
                        : "text"
                  }
                  placeholder={`Your ${field}`}
                  className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-500 border border-transparent focus:border-white bg-white"
                />
              </div>
            ))}
            <div className="mb-4">
              <label className="text-sm font-medium text-white mb-1 block">
                Message
              </label>
              <textarea
                placeholder={CONTACT.messagePlaceholder}
                rows={4}
                className="w-full rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kucho-500 border border-transparent focus:border-white resize-none bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-300 text-black font-semibold text-sm rounded-full px-5 py-2.5 hover:bg-amber-400 hover:text-white transition-all duration-300"
            >
              {CONTACT.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}