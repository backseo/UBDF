$(document).ready(function(){$(".imgover").hover(function(){$(this).addClass("img-m-over")},function(){$(this).removeClass("img-m-over")}),$(".img").hover(function(){$(this).addClass("img-m-over")},function(){$(this).removeClass("img-m-over")})});var cible=$(".a-wrapper-titles ul li");cible.on("click",function(){$(this).next(".a-container").toggleClass("hider")}),$(window).scroll(function(){$(document).scrollTop()>90?($(".navbar-ficel").css("height",60),$(".navbar-ficel-brand img").css("height",60)):($(".navbar-ficel").css("height",90),$(".navbar-ficel-brand img").css("height",85))});