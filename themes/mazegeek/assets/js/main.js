! function(e) {
    var t = {};

    function a(l) {
        if (t[l]) return t[l].exports;
        var n = t[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return e[l].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, l) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: l
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (a.r(l), Object.defineProperty(l, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(l, n, function(t) {
                return e[t]
            }.bind(null, n));
        return l
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 0)
}([function(e, t, a) {
    "use strict";
    a(2);
    var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a(1)),
        n = void 0,
        d = void 0;
    (0, l.default)(document).ready(function() {
        (function(e) {
            var t = document.cookie.match("(^|;) ?cookie=([^;]*)(;|$)");
            return t ? t[2] : null
        })() || (0, l.default)(".cookies").addClass("active"), (0, l.default)(".cookies .agree").click(function() {
            ! function(e, t) {
                var a = new Date;
                a.setTime(a.getTime() + 2592e6), document.cookie = "cookie=1;expires=" + a.toUTCString()
            }(), (0, l.default)(".cookies").removeClass("active")
        }), (0, l.default)(".cookies .cross").click(function() {
            (0, l.default)(".cookies").removeClass("active")
        }), (0, l.default)(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), (0, l.default)(window).resize(function() {
            var e = (0, l.default)(document).width();
            e <= 991 && (n > 991 || !n) && h(), e > 991 && (n <= 991 || !n) && m(), e <= 767 && (n > 767 || !n) && u(), e > 767 && (n <= 767 || !n) && f(), e > 575 && (n <= 575 || !n) && p(), e <= 575 && (n > 575 || !n) && c(), n = e
        }).trigger("resize"), (0, l.default)(".banner-slider, .slider-blog").on("init", function() {
            (0, l.default)(".slick-prev").hide()
        }).on("beforeChange", function(e, t, a, n) {
            0 === n ? (0, l.default)(".slick-prev").hide() : (0, l.default)(".slick-prev").show(), t.slideCount === n + 1 ? (0, l.default)(".slick-next").hide() : (0, l.default)(".slick-next").show()
        }), (0, l.default)(".banner-slider, .slider-blog").slick({
            centerMode: !0,
            dots: !0,
            infinite: !1,
            slidesToShow: 1,
            centerPadding: 0,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>'
        });
        var e = (0, l.default)(".banner-slider-a").slick({
            centerMode: !0,
            autoplay: !0,
            autoplaySpeed: 1e4,
            infinite: !0,
            dots: !1,
            arrows: !0,
            slidesToShow: 1,
            centerPadding: 0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: !1
                }
            }]
        });
        if ((0, l.default)(".home-top-banner .banner-btn").click(function() {
            (0, l.default)(this).hasClass("play") ? (e.slick("slickPause"), (0, l.default)(this).removeClass("play")) : (e.slick("slickPlay"), (0, l.default)(this).addClass("play"))
        }), (0, l.default)("#scroll-to-top").length) {
            var t = function() {
                (0, l.default)(window).scrollTop() > 100 ? ((0, l.default)("#scroll-to-top").addClass("show"), (0, l.default)('.dropdown-toggle[aria-expanded="true"]').click()) : (0, l.default)("#scroll-to-top").removeClass("show")
            };
            t(), (0, l.default)(window).on("scroll", function() {
                t()
            }), (0, l.default)("#scroll-to-top").on("click", function(e) {
                e.preventDefault(), (0, l.default)("html,body").animate({
                    scrollTop: 0
                }, 700)
            })
        }(0, l.default)(".daxx-developers-form").length && ((0, l.default)("#count-devs").text((0, l.default)(".daxx-developers-list").children().length), (0, l.default)(".daxx-developers-form").on("change", "input", function() {
            var e = !1;
            e && n.abort(), window.history.replaceState(null, null, window.location.pathname);
            var t = "";
            (0, l.default)('.daxx-developers-form input[type="checkbox"]').each(function() {
                this.checked && (-1 === t.indexOf("?") ? t += "?" + (0, l.default)(this).attr("name") + "=" + (0, l.default)(this).attr("value") : t += "&" + (0, l.default)(this).attr("name") + "=" + (0, l.default)(this).attr("value"))
            }), window.history.replaceState(null, null, t), (0, l.default)(".daxx-developers-list").empty(), (0, l.default)(".daxx-developers-list").siblings(".no-devs").removeClass("active"), (0, l.default)(".daxx-developers-list").siblings(".loader").addClass("active");
            var a = {
                techs: [],
                scrum: !1,
                team: !1
            };
            (0, l.default)(".daxx-developers-form input.tech:checked").each(function() {
                a.techs.push(+(0, l.default)(this)[0].value)
            }), (0, l.default)(".daxx-developers-form input.scrum:checked").length && (a.scrum = !0), (0, l.default)(".daxx-developers-form input.team:checked").length && (a.team = !0), e = !0;
            var n = l.default.post(window.location.pathname + "/filter", JSON.stringify(a), function(t) {
                var a = JSON.parse(t);
                if ((0, l.default)(".daxx-developers-list").siblings(".loader").removeClass("active"), a.length) {
                    var n = s(a);
                    (0, l.default)(".daxx-developers-list").empty().append(n)
                } else(0, l.default)(".daxx-developers-list").empty(), (0, l.default)(".daxx-developers-list").siblings(".no-devs").addClass("active");
                (0, l.default)("#count-devs").text((0, l.default)(".daxx-developers-list").children().length), e = !1
            })
        }), (0, l.default)(".clear-filters-devs").click(function(e) {
            e.preventDefault(), (0, l.default)(".daxx-developers-form input").each(function() {
                (0, l.default)(this).prop("checked", !1)
            }), (0, l.default)(".daxx-developers-form input").first().change()
        }), location.search && (("&" + location.search.slice(1)).split("&skill=").forEach(function(e) {
            (0, l.default)('.daxx-developers-form input[type="checkbox"][value=' + +e + "]").attr("checked", !0)
        }), (0, l.default)(".daxx-developers-form input").first().trigger("change"))), (0, l.default)(".daxx-form-validate").length && ((0, l.default)(".daxx-form-validate input[type=text], .daxx-form-validate textarea").each(function() {
            (0, l.default)(this).blur(function() {
                o(this)
            }), (0, l.default)(this).val() && o(this)
        }), (0, l.default)(".daxx-form-validate input, .daxx-form-validate textarea").focus(function() {
            (0, l.default)(this).parent(".input-daxx").addClass("focus")
        }), (0, l.default)(".daxx-form-validate input, .daxx-form-validate textarea").blur(function() {
            (0, l.default)(this).val(l.default.trim((0, l.default)(this).val())), (0, l.default)(this).parent(".input-daxx").removeClass("focus")
        }), (0, l.default)('.daxx-form-validate input[type="checkbox"]').change(function() {
            (0, l.default)(this).prop("checked") ? (0, l.default)(this).parent(".input-daxx, .checkbox-daxx").removeClass("error invalid") : (0, l.default)(this).parent(".input-daxx, .checkbox-daxx").addClass("error invalid")
        }), (0, l.default)(".daxx-form-validate").submit(function(e) {
            if (this.checkValidity && !this.checkValidity()) return console.log("no-submit"), e.preventDefault(), (0, l.default)(this).find("input[type=text], textarea").each(function() {
                o(this)
            }), void(0, l.default)(this).find('input[type="checkbox"], textarea').each(function() {
                (0, l.default)(this).trigger("change")
            });
            (0, l.default)(this).hasClass("no-clear") || (console.log("submit"), (0, l.default)(this).parent("form").find(".input-field-daxx, .checkbox-daxx input").each(function() {
                o(this), (0, l.default)(this).val("").prop("checked", !1).prop("selected", !1)
            }))
        }), (0, l.default)("#form-dev-cv").length && (0, l.default)("#form-dev-cv").on("submit", function(e) {
            e.preventDefault(), this.checkValidity && !this.checkValidity() || l.default.ajax({
                type: "post",
                url: "/sendform",
                data: (0, l.default)(this).serialize(),
                success: function(e) {
                    var t = JSON.parse(e).file,
                        a = document.createElement("a");
                    a.href = t, (0, l.default)(a).attr("target", "_blank"), (0, l.default)(a).attr("download", "developer-cv"), document.body.appendChild(a), a.click(), document.body.removeChild(a)
                }
            })
        }), (0, l.default)("#subscribe").length && (0, l.default)("#subscribe form").on("submit", function(e) {
            e.preventDefault(), this.checkValidity && !this.checkValidity() || l.default.ajax({
                type: "post",
                url: "/subscribe",
                data: (0, l.default)(this).serialize(),
                success: function() {
                    (0, l.default)("#subscribe").addClass("show-msg")
                },
                error: function() {
                    (0, l.default)("#subscribe").addClass("show-error")
                }
            })
        })), (0, l.default)("input, select, textarea").on("invalid", function(e) {
            e.preventDefault()
        }), (0, l.default)("header .navbar-toggler").click(function() {
            "true" === (0, l.default)(this).attr("aria-expanded") ? (0, l.default)("body").removeClass("opened-menu") : (0, l.default)("body").addClass("opened-menu")
        }), (0, l.default)(".team-form").length && ((0, l.default)(".modal").on("hidden.bs.modal", function() {
            (0, l.default)(".team-form").find(".input-field-daxx, .checkbox-daxx input").each(function() {
                i(this)
            })
        }), (0, l.default)(".modal").on("show.bs.modal", function() {
            (0, l.default)(".team-form").find(".input-field-daxx, .checkbox-daxx input").each(function() {
                i(this)
            })
        })), (0, l.default)(".image-enlarge").length && (0, l.default)(".image-enlarge").magnificPopup({
            type: "image",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        });
        var a = (0, l.default)("#author-select").find("option:selected").text();
        (0, l.default)("#author-select").attr("title", a), (0, l.default)("header .contact-md a").click(function(e) {
            e.preventDefault(), (0, l.default)(".navbar-collapse").collapse("hide"), (0, l.default)("body").removeClass("opened-menu"), (0, l.default)("html, body").animate({
                scrollTop: (0, l.default)("#footer .form-black").eq(0).offset().top
            }, 1e3)
        })
    }), (0, l.default)(window).on("load", function() {
        (0, l.default)(".mansory-contact").length && (0, l.default)(".mansory-contact").masonry({
            itemSelector: ".grid-item",
            percentPosition: !0,
            columnWidth: ".grid-sizer"
        }), (0, l.default)(".content a").each(function() {
            var e = (0, l.default)(this).attr("href");
            e && -1 !== e.indexOf("http") && -1 === e.indexOf("daxx.com") && "_blank" !== (0, l.default)(this).attr("target") && (0, l.default)(this).attr("target", "_blank")
        }), (0, l.default)("#main").css("margin-top", (0, l.default)("header").outerHeight())
    });
    var o = function(e) {
            (0, l.default)(e).val().length && !(0, l.default)(e).is(":valid") ? (0, l.default)(e).parent(".input-daxx, .checkbox-daxx").addClass("error invalid").addClass("filled") : (0, l.default)(e).is(":valid") ? (0, l.default)(e).parent(".input-daxx, .checkbox-daxx").removeClass("error").removeClass("invalid").addClass("filled") : (0, l.default)(e).parent(".input-daxx, .checkbox-daxx").addClass("error").removeClass("filled").removeClass("invalid")
        },
        i = function(e) {
            (0, l.default)(e).val("").prop("checked", !1).prop("selected", !1), (0, l.default)(e).parent(".input-daxx, .checkbox-daxx").removeClass("error").removeClass("invalid").removeClass("filled")
        },
        s = function(e) {
            var t = window.location.pathname;
            return e.map(function(e) {
                return '\n    <div class="col-12 col-lg-6 developer">\n      <div class="d-flex flex-column bgc-body p-4">\n        <div class="d-flex justify-content-between"><h4 class="mb-0">\n        <a href="' + t + "/" + e.alias + '">' + (e.name || "") + '</a></h4><h6 class="color-gray-3">ID : ' + e.id + '</h6></div>\n        <h6 class="mb-4">Senior Back-end Developer  |  ' + (e.experience || "") + ' years of experience</h6>\n        <p class="fs-14 mb-4">' + (e.short || "") + '</p>\n        <div class="mt-auto d-flex flex-wrap mb-2">\n          <img src="' + e.specialisation_logo + '" class="img-fluid logo" alt="name">\n          <div class="ml-3">\n            <p class="fs-12 color-gray-3 mb-2">Specialisation</p>\n            <h6 class="fs-14">' + (e.specialisation || "") + '</h6>\n          </div>\n          <div class="ml-0 ml-sm-auto btn-wrap">\n            <a href="' + t + "/" + e.alias + '" class="btn btn-t">download cv</a>\n          </div>\n        </div>\n        <div class="stack d-flex flex-wrap">\n          ' + r(e.technologies) + "\n        </div>\n      </div>\n    </div>\n  "
            }).join("")
        },
        r = function(e) {
            return e.map(function(e) {
                return '<span class="label-primary">' + e.name + "</span>"
            }).join("")
        },
        u = function() {
            (0, l.default)("body").hasClass("home") && v(4)
        },
        c = function() {
            (0, l.default)("#collapseFilters").collapse("hide")
        },
        f = function() {
            (0, l.default)("body").hasClass("home") && v(9)
        },
        p = function() {
            (0, l.default)("#collapseFilters").collapse("show")
        },
        h = function() {
            (0, l.default)(".testimonials-list").slick({
                centerMode: !0,
                dots: !0,
                infinite: !1,
                slidesToShow: 1,
                centerPadding: 0,
                prevArrow: '<span class="slick-prev"></span>',
                nextArrow: '<span class="slick-next"></span>',
                appendArrows: ".testimonials .slider-nav",
                appendDots: ".testimonials .slider-nav",
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        variableWidth: !0,
                        dots: !0,
                        prevArrow: '<span class="slick-prev"></span>',
                        nextArrow: '<span class="slick-next"></span>',
                        appendArrows: ".testimonials .slider-nav",
                        appendDots: ".testimonials .slider-nav"
                    }
                }]
            })
        },
        m = function() {
            (0, l.default)(".testimonials-list.slick-slider").slick("unslick")
        },
        v = function(e) {
            d || (d = (0, l.default)(".home .techs-to-cut .tech-wrap")), e--;
            var t = d.map(function(t, a) {
                if (t < e || d.length === ++t) return a
            });
            (0, l.default)(".home .techs-to-cut").empty().append(t)
        };
    (0, l.default)("header .dropdown").on("show.bs.dropdown", function() {
        (0, l.default)(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(), (0, l.default)("body").addClass("menu-expanded")
    }), (0, l.default)("header .dropdown").on("hide.bs.dropdown", function() {
        (0, l.default)(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(), (0, l.default)("body").removeClass("menu-expanded")
    });
    var x = 0,
        b = (0, l.default)("header").outerHeight();
    (0, l.default)(window).scroll(function() {
        b = (0, l.default)("header").outerHeight(),
            function() {
                var e = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
                (0, l.default)(".scroll-progress .progress").width(e + "%")
            }(),
            function() {
                var e = (0, l.default)(window).scrollTop();
                Math.abs(x - e) <= 5 || (e > x && e > b ? (0, l.default)("header").removeClass("nav-down").addClass("nav-up") : e + (0, l.default)(window).height() < (0, l.default)(document).height() && (0, l.default)("header").removeClass("nav-up").addClass("nav-down"), x = e)
            }()
    })
}, function(e, t) {
    e.exports = jQuery
}, function(e, t) {}]);


