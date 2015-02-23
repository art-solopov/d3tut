For those of you who don't know, [D3.js](http://d3js.org/) is a library for building data-driven HTML documents.
It contains a lot of powerful tools for visualizing your data in a lot of different ways, as illustrated by a great
bunch of [examples.](https://github.com/mbostock/d3/wiki/Gallery)

"But wait," - you might ask. - "Isn't there [a lot of tutorials](https://github.com/mbostock/d3/wiki/Tutorials) already?"
Well, yes. However, most of them are either beginner-level, dedicated to core concepts (such as data binding) or covering
specific techniques (such as using Inkscape for planning the diagrams). What I want to do is cover a somewhat
intermediate concept, one that probably won't be too easy to grasp for a complete beginner, but it quickly becomes
important for creating anything more complex than a simple bar chart. I'm talking about 
[layouts](https://github.com/mbostock/d3/wiki/Layouts).

[ ](#cut)

## What is a layout?

A D3.js layout can be described as an object, tailored for a specific task (usually a specific diagram type) that can
calculate various parameters required to build the graph. For example, a
[tree](https://github.com/mbostock/d3/wiki/Tree-Layout) layout (that is useful for building, well, trees) calculates
the coordinates of nodes and links to keep the tree nice and tight.
A [pack layout](https://github.com/mbostock/d3/wiki/Pack-Layout) calculates not only the coordinates, but the radiuses
of the bubbles.

## Getting started with D3.js
Yes, I know, a bit late now probably. But still, just a bit of info to recap. Mind you, if you really need a good D3.js
beginner tutorial, you'll probably better be somewhere else. There are some tutorials on D3.js core concepts I really
like, such as *General Update Pattern* (parts [I](http://bl.ocks.org/mbostock/3808218), [II](http://bl.ocks.org/mbostock/3808221)
and [III](http://bl.ocks.org/mbostock/3808234)). [*How selections work*](http://bost.ocks.org/mike/selection/) is a good
tutorial if you have the time to sit back and read it thoroughly, two or three times maybe.

What I'm going to do is just remind you of the core concepts.

The core concept of D3.js is *data binding.* Basically, it's what D3 (**D**ata-**D**riven-**D**ocuments) mean. So, the
core algorithm of creating a D3-powered web page is:

1. Obtain the data;
2. Select the elements and bind the data to them. 
3. Some elements might not exist yet, so create them.
4. Manipulate the elements' attributes and values according to the bound data.
5. Some elements might not have data binded to them, so destroy them.

Less talking, more coding, right? Let's try and do something.

~~~ html
<html>
    <head>
        <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
    </head>
    <body>
        <svg>
        </svg>

        <script type="text/javascript">
var data = [10, 20, 30, 40, 50]; // (1)
var svg = d3.select('svg').attr('width', 100 * data.length).attr('height', 100);
var circles = svg.selectAll('circle').data(data, function(d){ return d; }); // (2)
circles.enter().append('circle').attr('r', function(d){ return d; }).attr('cy', 50).attr('cx', function(d, i){ return 100 * i + 50;}); // (3,4)
        </script>

    </body>
</html>
~~~

Which will produce something like this:

<svg width="500" height="100">
        <circle r="10" cy="50" cx="50"/>
        <circle r="20" cy="50" cx="150"/>
        <circle r="30" cy="50" cx="250"/>
        <circle r="40" cy="50" cx="350"/>
        <circle r="50" cy="50" cx="450"/>
</svg>

Not a lot, right? Well, right. But you might notice we didn't define any circles in the actual SVG block. So, what happened here?

First, we selected the svg block with `d3.select`. We proceeded with setting up its dimensions using the `attr` method.

What comes next might sound illogical, but we selected the *nonexistent* circle elements within this SVG. Since they're
nonexistend, select have returned an empty set of elements. To this set we now bind our data with the `data` method.

Since none of the circle methods actually exist, we use the `enter` method. This method basically allows us to declare
the actions that should be taken for nonexistent elements. After calling the `enter` method, we chain it with the
actions themselves: `append` for creating the circles and `attr` to set the radius and coordinates.

If we had any existing elements, we could've updated their attributes without calling the `enter` method, and if we had
elements that we didn't need anymore, since they didn't correlate with any data, we could process them with the `exit`
method. Once again, I advise you to dive into the proper beginner's tutorials that are longer than 5 Kb of text.

## Next time: Tree
So, I hope you liked this tutorial and I hope that next week I'll be able to cover the first interesting layout of D3.js:
the [tree](https://github.com/mbostock/d3/wiki/Tree-Layout) layout (and probably the [cluster](https://github.com/mbostock/d3/wiki/Cluster-Layout)
layout too).
