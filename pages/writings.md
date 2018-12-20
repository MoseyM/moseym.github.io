---
layout: default
title: Writings
permalink: /writings/
---

<div class="col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
{% for post in site.posts %}
    <h3><a class='post-link' href="{{ post.url }}">{{ post.title }}</a></h3>
    <p class="justify">{{ post.excerpt }} <a href="{{ post.url }}">Read More</a></p>
{% endfor %}
