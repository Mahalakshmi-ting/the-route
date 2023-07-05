<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
        content="We are The Route to building talents and careers which we do with passion and a vision to help our clients grow and shine. With some of the most seasoned talent managers from across the country, we pride ourselves on great expertise with executives who have deep knowledge of both acting and direction.">
    <meta name="author" content="TingAdvertising">

    <!-- Touch icons for android and iOS (Bookmark icons) -->
    <link rel="shortcut icon" sizes="192x192" href="images/icons/android-icon-192x192.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png">

    <!-- Schema.org markup for Google+ and facebook -->
    <meta property="og:title" content="The Route">
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.the-route.in/images/the-route-main-hero.jpg">
    <meta property="og:description"
        content="We are The Route to building talents and careers which we do with passion and a vision to help our clients grow and shine. With some of the most seasoned talent managers from across the country, we pride ourselves on great expertise with executives who have deep knowledge of both acting and direction.">

    <!-- Schema.org markup for twitter cards(summary_large_image) -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@TheRoute">
    <meta name="twitter:title" content="The Route">
    <meta name="twitter:description"
        content="We are The Route to building talents and careers which we do with passion and a vision to help our clients grow and shine. With some of the most seasoned talent managers from across the country, we pride ourselves on great expertise with executives who have deep knowledge of both acting and direction.">
    <meta name="twitter:image" content="https://www.the-route.in/images/the-route-main-hero.jpg">

    <title>The Route</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="css/main.css" rel="stylesheet" type="text/css">

    <!-- Analytics code  -->
</head>

<body class="page-template">

    <?php include 'includes/header.php'; ?>

    <section class="card-sec text-center pb-5">
        <div class="container py-5">
            <div class="row justify-content-center align-items-center my-auto">
                <div class="col-lg-10">
                    <!-- Slider main container -->
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slide 1 -->
                            <div class="swiper-slide">
                                <div class="card-sec">
                                    <div class="card-img">
                                        <img src="images/card-1.png" alt="Card" class="card-img" />
                                    </div>
                                    <div class="card-title">
                                        <h3
                                            class="title d-flex align-items-center justify-content-center text-uppercase">
                                            Seshame Mike-il Fathima
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <!-- Slide 2 -->
                            <div class="swiper-slide">
                                <div class="card-sec">
                                    <div class="card-img">
                                        <img src="images/card-2.png" alt="Card" class="card-img" />
                                    </div>
                                    <div class="card-title">
                                        <h3
                                            class="title d-flex align-items-center justify-content-center text-uppercase">
                                            Revolver Rita
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <!-- Slide 3 -->
                            <div class="swiper-slide">
                                <div class="card-sec">
                                    <div class="card-img">
                                        <img src="images/card-1.png" alt="Card" class="card-img" />
                                    </div>
                                    <div class="card-title">
                                        <h3
                                            class="title d-flex align-items-center justify-content-center text-uppercase">
                                            Seshame Mike-il Fathima
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <!-- Slide 4 -->
                            <div class="swiper-slide">
                                <div class="card-sec">
                                    <div class="card-img">
                                        <img src="images/card-2.png" alt="Card" class="card-img" />
                                    </div>
                                    <div class="card-title">
                                        <h3
                                            class="title d-flex align-items-center justify-content-center text-uppercase">
                                            Seshame Mike-il Fathima
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>
    <script>
    $(document).ready(function() {
        var swiper = new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            preloadImages: true, // Preload all images
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            lazy: {
                enabled: true,
            },
            breakpoints: {
                560: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });

    // Get the height of Nav
    var navHeight = document.querySelector('.nav').offsetHeight;

    // Add the height as padding top to card sec
    document.querySelector('.card-sec').style.paddingTop = navHeight + 'px';
    </script>