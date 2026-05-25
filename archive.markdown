---
layout: single
title: "Archive"
permalink: /archive/
---

Earlier VIPR-based analysis before [Oklo disclosed that Groves is not a VIPR facility (yet)](/updates/2026-05-25-oklo-latest-groves-press-release).

They may still be useful -- we still don't know what Oklo will do with Groves long-term, and this may be useful to other communities who _are_ getting a VIPR.

<ul class="archive-list">
  {% for doc in site.archive %}
    <li>
      <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
      {% if doc.date %}
        <span class="date">— {{ doc.date | date: "%B %d, %Y" }}</span>
      {% endif %}
    </li>
  {% endfor %}
</ul>
