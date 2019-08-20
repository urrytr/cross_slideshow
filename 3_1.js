function json(_a)
{
var len=_a.feed.entry.length;
 
document.write( '	<body class=\"loading\">\n' );
document.write( '		<main>\n' );
document.write( '			<div class=\"content\">\n' );

for (var i=0;i<len;i++)
{
document.write( '				<article class=\"content__item\">\n' );
document.write( '					<div class=\"img-wrap img-wrap--content\">\n' );
document.write( '						<div class=\"img img--content\" style=\"background-image: url('+_a.feed.entry[i].gsx$url.$t+');\"></div>\n' );
document.write( '					</div>\n' );
document.write( '					<header class=\"content__item-header\">\n' );
document.write( '						<span class=\"content__item-header-meta\"> </span>\n' );
document.write( '						<h2 class=\"content__item-header-title\">  '+_a.feed.entry[i].gsx$name.$t+'</h2>\n' );
document.write( '					</header>\n' );
document.write( '					<div class=\"content__item-copy\">\n' );
document.write( '						<p class=\"content__item-copy-text\">  '+_a.feed.entry[i].gsx$info.$t+'\n' );
document.write( '						</p>\n' );
document.write( '						<a href=\"#\" class=\"content__item-copy-more\"> '+_a.feed.entry[i].gsx$moreinfo.$t+' +</a>\n' );
document.write( '					</div>\n' );
document.write( '				</article>\n' );
}
document.write( '			</div>\n' );

document.write( '			<div class=\"revealer\">\n' );
document.write( '				<div class=\"revealer__inner\"></div>\n' );
document.write( '			</div>\n' );
document.write( '			<div class=\"grid grid--slideshow\">\n' );

for (var i=0;i<len;i++)
{

document.write( '				<figure class=\"grid__item grid__item--slide\">\n' );
document.write( '					<span class=\"number\">0 '+(1+i)+'</span>\n' );
document.write( '					<div class=\"img-wrap\">\n' );
document.write( '						<div class=\"img\" style=\"background-image: url('+_a.feed.entry[i].gsx$url.$t+');\"></div>\n' );
document.write( '					</div>\n' );
document.write( '					<figcaption class=\"caption\">' +_a.feed.entry[i].gsx$place.$t+'</figcaption>\n' );
document.write( '				</figure>\n' );
}

document.write( '				<div class=\"titles-wrap\">\n' );
document.write( '					<div class=\"grid grid--titles\">\n' );

for (var i=0;i<len;i++)
{
document.write( '						<h3 class=\"grid__item grid__item--title\"> '+_a.feed.entry[i].gsx$nick.$t+'</h3>\n' );
}


document.write( '					</div>\n' );
document.write( '				</div>\n' );
document.write( '				<div class=\"grid grid--interaction\">\n' );
document.write( '					<div class=\"grid__item grid__item--cursor grid__item--left\"></div>\n' );
document.write( '					<div class=\"grid__item grid__item--cursor grid__item--center\"></div>\n' );
document.write( '					<div class=\"grid__item grid__item--cursor grid__item--right\"></div>\n' );
document.write( '				</div>\n' );
document.write( '			</div>\n' );



document.write( '		<div class=\"frame\">\n' );
document.write( '				<div class=\"frame__title-wrap\">\n' );
document.write( '					<h1 class=\"frame__title\"> SIddharth Favs Models</h1>\n' );
document.write( '					<div class=\"frame__links\">\n' );
document.write( '						<a href=\"\"> Main Site</a>\n' );
document.write( '						<a href=\"\">  Site 2</a>\n' );
document.write( '					</div>\n' );
document.write( '					<div class=\"frame__mode\" role=\"radiogroup\">\n' );
document.write( '						<div class=\"frame__mode-item frame__mode-item--dark\">\n' );
document.write( '							<input id=\"mode-1\" type=\"radio\" name=\"mode\" class=\"frame__mode-input\"></input>\n' );
document.write( '							<label class=\"frame__mode-label\" for=\"mode-1\">Dark mode</label>\n' );
document.write( '						</div>\n' );
document.write( '						<div class=\"frame__mode-item\">\n' );
document.write( '							<input id=\"mode-2\" type=\"radio\" name=\"mode\" class=\"frame__mode-input\" checked></input>\n' );
document.write( '							<label class=\"frame__mode-label frame__mode-label--light\" for=\"mode-2\">Light mode</label>\n' );
document.write( '						</div>\n' );
document.write( '					</div>\n' );
document.write( '				</div>\n' );
document.write( '			</div><!-- /frame -->\n' );
document.write( '	' );

}
