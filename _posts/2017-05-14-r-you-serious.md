---
layout: post
title: "R You Serious: My First Taste of Web Scraping"
categories:
  - R
tags:
  - startistics
  - web scraping
  - data
  - r
---

Recently I learned about [R](https://www.r-project.org/ "rlang link") and [Rstudio](https://www.rstudio.com "rstudio link"). This was an interesting piece of programming for me to get exposed to. I attended a class on web scraping (*short, sweet definition - a way of taking information from a website*). R is technically, used for statistics from what I have learned. It is one of the languages used for data visualization.

Some basic things that I did with R was grab all occurences of a sepecific element, like div's. I would also try out some looping, where you could get all the divs dynamically by capturing a attribute from a child link. 

It is a lot more interesting and powerful then I am able, with my experience in it, to explain. Even without a math/statistic background I found a way to use this.

	library(rvest)
	depts_url <- "http://houstontx.gov/departments.html"
	depts_html <- read_html(depts_url)
	read_html(depts_url) %>%
	html_node('.table150 a')
	
Small snippet and really where I first started learning. This snippet basically imports an R package called *rvest* which makes it easier to grab and manipulate data from an HTML source. What was tricky was the way variables were declared. As you can see there is a pipe that takes the data from the right into the left variable.

All in all there is much to be learned. R is incredibly powerful and somewhat easy to learn, at least conceptually. Just another development discovery, being documented.