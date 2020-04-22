<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php seo_title(); ?></title>
    <meta name="MobileOptimized" content="width"/>
    <meta name="HandheldFriendly" content="True"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--    <meta name="theme-color" content="#00bcb0">-->
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> data-a="<?php echo admin_url('admin-ajax.php'); ?>">
<div id="main">
    <header>
        <div class="container alc">
            <a class="logo" href="<?php echo site_url(); ?>">
                <img src="<?php echo theme('img/logo.png'); ?>" alt="logo">
            </a>
            <div id="navToggle" class="rwd_show">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav id="mainMenu">
                <?php wp_nav_menu(array('container' => false, 'items_wrap' => '<ul id="%1$s">%3$s</ul>', 'theme_location' => 'main_menu')); ?>
            </nav>
        </div>
    </header>