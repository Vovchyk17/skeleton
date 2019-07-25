<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php seo_title(); ?></title>
    <meta name="MobileOptimized" content="width"/>
    <meta name="HandheldFriendly" content="True"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0"/>
    <!--    <meta name="theme-color" content="#00bcb0">-->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="main">
    <header>
        <div class="mobile_header alc">
            <a class="logo" href="<?php echo site_url(); ?>">
                <img src="<?php echo theme('img/logo.png'); ?>" alt="logo">
            </a>
            <div id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="container">
            <a class="logo" href="<?php echo site_url(); ?>">
                <img src="<?php echo theme('img/logo.png'); ?>" alt="logo">
            </a>
            <nav id="mainMenu">
                <?php wp_nav_menu(array('container' => false, 'items_wrap' => '<ul id="%1$s">%3$s</ul>', 'theme_location' => 'main_menu')); ?>
            </nav>
        </div>
    </header>