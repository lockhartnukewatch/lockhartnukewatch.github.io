---
title: "Groves-2 Forge: What Kind of Reactor Is It, and Is It Safe?"
date: 2026-11-22
---

Our [Isotope Supply Chain](/updates/2026-11-19-oklo-isotope-supply-chain/) article highlights the real energy constraints for Oklo's plans to scale up production of Lu-177: the high-flux reactor Oklo plans to build and operate at Groves-2 Forge.

What kind of reactor will this be, exactly? What are the risk factors for such a reactor? And what safety concerns follow -- especially now that the regulatory framework under which a facility like Groves-2 Forge would operate is itself moving faster than the public conversation about it.

## What kind of reactor does this chemistry actually demand?

Oklo has not disclosed the power of the reactor that will irradiate the feedstock at Groves-2 Forge. But the isotope math is public, and every facility in the world that actually runs this chemistry is on the record.

**The production rate scales directly with neutron flux.** The Yb-176(n,γ) reaction has a small thermal capture cross section (about 3.1 barns), so the only way to make useful quantities is to push a very large number of neutrons through the target. Per a 2021 *European Journal of Nuclear Medicine and Molecular Imaging* review, current Lu-177 production runs in reactors with high neutron flux -- FRM-II (20 MW), HFR (Netherlands), BR2 (Belgium), MURR (10 MW), and others ([Oklo](https://oklo.com/blog/two-grams-to-help-build-americas-isotope-supply); [European Journal of Nuclear Medicine and Molecular Imaging](https://pmc.ncbi.nlm.nih.gov/articles/PMC4463871/)). The best-documented case of Oklo's exact route is FRM-II, where a 100 mg target of 99.7%-enriched Yb-176 produced up to ~94 GBq of no-carrier-added ([NCA](https://pmc.ncbi.nlm.nih.gov/articles/PMC4463871/)) Lu-177 over a 14-day cycle, and targets up to 150 mg produced up to **120 GBq (~3.2 Ci) per cycle** -- enough for a few hundred patient doses.

For context, as detailed in our [Isotope Supply Chain](/updates/2026-11-19-oklo-isotope-supply-chain/) article: Groves-1, the test reactor Oklo has operated, was capped at **100 watts** by its DOE determination, with an operating phase of ~100 hours. At FRM-II-like flux, that is roughly five orders of magnitude below the flux band where this chemistry produces anything useful. Groves-2, the isotope production and processing pilot, is therefore expected to contain a reactor at least two to five orders of magnitude larger than Groves-1 -- a megawatt-class, high-flux machine, more like a small research reactor than a scaled-up test reactor.

## Risk factors and safety concerns

A reactor of that scale -- a high-flux production reactor in the 10–20 MW class -- carries risk factors orders of magnitude larger than Oklo's existing 100-watt Groves-1:

- **Neutron flux and activation.** High-flux irradiation drives activation of the reactor structure and the target itself; shielding, dose monitoring, and radiation protection become central design drivers.
- **Decay heat and cooling.** A production reactor running multi-day irradiation cycles must remove decay heat and provide reliable cooling -- questions tied to the undisclosed thermal power of the Forge reactor.
- **Criticality safety.** High-flux campaigns with kilogram-scale enriched targets require careful reactivity management.
- **Tritium in the coolant.** Any pool-type reactor produces trace activation in its water, including tritium -- discussed in our [tritium archive](/archive/20-waste-tritium/).
- **Fission products and waste.** The by-products of the fission reaction used to irradiate the isotope materials, and the used fuel that remains in the reactor system until relocation, are the material of greatest concern at a facility like Groves-2 Forge.

### The nuclear safety rules are being rewritten

In light of the [Department of Energy's quiet rewriting of nuclear safety rules](https://www.npr.org/2026/01/28/nx-s1-5677187/nuclear-safety-rules-rewritten-trump) (NPR), the pace at which Oklo has moved from Groves-1's first criticality to the planned Groves-2 Forge takes on a sharper safety meaning (NPR). According to the NPR article, the DOE cut more than 750 pages of requirements covering safety systems, environmental protection, site security, and accident investigation -- leaving about a third of the original pages -- and removed the "As Low As Reasonably Achievable" principle [[ALARA](https://en.wikipedia.org/wiki/As_low_as_reasonably_practicable)], the cognizant system engineer requirement, and softened radiation-protection language from mandatory to discretionary.

A [follow-up](https://www.npr.org/2026/02/26/nx-s1-5727510/secret-rules-experimental-nuclear-reactors-now-public) from NPR (Feb. 26, 2026) made the rewritten orders public in response to a FOIA request, and [ProPublica's](https://www.propublica.org/article/trump-nuclear-power-nrc-safety-doge-vought) investigation (March 20, 2026) found that the DOE's radioactive waste management manual -- 59 pages -- had been replaced by a 25-page order in which pages of detailed requirements for waste packaging and monitoring had been removed.

The [Federal Register](https://www.federalregister.gov/documents/2026/07/16/2026-14341/modernizing-reactor-licensing-safety-oversight-and-siting-practices) proposed rule of July 16, 2026 and the NRC's September 24, 2026 proposed enhancements are the institutional expression of this rollback.

Independent reviewers have warned that the net effect was a loosening. Former NRC chair Christopher Hanson said the secret rewriting ["is not the best way to engender the kind of public trust that's going to be needed for nuclear to succeed more broadly"](https://www.npr.org/2026/01/28/nx-s1-5677187/nuclear-safety-rules-rewritten-trump#:~:text=%22I%20would,broadly%2C%22); Tison Campbell warned that removing the ALARA principle could mean [less concrete shielding and longer shifts](https://www.npr.org/2026/01/28/nx-s1-5677187/nuclear-safety-rules-rewritten-trump#:~:text=Removing%20the%20standard%20means%20that%20new%20reactors%20could%20be%20constructed%20with%20less%20concrete%20shielding%2C%20and%20workers%20could%20work%20longer%20shifts%2C%20potentially%20receiving%20higher%20doses%20of%20radiation); Emily Caffrey said the shift from mandatory ("prohibited" or "must") to discretionary ("should be" or "can be") language was ["a big change in words, in meaning."](https://www.npr.org/2026/01/28/nx-s1-5677187/nuclear-safety-rules-rewritten-trump#:~:text=%22Anywhere%20they%20have%20changed%20%27prohibited%27%20or%20%27must%27%20to%20%27should%20be%27%20or%20%27can%20be%27%20%E2%80%94%20that%20is%20a%20loosening%20of%20regulation%2E%20That%27s%20a%20big%20change%20in%20words%2C%20in%20meaning%2C%22%20Caffrey%20said)

### What kinds of dangerous waste might be onsite -- and how much?

The most dangerous material at a facility like Groves-2 Forge would be the by-products of the fission reaction used to irradiate the isotope materials, and the used fuel that remains in the reactor system until relocation.

The Yb-176 → Lu-177 isotope reaction only produces medicine, but the HALEU-powered reactor that serves as the neutron source may produce plutonium, tritium and other harmful by-products. Oklo has not disclosed the design of Groves-2, what kinds of waste the Forge reactor might produce or in what quantities. With the project under DOE, rather than NRC oversight, these details are not available to the public.

Certainly a larger scale reactor will require safeguards, procedures and processes which cannot be kept secret. First responders need to be trained in order to keep themselves and the community surrounding the site safe, wherever it may end up.

## Questions in light of the rewritten safety rules

The safety of the high-flux reactor that will irradiate Oklo's enriched Yb-176 feedstock into Lu-177 therefore has to operate inside a framework that independent reviewers described as loosened -- in ways that matter at production scale.

Here are the questions we need answered, or at least need to keep asking as the pieces move:

1. **What will "discretionary" mean in practice?** The shift from mandatory ("prohibited" or "must") to discretionary ("should be" or "can be") language was described by former NRC chair Christopher Hanson, Tison Campbell, and Emily Caffrey as a materially different standard -- with Campbell warning that removing the [ALARA](https://en.wikipedia.org/wiki/As_low_as_reasonably_practicable) principle could mean less concrete shielding and longer shifts. At a high-flux production reactor, what dose limits, shielding requirements, and worker-protection standards actually apply here?

2. **What safety basis will back the high-flux reactor?** With the cognizant system engineer requirement removed and the [ALARA](https://en.wikipedia.org/wiki/As_low_as_reasonably_practicable) principle gone, what independent technical oversight replaces them for a production-scale isotope reactor?

3. **What will the DOE NEPA determination for Groves-2 say?** The first public statement of the pilot reactor's power, fuel, cooling, accident analysis, and waste -- expected under the DOE Launch Pad -- must be read against the loosened safety framework.

4. **What will the NRC's September 24, 2026 proposed enhancements change, and how do they interact with DOE oversight of a facility Oklo intends to run under the demonstration track before any commercial license?**

5. **How should first responders and the surrounding community be protected?** With safety requirements moving toward discretion, what emergency planning, training, and public-engagement commitments should Oklo and the DOE make before irradiation begins?

## Further reading

- [Oklo -- "Two grams to help build America's isotope supply"](https://oklo.com/blog/two-grams-to-help-build-americas-isotope-supply)
- [NPR -- "Trump administration secretly loosens nuclear safety rules"](https://www.npr.org/2026/01/28/nx-s1-5677187/nuclear-safety-rules-rewritten-trump)
- [NPR -- "Secretly rewritten nuclear safety rules are made public"](https://www.npr.org/2026/02/26/nx-s1-5727510/secret-rules-experimental-nuclear-reactors-now-public)
- [ProPublica -- "DOGE Goes Nuclear: How Trump Invited Silicon Valley Into America's Nuclear Power Regulator"](https://www.propublica.org/article/trump-nuclear-power-nrc-safety-doge-vought)
- [Federal Register -- "Modernizing Reactor Licensing, Safety Oversight, and Siting Practices"](https://www.federalregister.gov/documents/2026/07/16/2026-14341/modernizing-reactor-licensing-safety-oversight-and-siting-practices)
- [Magica -- Oklo's Texas reactor emergency-drill questions](https://magica.com/news/oklo-groves-reactor-emergency-planning-lockhart)
- [The Inference -- Oklo's cancer-isotope plant lands with no buyer, no price and a $6.5 billion bill](https://theinference.org/article/oklo-s-cancer-isotope-plant-lands-with-no-buyer-no-price-and-a-6-5-billion-bill)
- [The Tech Pencil -- The Future Is Waiting for the Right Atoms](https://thetechpencil.com/article/actinide-isotope-separation-yb-176-haleu)