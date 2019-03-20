---
layout: default
title: Writings
permalink: /writings/
---

{% for post in site.posts %}
<div>
    <h3><a class='post-link' href="{{ post.url }}">{{ post.title }}</a></h3>
      <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        {{ post.date | date: date_format }}
      </time>
    <p class="justify">{{ post.excerpt }} <a href="{{ post.url }}">Read More</a></p>
</div>
{% endfor %}
