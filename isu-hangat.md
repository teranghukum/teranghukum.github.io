---
layout: default
title: "Isu Hangat"
permalink: /isu-hangat/
---
# Isu Hangat

Isu-isu hukum yang sedang hangat dibahas, dijelaskan dua lapis: sederhana untuk awam, bedah hukum untuk mahasiswa.

{% assign semua = site.pages | concat: site.posts %}
{% assign daftar = semua | where: "jenis", "isu-hangat" %}
{% if daftar.size > 0 %}
<ul>
{% for a in daftar %}
  <li><a href="{{ a.url | relative_url }}">{{ a.title }}</a>{% if a.bidang %} — Bidang {{ a.bidang }}{% endif %}{% if a.date %} · {{ a.date | date: "%d-%m-%Y" }}{% endif %}</li>
{% endfor %}
</ul>
{% else %}
<p class="kerangka">Belum ada artikel. Artikel pertama akan tampil di sini setelah diterbitkan.</p>
{% endif %}
