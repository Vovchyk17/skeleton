<?php get_header(); ?>
<section class="content">
    <div class="container">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <?php the_content(); ?>
        <?php endwhile; endif; ?>
        <a href="#" class="button">Button</a>
    </div>
</section>
<?php get_footer(); ?>