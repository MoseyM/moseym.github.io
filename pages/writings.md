---
layout: default
title: Writings
permalink: /writings/
---

{% for post in site.posts %}
<div>
    <h3><a class='post-link' href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="justify">{{ post.excerpt }} <a href="{{ post.url }}">Read More</a></p>
</div>
{% endfor %}
