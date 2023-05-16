var TENC = TENC || {};
!function (e) {
    TENC.ajax = {
        el: {wrapper: e(".tenc-blog-list__wrapper--ajaxed"), posts_wrapper: e(".tenc-blog-list__wrapper")},
        get_blogposts: function (t, a) {
            e.get(t).success(function (t) {
                e(t).filter(".tenc-blog-list").find(".tenc-blog-list__wrapper--ajaxed").children().insertBefore(a), e(a).remove()
            })
        },
        init: function () {
            var t = this;
            t.el.posts_wrapper.on("click", ".tenc-blog__load-more a", function (a) {
                a.preventDefault();
                var n = e(a.target).parent();
                t.get_blogposts(a.target.href, n)
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.animations = {
        init: function () {
            e(window).innerWidth > 768 && e(window).on("scroll", function () {
                var t = e(window).scrollTop();
                e(".tenc-intro").css({"background-size": 100 + parseInt(t / 35, 0) + "% "}), e(".tenc-intro__text").css({
                    "margin-top": t / 3 * -1 + "px",
                    opacity: 1 - t / 400
                })
            }), e(function () {
                window.sr = new ScrollReveal({
                    scale: 1,
                    mobile: !1,
                    duration: 500,
                    viewFactor: .4
                }).reveal(".tenc-animated--scaleToUp", {
                    origin: "bottom",
                    distance: "100px",
                    scale: 0,
                    duration: 1500
                }).reveal(".tenc-animated--scaleDownToUp", {
                    origin: "bottom",
                    distance: "20px",
                    scale: 1.1,
                    duration: 1500
                }).reveal(".tenc-animated--scaleToRight", {
                    origin: "left",
                    scale: 0,
                    duration: 700
                }).reveal(".tenc-animated--fadeLeft", {
                    origin: "left",
                    distance: "-100%",
                    scale: 1.5,
                    duration: 700
                }).reveal(".tenc-animated--fadeRight", {
                    origin: "left",
                    distance: "100%",
                    scale: .8,
                    duration: 700
                }).reveal(".tenc-animated--fade", {
                    origin: "top",
                    distance: "0",
                    scale: .98
                }).reveal(".tenc-animated--fadeSequence", {
                    origin: "top",
                    distance: "0",
                    scale: .98
                }, 100).reveal(".tenc-animated--fadeDown", {
                    origin: "top",
                    distance: "10px"
                }).reveal(".tenc-animated--fadeDownDelay", {
                    origin: "top",
                    distance: "10px"
                }).reveal(".tenc-animated--fadeDownSequence", {
                    origin: "top",
                    distance: "10px"
                }, 250).reveal(".tenc-stats-row__digit", {
                    origin: "top",
                    distance: "10px"
                }, 250).reveal(".tenc-animated--fadeUp", {origin: "bottom"}).reveal(".tenc-animated--fadeUpSequence", {
                    origin: "bottom",
                    distance: "10px"
                }, 250).reveal(".tenc-animated--fast", {duration: 250}).reveal(".tenc-animated--delay1", {delay: 100}).reveal(".tenc-animated--delay2", {delay: 300}).reveal(".tenc-animated--delay3", {delay: 500}).reveal(".tenc-animated--delay4", {delay: 700}).reveal(".tenc-animated--delay5", {delay: 900}).reveal(".tenc-animated--delay6", {delay: 1100}).reveal(".tenc-animated--delay7", {delay: 1300}).reveal(".tenc-animated--delay8", {delay: 1500}).reveal(".tenc-animated--delay9", {delay: 1700})
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    e.fn.isOnScreen = function (t) {
        var a = e(window), n = this.offset(), i = {};
        return i.top = a.scrollTop(), i.bottom = i.top + a.height(), n.bottom = n.top + this.outerHeight(), !(i.bottom < n.top + a.height() / t || i.top > n.bottom - a.height() / t)
    }, TENC.blog = {
        blog: function () {
            var t = e(".tenc-blog-post"), a = e(".tenc-blog-post__content"),
                n = e(".tenc-blog-post__writer .tenc-social-icons__item"), i = t.find("img.alignleft"),
                s = t.find("figure.alignleft"), o = (a.find("figure").find("figcaption"), t.find("img.aligncenter")),
                l = t.find("figure.aligncenter"), r = t.find("img.alignright"), c = t.find("figure.alignright"),
                d = t.find("img.alignnone"), m = t.find("figure.alignnone"), f = e(".tenc-blog-post iframe"),
                h = (e(".tenc-blog-post iframe"), window.location.href, e(".essb_displayed_sidebar"));
            a.children("p").filter(function () {
                return !e(this).has("img").length && e(this).text().length > 5
            }).eq(0).addClass("tenc-blog-post__content--bold"), a.children("p").filter(function () {
                return !e(this).has("img").length && e(this).text().length > 5
            }).eq(1).addClass("tenc-blog-post__content--capital"), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && a.find(".tenc-blog-post__content--capital").wrapInner("<span></span>"), a.find("p").has("img").addClass("tenc-blog-post--elHasImg"), a.find("figure").has("img").parent().addClass("tenc-blog-post--elHasImg"), a.find("blockquote").find("p").addClass("tenc-blog-post--quoteHasP"), i.addClass("tenc-blog-post__el--left"), s.css("width", "").addClass("tenc-blog-post__el--left tenc-blog-post__el--left-cap"), o.addClass("tenc-blog-post__el--center"), l.css("width", "").addClass("tenc-blog-post__el--center tenc-blog-post__el--center-cap"), r.addClass("tenc-blog-post__el--right"), c.css("width", "").addClass("tenc-blog-post__el--right tenc-blog-post__el--right-cap"), d.addClass("tenc-blog-post__el--wide"), m.css("width", "").addClass("tenc-blog-post__el--wide tenc-blog-post__el--wide-cap"), f.filter(function () {
                return "left" === e(this).css("text-align")
            }).addClass("tenc-blog-post__el-vid--left"), f.filter(function () {
                return "center" === e(this).css("text-align")
            }).addClass("tenc-blog-post__el-vid--center"), f.filter(function () {
                return "right" === e(this).css("text-align")
            }).addClass("tenc-blog-post__el-vid--right"), f.parent().css("padding", "0"), screen.width <= 768 && n.detach().appendTo(".tenc-blog-post__writer .tenc-blog__author-name").append("<br />"), screen.width >= 1024 && e(window).on("resize scroll", function () {
                a && (e(document).scrollTop() >= e(window).height() / 1.4 && a.isOnScreen(2) ? h.css("opacity", "1") : h.css("opacity", "0"))
            })
        }, init: function () {
            e("body").hasClass("single-post") && this.blog()
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.caseStudies = {
        el: {
            menuItem: e('[data-element="tenc-cs__menu-item"]'),
            showcaseItem: e('[data-element="tenc-cs__showcase-item"]'),
            navItem: e('[data-element="tenc-cs__navbar-item"]')
        }, init: function () {
            var t = this;
            t.el.navItem.eq(0).addClass("tenc-cs__navbar-item--active"), t.el.menuItem.eq(0).addClass("tenc-cs__menu-item--active"), t.el.showcaseItem.eq(0).addClass("tenc-cs__showcase-item--active"), t.el.menuItem.on("mouseover", function () {
                var a = e(this).attr("data-target");
                t.el.navItem.eq(0).removeClass("tenc-cs__navbar-item--active"), t.el.menuItem.removeClass("tenc-cs__menu-item--active"), t.el.showcaseItem.eq(0).removeClass("tenc-cs__showcase-item--active"), e(this).addClass("tenc-cs__menu-item--active"), t.el.showcaseItem.each(function () {
                    var t = e(this).attr("data-target");
                    e(this).toggleClass("tenc-cs__showcase-item--active", t === a)
                }), t.el.navItem.each(function () {
                    var t = e(this).attr("data-target");
                    e(this).toggleClass("tenc-cs__navbar-item--active", t === a)
                })
            }), e(window).on("scroll", function () {
                var t = e(".tenc-case-studies-two-cases__case--glucosemama");
                t.length > 0 && (e(document).scrollTop() >= e(".tenc-case-studies-two-cases__case--glucosemama").position().top - 500 ? (e(".tenc-case-studies-two-cases__case").css("background", "#a0bafd"), e(".button-gradient--case-study-front--dark-bg").css("background", "transparent")) : e(".tenc-case-studies-two-cases__case").css("background", "#202020"))
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.contactModalSend = {
        el: {
            form: e('[data-element="tenc-modal-form"]'),
            contactHeading: e(".tenc-contact-page__heading"),
            contactModalHeading: e(".tenc-contact-modal__heading"),
            contactModalSubheading: e(".tenc-contact-modal__subheading"),
            modalContactFormWrapper: e(".tenc-contact-modal__contact-form-wrapper"),
            modalContactForm: e(".tenc-contact-modal__contact-form"),
            thanks: e('[data-element="contact-form-modal-thanks"]'),
            select: e('[data-element="select"]'),
            selectOptional: e('[data-value="select-optional"]')
        }, addEmptyClassName: function (e) {
            var t = "empty";
            "" === e.val() ? e.addClass(t) : e.removeClass(t)
        }, init: function () {
            {
                var t = this, a = t.el.form.find("input, textarea"), n = "tenc-contact-modal__thanks--visible",
                    i = "focused", s = this.el.form.find(".tenc-contact__message--main");
                this.el.form.find("#checkboxModalTerms")
            }
            t.el.select.select2({
                placeholder: function () {
                    e(this).data("placeholder")
                }
            }), s.on("paste input", function () {
                for (e(this).outerHeight() > this.scrollHeight && e(this).height(1); e(this).outerHeight() < this.scrollHeight;) e(this).height(e(this).height() + 1)
            }), a.on({
                focus: function () {
                    e(this).addClass(i), t.addEmptyClassName(e(this))
                }, blur: function () {
                    a.each(function () {
                        e(this).val(e(this).val().trim()), t.addEmptyClassName(e(this))
                    }), e(this).removeClass(i), t.addEmptyClassName(e(this))
                }
            }), e(document).ready(function () {
                a.each(function () {
                    t.addEmptyClassName(e(this))
                }), t.el.selectOptional.next().find(".select2-selection__placeholder").append('<span class="tenc-contact__optional"> (optional)</span>')
            }), t.el.form.validate({
                errorElement: "span", errorClass: "tenc-contact__error", errorPlacement: function (e, t) {
                    e.appendTo(t.is(":checkbox") ? t : t.parent())
                }, rules: {
                    MMERGE2: {
                        normalizer: function (e) {
                            var t = e;
                            return t && "http://" !== t.substr(0, 7) && "https://" !== t.substr(0, 8) && "ftp://" !== t.substr(0, 6) && (t = "http://" + t), t
                        }
                    }, checkboxModalTerms: {required: !0}
                }, submitHandler: function (a) {
                    nameVal = e('[data-element="form-modal-name"]').val(), t.el.thanks.addClass(n);
                    var i = {
                        _autopilot_session_id: e('[data-element="tenc-modal-form"] #tenc-formautopilotid').val(),
                        FirstName: e('[data-element="tenc-modal-form"] #tenc-formfirstname').val(),
                        LastName: e('[data-element="tenc-modal-form"] #tenc-formlastname').val(),
                        Email: e('[data-element="tenc-modal-form"] #tenc-formemail').val(),
                        LeadSource: e('[data-element="tenc-modal-form"] #tenc-formhearfrom').val(),
                        custom: {
                            "boolean--NDA": e('[data-element="tenc-modal-form"] #checkboxModalNda').is(":checked"),
                            "string--Message": e('[data-element="tenc-modal-form"] #tenc-formmsg').val(),
                            "string--PhoneNumber": e('[data-element="tenc-modal-form"] #tenc-formphone').val(),
                            "string--First--Click--Campaign": e('[data-element="tenc-modal-form"] #fc-campaign').val(),
                            "string--First--Click--Channel": e('[data-element="tenc-modal-form"] #fc_channel').val(),
                            "string--First--Click--Content": e('[data-element="tenc-modal-form"] #fc_content').val(),
                            "string--First--Click--Landing": e('[data-element="tenc-modal-form"] #fc_landing').val(),
                            "string--First--Click--Medium": e('[data-element="tenc-modal-form"] #fc_medium').val(),
                            "string--First--Click--Referrer": e('[data-element="tenc-modal-form"] #fc_referrer').val(),
                            "string--First--Click--Source": e('[data-element="tenc-modal-form"] #fc_source').val(),
                            "string--First--Click--Term": e('[data-element="tenc-modal-form"] #fc_term').val(),
                            "string--Last--Click--Campaign": e('[data-element="tenc-modal-form"] #lc_campaign').val(),
                            "string--Last--Click--Channel": e('[data-element="tenc-modal-form"] #lc_channel').val(),
                            "string--Last--Click--Content": e('[data-element="tenc-modal-form"] #lc_content').val(),
                            "string--Last--Click--Landing": e('[data-element="tenc-modal-form"] #lc_landing').val(),
                            "string--Last--Click--Medium": e('[data-element="tenc-modal-form"] #lc_medium').val(),
                            "string--Last--Click--Referrer": e('[data-element="tenc-modal-form"] #lc_referrer').val(),
                            "string--Last--Click--Source": e('[data-element="tenc-modal-form"] #lc_source').val(),
                            "string--Last--Click--Term": e('[data-element="tenc-modal-form"] #lc_term').val(),
                            "string--Operating--System": e('[data-element="tenc-modal-form"] #OS').val(),
                            "string--Google--Analytics--CID": e('[data-element="tenc-modal-form"] #GA_Client_ID').val(),
                            "string--All--Traffic--Sources": e('[data-element="tenc-modal-form"] #all_traffic_sources').val(),
                            "string--Browser": e('[data-element="tenc-modal-form"] #browser').val(),
                            "string--City--(from--IP--address)": e('[data-element="tenc-modal-form"] #city').val(),
                            "string--Country--(from--IP--address)": e('[data-element="tenc-modal-form"] #country').val(),
                            "string--Device": e('[data-element="tenc-modal-form"] #device').val(),
                            "string--Number--of--Website--Visits": e('[data-element="tenc-modal-form"] #page_visits').val(),
                            "string--Pages--Visited": e('[data-element="tenc-modal-form"] #pages_visited_list').val(),
                            "string--Region": e('[data-element="tenc-modal-form"] #region').val(),
                            "string--Time--Zone": e('[data-element="tenc-modal-form"] #time_zone').val(),
                            "string--Time--Spent--on--Website": e('[data-element="tenc-modal-form"] #time_passed').val(),
                            "string--Latitude": e('[data-element="tenc-modal-form"] #latitude').val(),
                            "string--Longitude": e('[data-element="tenc-modal-form"] #longitude').val()
                        }
                    }, s = new XMLHttpRequest;
                    s.open("POST.html", "/autopilot-integrator"), s.send(JSON.stringify(i)), e.ajax({
                        url: t.el.form.attr("action"),
                        type: "POST",
                        data: t.el.form.serialize(),
                        success: function (e) {
                            window.dataLayer && window.dataLayer.push({event: "formSubmitSuccess"})
                        }
                    });
                    var o = window.location.protocol + "//" + window.location.host + window.location.pathname + "?message-sent-modal";
                    window.history.pushState({path: o}, "", o), e(".tenc-contact-modal__thanks").find(".tenc-contact-modal__thanks-heading").prepend(nameVal + ", "), t.el.form.css("opacity", "0"), t.el.contactHeading.css("opacity", "0"), t.el.contactModalHeading.css("opacity", "0"), t.el.contactModalSubheading.css("opacity", "0"), t.el.modalContactForm.css("opacity", "0"), t.el.modalContactFormWrapper.css("overflow-y", "hidden"), e(".tenc-contact-modal__thanks").css("display", "flex").css("align-items", "center"), t.el.form.each(function () {
                        this.reset(), e("input, textarea").removeClass("valid tenc-contact__error").addClass("empty")
                    }), document.querySelector('[data-element="tenc-modal-form"] button').disabled = !0
                }
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.contactModal = {
        el: {
            form: e('[data-element="tenc-modal-form"]'),
            openModal: e(".tenc-contact-modal__open"),
            hideModal: e(".tenc-modal__close"),
            modal: e(".tenc-contact-modal"),
            modalLogo: e(".tenc-header__branding--contact-modal"),
            contactModalHeading: e(".tenc-contact-modal__heading"),
            contactModalSubheading: e(".tenc-contact-modal__subheading"),
            modalContactForm: e(".tenc-contact-modal__contact-form"),
            thanks: e('[data-element="contact-form-modal-thanks"]')
        }, openModal: function () {
            var t = this;
            this.el.openModal.on("click", function () {
                document.querySelector('[data-element="tenc-modal-form"] button').disabled = !1, t.el.modal.fadeIn(150), e("body, html").css("overflow-y", "hidden"), t.el.contactModalHeading.css("opacity", "1"), t.el.contactModalSubheading.css("opacity", "1"), t.el.modalContactForm.css("opacity", "1"), t.el.thanks.removeClass("tenc-contact-modal__thanks--visible")
            })
        }, hideModal: function () {
            var t = this;
            this.el.hideModal.on("click", function () {
                t.el.modal.fadeOut(150), e("body, html").css("overflow-y", "auto")
            })
        }, toggleSmallHeight: function () {
            var t = this, a = 900, n = e(window).height() < a;
            n ? (e(".tenc-contact-modal__contact-form-wrapper").addClass("tenc-contact-modal__contact-form-wrapper--small-height"), e(".tenc-contact-modal__testimonial").addClass("tenc-contact-modal__testimonial--small-height"), t.el.modalLogo.hide()) : (e(".tenc-contact-modal__contact-form-wrapper").removeClass("tenc-contact-modal__contact-form-wrapper--small-height"), e(".tenc-contact-modal__testimonial").removeClass("tenc-contact-modal__testimonial--small-height"), t.el.modalLogo.show())
        }, init: function () {
            var t = this;
            t.openModal(), t.hideModal(), document.addEventListener("keyup", function (a) {
                27 == a.keyCode && (t.el.modal.fadeOut(150), e("body, html").css("overflow-y", "auto"))
            }), t.toggleSmallHeight(), e(window).resize(function () {
                t.toggleSmallHeight()
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.contact = {
        el: {
            form: e('[data-element="tenc-form"]'),
            formContactUs: e(".tenc-contact-page__contact-form"),
            contactHeading: e(".tenc-contact-page__heading"),
            contactModalHeading: e(".tenc-contact-modal__heading"),
            contactModalSubheading: e(".tenc-contact-modal__subheading"),
            modalContactForm: e(".tenc-contact-modal__contact-form"),
            thanks: e('[data-element="contact-form-thanks"]'),
            select: e('[data-element="select"]'),
            selectOptional: e('[data-value="select-optional"]'),
            contactBar: e(".tenc-contact__bar"),
            contactBarTextarea: e("textarea ~ .tenc-contact__bar")
        }, addEmptyClassName: function (e) {
            var t = "empty";
            "" === e.val() ? e.addClass(t) : e.removeClass(t)
        }, init: function () {
            {
                var t = this, a = t.el.form.find("input, textarea"), n = "tenc-contact__thanks--visible", i = "focused",
                    s = this.el.form.find(".tenc-contact__message--main");
                this.el.form.find("#checkboxTerms")
            }
            t.el.select.select2({
                placeholder: function () {
                    e(this).data("placeholder")
                }
            }), -1 != navigator.appVersion.indexOf("Chrome/index.html") ? (t.el.contactBar.css("bottom", "25px"), t.el.contactBarTextarea.css("bottom", "29px")) : t.el.contactBarTextarea.css("bottom", "25px"), s.on("paste input", function () {
                if (e(this).outerHeight() > this.scrollHeight && e(this).height(1), e(this).outerHeight() < 200) for (; e(this).outerHeight() < this.scrollHeight;) e(this).height(e(this).height() + 1)
            }), a.on({
                focus: function () {
                    e(this).addClass(i), t.addEmptyClassName(e(this))
                }, blur: function () {
                    a.each(function () {
                        e(this).val(e(this).val().trim()), t.addEmptyClassName(e(this))
                    }), e(this).removeClass(i), t.addEmptyClassName(e(this))
                }
            }), e(document).ready(function () {
                a.each(function () {
                    t.addEmptyClassName(e(this))
                }), t.el.selectOptional.next().find(".select2-selection__placeholder").append('<span class="tenc-contact__optional"> (optional)</span>')
            }), t.el.form.validate({
                errorElement: "span", errorClass: "tenc-contact__error", errorPlacement: function (e, t) {
                    e.appendTo(t.is(":checkbox") ? t : t.parent())
                }, rules: {
                    MMERGE2: {
                        normalizer: function (e) {
                            var t = e;
                            return t && "http://" !== t.substr(0, 7) && "https://" !== t.substr(0, 8) && "ftp://" !== t.substr(0, 6) && (t = "http://" + t), t
                        }
                    }, checkboxTerms: {required: !0}
                }, submitHandler: function (a) {
                    nameVal = e('[data-element="form-first-name"]').val(), t.el.thanks.addClass(n);
                    var i = {
                        _autopilot_session_id: e('[data-element="tenc-form"] #tenc-formautopilotid').val(),
                        FirstName: e('[data-element="tenc-form"] #tenc-formfirstname').val(),
                        LastName: e('[data-element="tenc-form"] #tenc-formlastname').val(),
                        Email: e('[data-element="tenc-form"] #tenc-formemail').val(),
                        LeadSource: e('[data-element="tenc-form"] #tenc-formhearfrom').val(),
                        custom: {
                            "boolean--NDA": e('[data-element="tenc-form"] #checkboxNda').is(":checked"),
                            "string--Message": e('[data-element="tenc-form"] #tenc-formmsg').val(),
                            "string--PhoneNumber": e('[data-element="tenc-form"] #tenc-formphone').val(),
                            "string--First--Click--Campaign": e('[data-element="tenc-form"] #fc-campaign').val(),
                            "string--First--Click--Channel": e('[data-element="tenc-form"] #fc_channel').val(),
                            "string--First--Click--Content": e('[data-element="tenc-form"] #fc_content').val(),
                            "string--First--Click--Landing": e('[data-element="tenc-form"] #fc_landing').val(),
                            "string--First--Click--Medium": e('[data-element="tenc-form"] #fc_medium').val(),
                            "string--First--Click--Referrer": e('[data-element="tenc-form"] #fc_referrer').val(),
                            "string--First--Click--Source": e('[data-element="tenc-form"] #fc_source').val(),
                            "string--First--Click--Term": e('[data-element="tenc-form"] #fc_term').val(),
                            "string--Last--Click--Campaign": e('[data-element="tenc-form"] #lc_campaign').val(),
                            "string--Last--Click--Channel": e('[data-element="tenc-form"] #lc_channel').val(),
                            "string--Last--Click--Content": e('[data-element="tenc-form"] #lc_content').val(),
                            "string--Last--Click--Landing": e('[data-element="tenc-form"] #lc_landing').val(),
                            "string--Last--Click--Medium": e('[data-element="tenc-form"] #lc_medium').val(),
                            "string--Last--Click--Referrer": e('[data-element="tenc-form"] #lc_referrer').val(),
                            "string--Last--Click--Source": e('[data-element="tenc-form"] #lc_source').val(),
                            "string--Last--Click--Term": e('[data-element="tenc-form"] #lc_term').val(),
                            "string--Operating--System": e('[data-element="tenc-form"] #OS').val(),
                            "string--Google--Analytics--CID": e('[data-element="tenc-form"] #GA_Client_ID').val(),
                            "string--All--Traffic--Sources": e('[data-element="tenc-form"] #all_traffic_sources').val(),
                            "string--Browser": e('[data-element="tenc-form"] #browser').val(),
                            "string--City--(from--IP--address)": e('[data-element="tenc-form"] #city').val(),
                            "string--Country--(from--IP--address)": e('[data-element="tenc-form"] #country').val(),
                            "string--Device": e('[data-element="tenc-form"] #device').val(),
                            "string--Number--of--Website--Visits": e('[data-element="tenc-form"] #page_visits').val(),
                            "string--Pages--Visited": e('[data-element="tenc-form"] #pages_visited_list').val(),
                            "string--Region": e('[data-element="tenc-form"] #region').val(),
                            "string--Time--Zone": e('[data-element="tenc-form"] #time_zone').val(),
                            "string--Time--Spent--on--Website": e('[data-element="tenc-form"] #time_passed').val(),
                            "string--Latitude": e('[data-element="tenc-form"] #latitude').val(),
                            "string--Longitude": e('[data-element="tenc-form"] #longitude').val()
                        }
                    }, s = new XMLHttpRequest;
                    s.open("POST.html", "/autopilot-integrator"), s.send(JSON.stringify(i)), e.ajax({
                        url: t.el.form.attr("action"),
                        type: "POST",
                        data: t.el.form.serialize(),
                        success: function (e) {
                            window.dataLayer && window.dataLayer.push({event: "formSubmitSuccess"})
                        }
                    });
                    var o = window.location.protocol + "//" + window.location.host + window.location.pathname + "?message-sent";
                    window.history.pushState({path: o}, "", o), e(".tenc-contact-modal__thanks").find(".tenc-contact-modal__thanks-heading").prepend(nameVal + ", "), t.el.form.css("opacity", "0"), t.el.contactHeading.css("opacity", "0"), t.el.contactModalHeading.css("opacity", "0"), t.el.contactModalSubheading.css("opacity", "0"), t.el.modalContactForm.css("opacity", "0"), t.el.form.each(function () {
                        this.reset(), e("input, textarea").removeClass("valid tenc-contact__error").addClass("empty")
                    }), document.querySelector('[data-element="tenc-modal-form"] button').disabled = !0
                }
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.cookies = {
        el: {
            hideBtn: e("#cookies-hide"),
            infobarBtn: e('[data-element="infoBar-hide"]'),
            infoBar: e('[data-element="infoBar"]')
        }, init: function () {
            var t = this, a = t.el.hideBtn, n = t.el.infobarBtn, i = t.el.infoBar;
            null === localStorage.getItem("showConsent") ? (a.parent().addClass("tenc-header__cookies--visible"), a.on("click", function () {
                e(this).parent().fadeOut(), localStorage.setItem("showConsent", !1)
            })) : a.parent().removeClass("tenc-header__cookies--visible"), null === localStorage.getItem("showInfo") && (i.fadeIn(), n.on("click", function () {
                i.fadeOut(), localStorage.setItem("showInfo", !1)
            }))
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.hamburger = {
        el: {
            body: e("body"),
            burger: e('[data-element="burger"]'),
            navItem: e('[data-element="nav-item"]'),
            nav: e('[data-element="nav"]')
        },
        classNames: {
            burger: {opened: "tenc-burger--menu-opened", closed: "tenc-burger--menu-closed"},
            body: {opened: "menu--open"}
        },
        isOpen: !1,
        init: function () {
            var t = this, a = t.el.burger, n = t.el.body;
            a.on("click", function () {
                t.isMenuOpen ? (a.removeClass(t.classNames.burger.opened).addClass(t.classNames.burger.closed), n.removeClass(t.classNames.body.opened), t.isMenuOpen = !1) : (a.removeClass(t.classNames.burger.closed).addClass(t.classNames.burger.opened), n.addClass(t.classNames.body.opened), t.isMenuOpen = !0)
            }), t.el.navItem.on("mouseover", function () {
                var a = e(this).attr("data-anchor");
                t.el.nav.removeClass().addClass("tenc-header__navigation tenc-header__navigation--main").toggleClass("tenc-header__navigation-" + a)
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.header = {
        el: {
            header: e('[data-element="floating-header"]'),
            blogSubheader: e('[data-element="floating-blog-subheader"]'),
            navButton: e('[data-element="nav-button"]'),
            win: e(window),
            introButton: e('[data-type="introButton"]'),
            infoBar: e(".tenc-info-bar"),
            infoBarClose: e(".tenc-info-bar__close")
        }, isVisible: !1, didScroll: !1, lastScrollTop: 0, toggleFloatingHeader: function () {
            var t = "tenc-header--floating-open", a = "tenc-header--floating-services", n = "tenc-intro__btn-removed",
                i = 200, s = "button-gradient--simple", o = e(".tenc-services-sub");
            o.is(":visible") ? this.isVisible && this.el.win.scrollTop() < i ? this.el.win.scrollTop() < i && (this.el.header.removeClass(t), this.el.header.removeClass(a), this.el.introButton.removeClass(n), this.el.navButton.addClass(s), this.isVisible = !1) : this.el.win.scrollTop() >= i && (this.el.header.addClass(t), this.el.header.addClass(a), this.el.navButton.removeClass(s), this.el.introButton.addClass(n), this.isVisible = !0) : this.isVisible && this.el.win.scrollTop() < i ? this.el.win.scrollTop() < i && (this.el.header.removeClass(t), this.el.navButton.addClass(s), this.isVisible = !1) : this.el.win.scrollTop() >= i && (this.el.header.addClass(t), this.el.navButton.removeClass(s), this.isVisible = !0)
        }, hideInfoBar: function () {
            var e = this;
            this.el.infoBarClose.on("click", function () {
                e.el.infoBar.fadeOut(150)
            })
        }, toggleHeaderOnScroll: function () {
            var e = this.el.win.width(), t = 10, a = (this.el.header.outerHeight(), this.el.win.scrollTop()),
                n = "tenc-header--blog--invisible";
            if (768 > e) {
                if (Math.abs(this.lastScrollTop - a) <= t) return;
                a > this.lastScrollTop ? this.el.header.addClass("tenc-header--hidden") : a < this.lastScrollTop && this.el.header.removeClass("tenc-header--hidden"), this.lastScrollTop = a
            } else {
                if (Math.abs(this.lastScrollTop - a) <= t) return;
                a > this.lastScrollTop ? this.el.blogSubheader.addClass(n) : a < this.lastScrollTop && this.el.blogSubheader.removeClass(n), this.lastScrollTop = a
            }
        }, init: function () {
            var e = this, t = 200;
            e.hideInfoBar(), e.el.win.on("scroll", _.throttle(e.toggleFloatingHeader.bind(e), t)), e.el.win.on("scroll", function (t) {
                e.didScroll = !0
            }), setInterval(function () {
                e.didScroll && (e.toggleHeaderOnScroll(), e.didScroll = !1)
            }, 250), e.toggleHeaderOnScroll()
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.modal = {
        el: {
            modalActivator: e(".modal-activator"),
            modalContainer: e("#modal-container"),
            fullVideoContainer: e(".tenc-full-video-container"),
            fullVideoActivator: e(".tenc-full-video-activator")
        }, openVideoModal: function () {
            var t = this;
            this.el.fullVideoActivator.click(function () {
                var a = e(this).attr("id");
                e("body, html").css("overflow-y", "hidden"), t.el.fullVideoContainer.append('<iframe src="https://www.youtube.com/embed/' + a + '?autoplay=1&rel=0&showinfo=0&theme=light&modestbranding=0" frameborder="0" allowfullscreen></iframe>')
            })
        }, closeVideoModal: function () {
            this.el.fullVideoContainer.empty(), this.el.modalContainer.removeAttr("class").addClass("out"), e("body, html").css("overflow-y", "auto")
        }, init: function () {
            var e = this;
            this.el.modalActivator.click(function () {
                e.el.modalContainer.removeAttr("class").addClass("active")
            }), this.el.modalContainer.click(function () {
                e.closeVideoModal()
            }), document.addEventListener("keyup", function (t) {
                27 == t.keyCode && e.closeVideoModal()
            }), e.openVideoModal()
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.newsletter = {
        el: {
            form: e('[data-element="tenc-newsletter-form"]'),
            thanks: e('[data-element="contact-form-thanks"]')
        }, init: function () {
            var t = this, a = "tenc-contact__thanks--visible";
            t.el.form.validate({
                errorElement: "span",
                errorClass: "tenc-contact__error",
                errorPlacement: function (e, t) {
                    e.appendTo(t.is(":checkbox") ? t : t.parent())
                },
                rules: {checkbox: {required: !0}},
                submitHandler: function (n) {
                    nameVal = e('[data-element="form-first-name"]').val(), t.el.thanks.addClass(a), e(".tenc-contact-modal__thanks").find(".tenc-contact-modal__thanks-heading").prepend(nameVal + ", "), t.el.form.css("opacity", "0"), document.querySelector('[data-element="tenc-newsletter-form"] button').disabled = !0
                }
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e, t) {
    TENC.progressbar = {
        el: {
            window: e(window),
            post: e('[data-element="post-content"]'),
            progressBar: e('[data-element="blog-post-progress-bar"]')
        }, getCurrentPercentagePosition: function () {
            var e = this, t = e.el.window.scrollTop();
            return Math.ceil(1e4 * (t - e.postOffsetTop + e.windowHeight / 2) / e.postHeight) / 100
        }, setProgressValue: function () {
            var e = this, t = e.getCurrentPercentagePosition();
            e.el.progressBar.width(0 > t ? 0 : t > 100 ? "100%" : e.getCurrentPercentagePosition() + "%")
        }, init: function () {
            var a = this, n = a.el.post;
            n.length && (a.postOffsetTop = n.offset().top, a.postHeight = n.height(), a.windowHeight = a.el.window.height(), a.setProgressValue(), e(window).on("scroll", t.throttle(function () {
                a.setProgressValue()
            }, 150)))
        }
    }
}(jQuery, _);
var TENC = TENC || {};
!function (e) {
    TENC.scroll = {
        el: {body: e("html, body"), intro: e(".tenc-intro")}, scrollOnClickToTarget: function (e, t, a, n) {
            var i = a || 1e3, s = this;
            e.on("click", function (e) {
                e.preventDefault(), t && s.el.body.animate({scrollTop: t.offset().top - n}, i)
            })
        }, scrollOnClickAfterFold: function (e) {
            var t = this.el.intro.height(), a = this;
            e.on("click", function (e) {
                e.preventDefault(), a.el.body.animate({scrollTop: t}, 500)
            })
        }, init: function () {
            this.scrollOnClickAfterFold(e('[data-element="scroll-after-fold"]')), this.scrollOnClickToTarget(e('[data-element="intro-anchor"]'), e('[data-anchor="after-intro"]'), 500, 0), this.scrollOnClickToTarget(e('[data-element="careers-jobs-btn"]'), e('[data-element="careers-jobs-section"]'), 500, 90), this.scrollOnClickToTarget(e('[data-element="contact-button"]'), e('[data-element="contact"]'), 1e3, 0), this.scrollOnClickToTarget(e('[data-element="blog-post-progress-bar-subscribe"]'), e('[data-element="tenc-form"]'), 1e3, 0)
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.servicesHover = {
        el: {
            serviceWrapper: e(".tenc-services-skills-light-services-wrapper"),
            serviceWrapperWhite: e(".tenc-services-skills-light-services-wrapper--white"),
            skills: e(".tenc-services-skills-light-services__item__skills"),
            readMoreButton: e(".tenc-services-skills-light-services__item__button")
        }, handleServiceHover: function () {
            var t = this, a = 1366, n = t.el.serviceWrapper, i = (t.el.serviceWrapperWhite, t.el.skills),
                s = t.el.readMoreButton;
            e(window).width() >= a ? (n.removeClass("tenc-services-skills-light-services-wrapper--white"), n.find(i).css("opacity", "0"), n.find(s).css("opacity", "0"), e(".tenc-services-skills-light-services-wrapper:first-of-type").addClass("tenc-services-skills-light-services-wrapper--white"), n.hasClass("tenc-services-skills-light-services-wrapper--white") && (e(".tenc-services-skills-light-services-wrapper--white").find(i).css("opacity", "1"), e(".tenc-services-skills-light-services-wrapper--white").find(s).css("opacity", "1")), t.el.serviceWrapper.on("mouseover", function (t) {
                e(this).siblings().removeClass("tenc-services-skills-light-services-wrapper--white"), e(this).siblings().find(i).css("opacity", "0"), e(this).siblings().find(s).css("opacity", "0"), e(this).addClass("tenc-services-skills-light-services-wrapper--white"), e(this).find(i).css("opacity", "1"), e(this).find(s).css("opacity", "1")
            })) : (n.addClass("tenc-services-skills-light-services-wrapper--white"), e(".tenc-services-skills-light-services-wrapper--white").find(i).css("opacity", "1"), e(".tenc-services-skills-light-services-wrapper--white").find(s).css("opacity", "1"))
        }, init: function () {
            var t = this;
            this.handleServiceHover(), e(window).resize(function () {
                t.handleServiceHover()
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.services = {
        el: {icon: e(".tenc-services-list__icon")}, handleScrollSpeed: function () {
            var t = this, a = t.el.icon;
            e(window).scroll(function () {
                a.each(function () {
                    e(this).css("margin-top", -e(window).scrollTop() / parseInt(e(this).attr("scrollSpeed")) + 80)
                })
            })
        }, init: function () {
            this.handleScrollSpeed()
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    function t(t) {
        var a = "tenc-slider__item--active", n = null, i = "tenc-slider__arrow--disabled",
            s = t.find('[data-element="tenc-slider__arrow-left"]'),
            o = t.find('[data-element="tenc-slider__arrow-right"]'), l = t.find('[data-element="tenc-slider__item"]'),
            r = ".tenc-slider--half", c = ".tenc-slider", d = ".tenc-slider--bullets", m = ".tenc-slider__bullet",
            f = "tenc-slider__bullet--active", h = "tenc-slider__active-slider", p = this, g = 1;
        p.addBullets = function () {
            for (var t = l.length, a = e(d).find(".tenc-slider__bullets"), n = 0; t > n; n++) a.append('<span class="tenc-slider__bullet"></span>')
        }, p.setFocusedSlider = function () {
            o.parents(c).addClass(h).siblings().removeClass(h), o.parents(r).addClass(h).siblings().removeClass(h), screen.width >= 768 && e(r).hasClass(h) ? g = 2 : (e(c).hasClass(h) || screen.width < 768 && e(r).hasClass(h)) && (g = 1)
        }, p.setActiveSlide = function (t) {
            t !== n && (l.eq(n).removeClass(a), l.eq(t).addClass(a), e(m).eq(n).removeClass(f), e(m).eq(t).addClass(f), l.css({transform: "translateX(-" + 100 * t + "%)"}), n = t, o.on("click", p.setFocusedSlider), e(m).on("click", p.setFocusedSlider), l.on("swipe", p.setFocusedSlider), n === l.length - g ? o.addClass(i) : o.removeClass(i), 0 === n ? s.addClass(i) : s.removeClass(i), e('[data-element="tenc-slider__item"]').hasClass("tenc-slider__item") && (e(".tenc-slider__item").find("a.button").attr("tabindex", "-1"), e(".tenc-slider__item--active").find("a.button").removeAttr("tabindex")))
        }, p.bindNavigationClick = function () {
            s.on("click", function () {
                n > 0 && p.setActiveSlide(n - 1)
            }), o.on("click", function () {
                n < l.length - 1 && p.setActiveSlide(n + 1)
            }), e(m).each(function (t, a) {
                e(a).on("click", function () {
                    p.setActiveSlide(t)
                })
            })
        }, p.bindNavigationSwipe = function () {
            l.swipe({
                swipeRight: function () {
                    n > 0 && p.setActiveSlide(n - 1)
                }, swipeLeft: function (e) {
                    o.hasClass(i) ? e.preventDefault() : n < l.length - 1 && p.setActiveSlide(n + 1)
                }, threshold: 50
            })
        }, p.addBullets(), p.setActiveSlide(0), p.bindNavigationClick(), p.bindNavigationSwipe()
    }

    TENC.slider = {
        init: function () {
            _.each(e('[data-element="tenc-slider"]'), function (a) {
                new t(e(a))
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    TENC.swiper = {
        el: {
            swiperLeft: e('[data-element="swiper-left"]'),
            swiperRight: e('[data-element="swiper-right"]'),
            swiperDisabledClass: "tenc-swiper__swipe-arrow--disabled",
            swipeItem: e(".tenc-swiper__item"),
            progressbar: e(".tenc-swiper__swipe-progressbar--color")
        }, moveLeft: function () {
            var t = this, a = (e(window).width(), 100 / (t.el.swipeItem.length - 1));
            this.el.swiperLeft.on("click", function () {
                t.el.progressbar.width() > 30 && (t.el.swipeItem.animate({
                    left: "+=" + (e(".tenc-swiper__item:first-of-type").outerWidth() + 40)
                }, 350), t.el.progressbar.width(t.el.progressbar.width() - a), 130 === t.el.progressbar.width() && t.el.swiperRight.removeClass(t.el.swiperDisabledClass), t.el.progressbar.width() === 30 + a && e(this).addClass(t.el.swiperDisabledClass))
            })
        }, moveRight: function () {
            var t = this, a = (e(window).width(), 100 / (t.el.swipeItem.length - 1));
            this.el.swiperRight.on("click", function () {
                t.el.progressbar.width() < 130 && (t.el.swipeItem.animate({left: "-=" + (e(".tenc-swiper__item:first-of-type").outerWidth() + 40)}, 350), t.el.progressbar.width(t.el.progressbar.width() + a), 30 === t.el.progressbar.width() && t.el.swiperLeft.removeClass(t.el.swiperDisabledClass), t.el.progressbar.width() === 130 - a && e(this).addClass(t.el.swiperDisabledClass))
            })
        }, swipe: function () {
            var t = this, a = (this.moveLeft, this.moveRight, 100 / (t.el.swipeItem.length - 1));
            this.el.swipeItem.swipe({
                swipeLeft: function (n, i, s, o, l) {
                    t.el.progressbar.width() < 130 && (t.el.swipeItem.animate({left: "-=" + (e(".tenc-swiper__item:first-of-type").outerWidth() + 40)}, 350), t.el.progressbar.width(t.el.progressbar.width() + a), 30 === t.el.progressbar.width() && t.el.swiperLeft.removeClass(t.el.swiperDisabledClass), t.el.progressbar.width() === 130 - a && t.el.swiperRight.addClass(t.el.swiperDisabledClass))
                }, swipeRight: function (n, i, s, o, l) {
                    t.el.progressbar.width() > 30 && (t.el.swipeItem.animate({left: "+=" + (e(".tenc-swiper__item:first-of-type").outerWidth() + 40)}, 350), t.el.progressbar.width(t.el.progressbar.width() - a), 130 === t.el.progressbar.width() && t.el.swiperRight.removeClass(t.el.swiperDisabledClass), t.el.progressbar.width() === 30 + a && t.el.swiperLeft.addClass(t.el.swiperDisabledClass))
                }, threshold: 30
            })
        }, init: function () {
            var e = this;
            e.moveLeft(), e.moveRight(), e.swipe(), e.el.swiperLeft.addClass("tenc-swiper__swipe-arrow--disabled")
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e) {
    function t(t) {
        var a = e(window), n = /Android|BlackBerry|iPhone|iPod|iPad|webOS/i.test(navigator.userAgent),
            i = /iPad/.test(navigator.userAgent);
        a.on("scroll load", function () {
            var t = e(".tenc-slider-vertical__img:first"), s = e(".tenc-slider-vertical__img:last"),
                o = a.scrollTop() + (a.height() - t.height()) / 1.5 >= t.data("original-offset-top"),
                l = a.scrollTop() + (a.height() - s.height()) / 1.5 <= s.data("original-offset-top"), r = o && l;
            e(".tenc-slider-vertical__wrapper").toggleClass("tenc-slider-vertical__wrapper--active", r), e(".tenc-slider-vertical__content").each(function () {
                i ? e(this).toggleClass("tenc-slider-vertical__content--active", e(this).isOnScreen(6)) : e(this).toggleClass("tenc-slider-vertical__content--active", e(this).isOnScreen(2.5))
            }), e(".tenc-slider-vertical__fixed-bg").each(function () {
                i ? e(this).find(".tenc-slider-vertical__img").toggleClass("tenc-slider-vertical__img--active", e(this).isOnScreen(4)) : e(this).find(".tenc-slider-vertical__img").toggleClass("tenc-slider-vertical__img--active", e(this).isOnScreen(2))
            }), n || e(".tenc-slider-vertical__wrapper .tenc-slider-vertical__img").css({"margin-left": r ? e(".tenc-slider-vertical__wrapper").offset().left : "inherit"})
        })
    }

    e.fn.offsetWindow = function () {
        var t = e(window), a = this.offset(), n = {};
        return n.top = t.scrollTop(), n.bottom = n.top + t.height(), {
            top: a.top - t.scrollTop(),
            left: a.left - t.scrollLeft()
        }
    }, e(window).on("load resize", function () {
        e(".tenc-slider-vertical__wrapper:not(.tenc-slider-vertical__wrapper--active) .tenc-slider-vertical__img").each(function () {
            e(this).data("original-offset-top", e(this).offset().top)
        })
    }), TENC.verticalSlider = {
        init: function () {
            e('[data-element="tenc-vertical-slider"]').each(function (a) {
                new t(e(a))
            })
        }
    }
}(jQuery);
var TENC = TENC || {};
!function (e, t) {
    TENC.video = {
        el: {
            mp4: e('[data-element="vid-bg-mp4"]'),
            webm: e('[data-element="vid-bg-webm"]'),
            video: e('[data-element="main-video"]'),
            customVideo: e('[data-element="custom-video"]'),
            customFullVideo: e('[data-element="video-full"]'),
            customVideoBtn: e('[data-element="video-play"]'),
            videoOverlay: e('[data-element="video-overlay"]')
        }, isVideoSet: !1, setVideoSource: function () {
            var e = this;
            t.innerWidth > 768 && !e.isVideoSet && (e.el.video.append('<source src="' + e.el.video.data("mp4") + '" type="video/mp4"></source>'), e.el.video.append('<source src="' + e.el.video.data("webm") + '" type="video/webm"></source>'), e.isVideoSet = !0)
        }, init: function () {
            var e = this;
            t.addEventListener("resize", function () {
                e.setVideoSource()
            }), e.setVideoSource(), e.el.customVideoBtn.on("click", function () {
                e.el.customVideo.hide(), e.el.videoOverlay.fadeOut(), e.el.customFullVideo[0].src += "&autoplay=1", e.el.customFullVideo.fadeIn()
            })
        }
    }
}(jQuery, window);
//# sourceMappingURL=components.js.map
