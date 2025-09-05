import { useState } from "react";

export default function SouthSurreyBuyer() {
  // Same backend fields/content; brand + visuals refreshed to look original
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    price: "",
    beds: "",
    timeframe: "",
    preapproved: "",
    notes: "",
    consent: false,
  });
  const [ok, setOk] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: "South Surrey Buyer" }),
      });
      setOk(true);
    } catch (err) {
      console.error(err);
      setOk(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Brand Bar (new look) */}
      <div className="bg-[#00356b] text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white text-[#00356b] grid place-items-center font-black">MR</div>
            <div className="font-semibold tracking-wide">Macdonald Realty Ltd.</div>
          </div>
          <a className="underline text-sm" href="tel:+16045551234">(604) 555‑1234</a>
        </div>
      </div>

      {/* Hero (distinct aesthetic: serif headline, soft shapes) */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#00356b]/10 blur-3xl"/>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl"/>
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs">🏡 South Surrey · Buyer Access</span>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Your curated list of <span className="underline decoration-[#00356b] decoration-4 underline-offset-4">South Surrey</span> homes
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Daily matches, price‑drop alerts, and private tour options—tailored to your budget and must‑haves.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["⚡","Instant alerts"],
                ["🧭","Local guidance"],
                ["🔒","No spam"]
              ].map(([icon, label]) => (
                <div key={label} className="rounded-2xl bg-white border border-slate-200 p-3 text-center text-sm">
                  <div className="text-xl">{icon}</div>
                  <div className="mt-1 font-medium">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#form" className="rounded-2xl bg-[#00356b] text-white px-5 py-3 font-medium shadow hover:opacity-95">Build my list</a>
              <a href="#areas" className="rounded-2xl bg-white border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50">Neighbourhoods</a>
            </div>
          </div>

          {/* Glass card explainer */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="font-semibold">What you’ll get</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Daily matches with photos, prices, days on market</li>
                <li>• Price‑drop & new‑listing alerts</li>
                <li>• Optional same‑day private showings</li>
              </ul>
              <div className="mt-4 grid sm:grid-cols-3 gap-2 text-xs" id="areas">
                {["Morgan Creek","Ocean Park","Crescent Heights","Grandview","Elgin","Sunnyside"].map((n)=> (
                  <span key={n} className="rounded-full border border-slate-200 bg-white px-3 py-1">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form (new layout + typography, fields unchanged) */}
      <section id="form" className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl">Tell us what you’re after</h2>
                <p className="mt-3 text-slate-600">Answer a few quick questions to build your custom list and set up instant alerts.</p>
                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-xl border border-slate-200 bg-white p-3">No obligation consultation</div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3">Unsubscribe anytime</div>
                  <div className="rounded-xl border border-slate-200 bg-white p-3">Fast, local follow‑up</div>
                </div>
              </div>
              <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-6">
                {ok ? (
                  <div className="text-center">
                    <div className="text-3xl">🎉</div>
                    <div className="mt-2 font-semibold">Thanks! We’ll text/email your list shortly.</div>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm">First name</label>
                          <input required name="first" value={form.first} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00356b]/30" />
                        </div>
                        <div>
                          <label className="text-sm">Last name</label>
                          <input name="last" value={form.last} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00356b]/30" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm">Email</label>
                          <input required type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00356b]/30" />
                        </div>
                        <div>
                          <label className="text-sm">Phone</label>
                          <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00356b]/30" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm">Price range</label>
                          <select name="price" value={form.price} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2">
                            <option value="">Select</option>
                            <option>$600k-$800k</option>
                            <option>$800k-$1.0M</option>
                            <option>$1.0M-$1.5M</option>
                            <option>$1.5M-$2.0M</option>
                            <option>$2.0M+</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm">Beds</label>
                          <select name="beds" value={form.beds} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2">
                            <option value="">Any</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm">Timeframe</label>
                          <select name="timeframe" value={form.timeframe} onChange={onChange} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2">
                            <option value="">Select</option>
                            <option>0-3 months</option>
                            <option>3-6 months</option>
                            <option>6-12 months</option>
                            <option>Just browsing</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm">Are you pre‑approved?</label>
                        <div className="mt-1 flex flex-wrap gap-4 text-sm">
                          <label className="inline-flex items-center gap-2"><input type="radio" name="preapproved" value="Yes" checked={form.preapproved === 'Yes'} onChange={onChange}/> <span>Yes</span></label>
                          <label className="inline-flex items-center gap-2"><input type="radio" name="preapproved" value="No" checked={form.preapproved === 'No'} onChange={onChange}/> <span>No</span></label>
                          <label className="inline-flex items-center gap-2"><input type="radio" name="preapproved" value="Not sure" checked={form.preapproved === 'Not sure'} onChange={onChange}/> <span>Not sure</span></label>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm">Anything else to add?</label>
                        <textarea name="notes" value={form.notes} onChange={onChange} rows={3} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2" placeholder="Schools, yard, suite, parking, etc." />
                      </div>
                      <label className="text-sm flex items-start gap-2">
                        <input type="checkbox" required name="consent" checked={form.consent} onChange={onChange} className="mt-1" />
                        <span>I consent to be contacted by Macdonald Realty Ltd. <a className="underline" href="#">Privacy Policy</a>.</span>
                      </label>
                      <button type="submit" className="rounded-xl bg-[#00356b] text-white px-5 py-3 font-medium shadow hover:opacity-95">Send me my list</button>
                    </div>
                    <div className="text-xs text-slate-500 mt-3">Canadian anti‑spam compliant. Unsubscribe anytime.</div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip (distinct from original) */}
      <section className="bg-slate-100 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 grid sm:grid-cols-3 gap-6 text-sm text-slate-700">
          <div className="rounded-2xl bg-white p-4 border border-slate-200">Brokerage: <span className="font-medium">Macdonald Realty Ltd.</span></div>
          <div className="rounded-2xl bg-white p-4 border border-slate-200">Service Areas: South Surrey · White Rock · Cloverdale</div>
          <div className="rounded-2xl bg-white p-4 border border-slate-200">Hours: 9am–7pm daily</div>
        </div>
      </section>

      {/* FAQ (kept but restyled) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-serif text-3xl">Buyer FAQ</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { q: "Is this free?", a: "Yes. We’ll set up a personalized search and alerts at no cost." },
              { q: "Will you spam me?", a: "No. You’ll get relevant matches only and can unsubscribe anytime." },
              { q: "How soon can I tour a home?", a: "Often the same day. We’ll coordinate private showings that fit your schedule." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="font-medium">{f.q}</div>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00356b] text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-full bg-white text-[#00356b] grid place-items-center font-black">MR</div>
            <div className="mt-3 text-sm text-slate-200">© {new Date().getFullYear()} Macdonald Realty Ltd.</div>
          </div>
          <div>
            <div className="font-semibold">South Surrey</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
              <li>Morgan Creek</li>
              <li>Ocean Park</li>
              <li>Grandview</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
              <li><a href="mailto:hello@youremail.com" className="hover:underline">hello@youremail.com</a></li>
              <li><a href="tel:+16045551234" className="hover:underline">(604) 555‑1234</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
