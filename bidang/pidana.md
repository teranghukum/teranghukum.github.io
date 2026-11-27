---
layout: default
title: "Bidang Pidana"
permalink: /bidang/pidana/
bidang: "Pidana"
---
# Bidang Pidana

Artikel-artikel TerangHukum di bidang hukum pidana: tindak pidana, proses peradilan, dan sanksi.

{% assign semua = site.pages | concat: site.posts %}
{% assign daftar = semua | where: "bidang", "Pidana" %}
<ul class="daftar-artikel">
{% for a in daftar %}
{% if a.ringkasan %}
  <li><a href="{{ a.url | relative_url }}">{{ a.title }}</a>{% if a.date %}<br><small>{{ a.date | date: "%d-%m-%Y" }}{% if a.jenis %} &middot; {{ a.jenis }}{% endif %}</small>{% endif %}</li>
{% endif %}
{% endfor %}
</ul>
