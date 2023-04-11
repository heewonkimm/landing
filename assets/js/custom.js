window.onload = function(){

    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {

            //헤더//updates_list slide down
            $('#updates_list').click(function () {
                $('.list_item').css('max-height', '102px');
                $('.bg_area').addClass('on');
                $('.button_area .close_btn').css({ "opacity": "1", "z-index": "30" });
                $('.memoji_link').addClass('on');
            });
            $('#updates_close').click(function () {
                $('.list_item').css('max-height', '8px');
                $('.bg_area').removeClass('on');
                $('.button_area .close_btn').css({ "opacity": "0", "z-index": "25" });
                $('.memoji_link').removeClass('on');
            });

            //헤더//nav slide left
            navMotion = gsap.timeline({
                paused: true,
                onComplete: function () {
                    $('.group_nav').addClass('on');
                }
            })
            navMotion
                .addLabel('a')
                .to(".group_nav .second", 1, { x: -80, width: 80, height: 37, ease: Back.easeInOut }, 'a')
                .to(".group_nav .third", 1, { x: -161, width: 80, height: 37, ease: Back.easeInOut }, 'a')
                .to(".group_nav .second span, .group_nav .third span", { opacity: 0 }, 'a-=0.2');

            $('.nav_link.first').mouseover(function () {
                if ($('.group_nav').hasClass('on')) {
                    navMotion.reverse()
                }
            });

            //200px 이상 스크롤 시 navMotion.play();
            $(window).scroll(function () {
                curr = $(this).scrollTop();

                if (curr > 80) {
                    navMotion.play();
                } else {
                    navMotion.reverse()
                }
            });

            //헤더//navUpdates sldie up
            updatesMotion = gsap.timeline({
                paused: true,
                onComplete: function () {
                    $('.group_updates').addClass('on');
                }
            })
            updatesMotion
                .addLabel('a')
                .to(".group_updates .list_area", 1, { y: -145, ease: Back.easeInOut }, 'a')
                .to(".group_updates .more_btn", 0.3, { y: -30, opacity: 1 }, '-=0.35');

            $('.group_updates .more_btn').click(function (e) {
                if ($('.group_updates').hasClass('on')) {
                    e.preventDefault();
                    updatesMotion.reverse()
                    $('.group_updates').removeClass('on')
                }
            });

            $(window).scroll(function () {
                curr = $(this).scrollTop();

                if (curr > 80) {
                    updatesMotion.play();
                } else {
                    updatesMotion.reverse()
                }
            });

            //포트폴리오//scale
            thumbEl = document.querySelectorAll('.container .area_inner');
            thumbEl.forEach(l => {

                gsap.set(l, { scale: 1.23 })

                const pfAni = gsap.timeline({
                    scrollTrigger: {
                        trigger: l,
                        start: "0 60%",
                        end: "30% 60%",
                        scrub: true,
                    }
                });

                pfAni
                    .to(l, { scale: 1 })
            });
        },

        "(max-width: 1023px)": function () {

            //헤더 마우스 호버
            navMotion = gsap.timeline({
                paused: false,
                onComplete: function () {
                    $('.group_nav').addClass('on');
                }
            })
            navMotion
                .addLabel('a')
                .to(".group_nav .second", 1, { x: -80, width: 80, height: 37, ease: Back.easeInOut }, 'a')
                .to(".group_nav .third", 1, { x: -161, width: 80, height: 37, ease: Back.easeInOut }, 'a')
                .to(".group_nav .second span, .group_nav .third span", { opacity: 0 }, 'a-=0.2');

            $('.nav_link').mouseover(function () {
                navMotion.reverse()
            });
            $('.nav_link').mouseout(function () {
                navMotion.play()
            });
        },

        "(min-width: 768px)": function () {
            //hover ani
            $(".container .area_inner").mouseover(function () {
                $(this).siblings(".pf_bg").css("opacity", "1");
                $(".container").css("color", "#000");
                $(".header").css("color", "#000");
                $(".scroll_bg").addClass('on')
            });
            $(".container .area_inner").mouseout(function () {
                $(this).siblings(".pf_bg").css("opacity", "0");
                $(".container").css("color", "#f5f4ee");
                $(".header").css("color", "#fff");
                $(".scroll_bg").removeClass('on')
            });
        },

        "(max-width: 767px)": function () {
            //hover ani
            $(".container .area_inner").off('mouseover')
        },

        // all
        "all": function () {
            gsap.registerPlugin(ScrollTrigger);

            //로드//ani
            const loadAni = gsap.timeline();

            gsap.set(".wrapper .velog .intro_link::after", { backgroundColor: "red" })
            loadAni
                .addLabel('a')
                .to(".wrapper", { duration: 0.8, opacity: 1 }, 'a')
                .to(".group_intro", { duration: 0.6, scale: 1 }, 'a')
                .to(".group_updates", { duration: 0.2, right: 0, visibility: "visible", delay: 0.8 }, 'a');

            //메인//intro Hover ani
            $(document).ready(function () {
                $('.spread').mouseover(function () {
                    $(this).addClass('on');
                    $(this).siblings().css('opacity', '.1');
                });
                $('.spread').mouseout(function () {
                    $(this).removeClass('on');
                    $(this).siblings().css('opacity', '1');
                });
            });

            //메인//intro ani
            gsap.to(".intro_wrap", {
                scale: 0.85,
                filter: "blur(18px)",
                scrollTrigger: {
                    trigger: ".container",
                    start: "0 top",
                    end: "18% top",
                    scrub: 1,
                }
            });

            //포트폴리오//opacity
            imgEl = document.querySelectorAll('.thumb_area img');
            imgEl.forEach(l => {

                gsap.set(l, { opacity: 0 })

                const imgAni = gsap.timeline({
                    scrollTrigger: {
                        trigger: l,
                        start: "0 60%",
                        end: "35% 90%",
                        scrub: true,
                    }
                });

                imgAni
                    .to(l, { opacity: 1 })
            });
        }
    });

};